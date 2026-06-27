document.addEventListener('DOMContentLoaded', () => {
    const viewBtn = document.getElementById('open-mini-gallery');
    const modal = document.getElementById('image-zoom-modal');
    const modalImg = document.getElementById('modal-target-img');
    const closeBtn = document.getElementById('close-img-modal');
    const viewport = document.querySelector('.image-modal-viewport');

    if (viewBtn && modal && modalImg) {
        viewBtn.addEventListener('click', () => {
            const imgSrc = viewBtn.getAttribute('data-img-target');
            modalImg.src = imgSrc;
            modal.classList.add('is-visible');
            document.body.style.overflow = 'hidden';
        });
    }

    function exitModal() {
        modal.classList.remove('is-visible');
        document.body.style.overflow = '';
        setTimeout(() => {
            modalImg.src = '';
        }, 300);
    }

    if (closeBtn) closeBtn.addEventListener('click', exitModal);
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target === viewport) {
                exitModal();
            }
        });

        modal.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        modal.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    }
});

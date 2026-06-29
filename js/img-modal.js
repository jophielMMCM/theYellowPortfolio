document.addEventListener('DOMContentLoaded', () => {
    const viewBtn = document.getElementById('open-mini-gallery');
    const gridLinks = document.querySelectorAll('.grid-item a');
    
    const displayLinks = document.querySelectorAll('.vid-display-link'); 
    
    const modal = document.getElementById('image-zoom-modal');
    const modalImg = document.getElementById('modal-target-img');
    const closeBtn = document.getElementById('close-img-modal');
    const viewport = document.querySelector('.image-modal-viewport');

    if (viewBtn && modal && modalImg) {
        viewBtn.addEventListener('click', () => {
            const imgSrc = viewBtn.getAttribute('data-img-target');
            if (imgSrc) {
                modalImg.src = imgSrc;
                modalImg.alt = viewBtn.getAttribute('aria-label') || '';
                modal.classList.add('is-visible');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    if (displayLinks.length > 0 && modal && modalImg) {
        displayLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const hrefAttr = link.getAttribute('href');
                const imgSrc = link.getAttribute('data-img-target');
                const imgAlt = link.getAttribute('data-img-alt');

                if (hrefAttr === '#' || imgSrc) {
                    e.preventDefault();
                    
                    if (imgSrc) {
                        modalImg.src = imgSrc;
                        modalImg.alt = imgAlt ? imgAlt : ''; 
                        
                        modal.classList.add('is-visible');
                        document.body.style.overflow = 'hidden';
                    }
                }
            });
        });
    }

    if (gridLinks.length > 0 && modal && modalImg) {
        gridLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const imgSrc = link.getAttribute('href');
                modalImg.src = imgSrc;
                
                modalImg.alt = link.querySelector('img')?.getAttribute('alt') || 'Expanded portfolio image view';
                
                modal.classList.add('is-visible');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    function exitModal() {
        if (modal) modal.classList.remove('is-visible');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (modalImg) {
                modalImg.src = '';
                modalImg.alt = '';
            }
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

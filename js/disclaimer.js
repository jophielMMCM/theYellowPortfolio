document.addEventListener('DOMContentLoaded', () => {
    const disclaimer = document.getElementById('desktop-disclaimer');
    const content = document.querySelector('.main-content');

    if (disclaimer && content) {
        if (sessionStorage.getItem('disclaimerShown')) {
            disclaimer.style.display = 'none';
            content.classList.remove('hidden');
        } else {
            setTimeout(() => {
                disclaimer.classList.add('fade-out');
                sessionStorage.setItem('disclaimerShown', 'true');
                
                setTimeout(() => {
                    disclaimer.style.display = 'none';
                    content.classList.remove('hidden');
                    content.classList.add('fade-in');
                }, 800); 
            }, 3000); 
        }
    }
});

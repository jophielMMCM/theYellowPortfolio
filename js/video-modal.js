const modal = document.getElementById('videoModal');
const openBtn = document.getElementById('openVideo');
const closeBtn = document.getElementById('closeVideo');
const player = document.getElementById('ytPlayer');

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    const iframeSrc = player.src;
    player.src = iframeSrc;
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        const iframeSrc = player.src;
        player.src = iframeSrc;
    }
});
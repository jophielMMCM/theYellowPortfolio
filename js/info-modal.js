const openModalBtn = document.getElementById('open-info-btn');
const closeModalBtn = document.getElementById('close-info-btn');
const infoModal = document.getElementById('info-modal');

openModalBtn.addEventListener('click', () => {
  infoModal.classList.add('is-visible');
});

closeModalBtn.addEventListener('click', () => {
  infoModal.classList.remove('is-visible');
});

infoModal.addEventListener('click', (e) => {
  if (e.target === infoModal) {
    infoModal.classList.remove('is-visible');
  }
});

// Prevents nested button form submittal issues during keyboard navigation
document.getElementById('open-mini-gallery').addEventListener('click', (e) => {
  e.stopPropagation();
});

// Click any .gallery-img to view it enlarged with its caption; click or Esc to close.
(function () {
  const modal = document.getElementById('modal');
  if (!modal) return;
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  let opener = null;

  function open(img) {
    opener = img;
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    const caption = img.closest('figure')?.querySelector('figcaption');
    modalCaption.innerHTML = caption ? caption.innerHTML : '';
    modal.style.display = 'flex';
    modal.focus();
  }

  function close() {
    modal.style.display = 'none';
    modalImg.src = '';
    if (opener) opener.focus();
  }

  document.querySelectorAll('.gallery-img').forEach(img => {
    img.tabIndex = 0;
    img.addEventListener('click', () => open(img));
    img.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); }
    });
  });
  modal.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') close();
  });
})();

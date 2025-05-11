document.addEventListener('DOMContentLoaded', () => {
  const heartContainer = document.querySelector('.falling-roses'); // pode renomear se quiser

  const heartImages = [
    { url: 'https://cdn-icons-png.flaticon.com/512/833/833472.png', filter: 'none' },       // vermelho
    { url: 'https://cdn-icons-png.flaticon.com/512/2107/2107957.png', filter: 'none' },     // branco
    { url: 'https://cdn-icons-png.flaticon.com/512/2107/2107957.png', filter: 'none' },
  ];

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('rose'); // usa mesma classe
    const choice = heartImages[Math.floor(Math.random() * heartImages.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    heart.style.backgroundImage = `url(${choice.url})`;
    heart.style.filter = choice.filter;
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 15000);
  }

  setInterval(createHeart, 400);
});


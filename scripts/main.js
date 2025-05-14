document.addEventListener('DOMContentLoaded', () => {
  const heartContainer = document.querySelector('.falling-roses'); // pode renomear se quiser

  const heartImages = [
    { url: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',   filter: 'none' },       // vermelho
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

document.addEventListener("DOMContentLoaded", function () {

    // Efeito de hover nas imagens
    const imagens = document.querySelectorAll("img");

    imagens.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.5)";
            img.style.transition = "0.3s";
            img.style.opacity = "0.8";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.opacity = "1";
        });

        // Animação de entrada suave
        img.style.opacity = "0";
        setTimeout(() => {
            img.style.transition = "opacity 2s";
            img.style.opacity = "1";
        }, 300);
    });

    // Alerta ao clicar nos links dos álbuns
    const linksAlbuns = document.querySelectorAll("a");

    linksAlbuns.forEach(link => {
        link.addEventListener("click", (event) => {
            const confirmacao = confirm("Você será redirecionado para o Site. Deseja continuar?");
            if (!confirmacao) {
                event.preventDefault(); // Cancela o redirecionamento se o usuário clicar em "Cancelar"
            }
        });
    });
});

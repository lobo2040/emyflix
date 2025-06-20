const filmes = document.querySelectorAll('.filme');
const carrossel = document.getElementById('carrossel');

filmes.forEach((filme) => {
  const video = filme.querySelector('video');

  filme.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play();
    carrossel.style.scrollBehavior = 'auto'; // trava o scroll
  });

  filme.addEventListener('mouseleave', () => {
    video.pause();
    carrossel.style.scrollBehavior = 'smooth'; // volta scroll suave
  });
});
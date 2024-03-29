export default function animateLetters() {
  const animatedLetters = document.getElementsByClassName(
    'animated-letters'
  );

  Array.from(animatedLetters).forEach((el) => {
    el.addEventListener('mouseover', function () {
      el.classList.add('animated');
    });
    el.addEventListener('animationend', function () {
      el.classList.remove('animated');
    });
  });
}

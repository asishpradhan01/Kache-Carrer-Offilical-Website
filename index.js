const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.list-items').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

const buttons = document.querySelectorAll("[data-curasel-bttn]");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    const offset = buttons.dataset.bttn === "next" ? 1 : -1;
    const slides = buttons
      .closest("[data-caurosel]")
      .querySelector("[data-slides]");

    const activeSlide = document.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
const menuSlide = document.querySelector('.menu');
const menuText = document.querySelector('.menu__text');

document.addEventListener('DOMContentLoaded', () => {

  menuSlide.addEventListener('click', () => {
    menuSlide.classList.toggle('hovered')
      menuText.classList.toggle('hoveredText')
  })
})
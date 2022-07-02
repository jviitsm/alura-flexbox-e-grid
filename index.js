const BOTAOMENU = document.querySelector('.cabecalho__menu');
const MENU = document.querySelector('.menu-lateral');

BOTAOMENU.addEventListener('click', () => {
    MENU.classList.toggle('menu-lateral--ativo');
})
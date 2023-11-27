const menu = document.querySelector('.menu'); 
const btnHamburguer = document.querySelector('.hamburguer');
const btnMenuClose = document.querySelector('#btnMenuClose');

btnHamburguer.addEventListener('click', onHamburgerClick);
btnMenuClose.addEventListener('click', onBtnMenuCloseClick)

function onHamburgerClick() {
    menu.classList.remove('hidden'); 

}
function onBtnMenuCloseClick() {
    menu.classList.add('hidden');
}
const burger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('.menu-list__item');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
        menu.classList.remove('menu-active');
    });
});

document.addEventListener('click', e => {
    if (!(e.target.closest('.menu') || e.target.closest('.hamburger-menu'))) {
        menu.classList.remove('menu-active');
    }
});
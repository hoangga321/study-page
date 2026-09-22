// .btn-menu
const btnMenu = document.querySelector('.btn-menu');
// main nav
const mainNav = document.querySelector('.main-nav');

// .btn-menu click event
btnMenu.addEventListener('click', () => {
    mainNav.classList.toggle('open-menu');
    // 
    if (btnMenu.innerHTML === 'Menu') {
        btnMenu.innerHTML = 'Close';
    } else {
        btnMenu.innerHTML = 'Menu';
    }
});
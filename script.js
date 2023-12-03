document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mainMenu.classList.toggle('active');
    });
});

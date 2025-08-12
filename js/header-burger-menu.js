const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const overlay = document.querySelector('.menu-overlay');

function toggleMenu() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Toggle menu when clicking burger
burger.addEventListener('click', toggleMenu);

// Close menu when clicking overlay
overlay.addEventListener('click', toggleMenu);

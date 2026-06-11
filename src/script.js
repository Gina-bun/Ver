const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
closeMenuBtn.addEventListener('click', () => mobileMenu.classList.add('hidden'));
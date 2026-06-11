const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
closeMenuBtn.addEventListener('click', () => mobileMenu.classList.add('hidden'));

function toggleDropdown(name) {
    const dropdown = document.getElementById(`dropdown-${name}`);
    const chevron = document.getElementById(`chevron-${name}`);
  
    const isOpen = !dropdown.classList.contains('hidden');
  
    if (isOpen) {
      dropdown.classList.add('hidden');
      dropdown.classList.remove('flex');
      chevron.style.transform = 'rotate(0deg)';
    } else {
      dropdown.classList.remove('hidden');
      dropdown.classList.add('flex');
      chevron.style.transform = 'rotate(90deg)';
    }
  }
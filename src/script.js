const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

//top open and close menu overlay(drop down/ pop up)
menuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
closeMenuBtn.addEventListener('click', () => mobileMenu.classList.add('hidden'));

//to toggle sub drop-downs
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

  
// all theme toggle buttons across both toggles
const themeButtons = document.querySelectorAll('.theme-toggle-btn');

function setTheme(theme) {
  // remove active state from all buttons
  themeButtons.forEach(btn => {
    btn.classList.remove('theme-toggle-btn-active');
    btn.setAttribute('aria-pressed', 'false');
  });

  // add active state to every button matching the chosen theme
  document.querySelectorAll(`[aria-label="${theme} theme"]`).forEach(btn => {
    btn.classList.add('theme-toggle-btn-active');
    btn.setAttribute('aria-pressed', 'true');
  });

  // apply theme to the page
  if (theme === 'Dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else if (theme === 'Light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  } else {
    // System
    document.documentElement.classList.remove('dark', 'light');
  }

  localStorage.setItem('theme', theme);
}

// attach click to every toggle button
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.getAttribute('aria-label').replace(' theme', '');
    setTheme(theme);
  });
});

// on page load, restore saved theme
const savedTheme = localStorage.getItem('theme') || 'Light';
setTheme(savedTheme);  
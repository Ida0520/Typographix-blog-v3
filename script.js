// skeleton screen UI shown for 3 seconds
setTimeout(() => {
  document.querySelectorAll('.skeleton').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.hidden').forEach(el => el.style.display = 'block');
}, 3000)

// function to check if page is scrolled and adjust the logo size
function checkScroll() {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');
  let scrollPosition = window.scrollY;


  // add/remove 'scrolled' class based on scroll position
  if (scrollPosition > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // calculate new font size based on scroll position
  let newSize = 3 - (scrollPosition * 0.03); //decrease by 0.03 rem for every 1px scrolled

  // clamping the font size between 1.5rem and 3rem
  newSize = Math.max(1.5, newSize);
  newSize = Math.min(3, newSize);

  logo.style.fontSize = newSize + 'rem';

}

// event listener for scroll event
window.addEventListener('scroll', checkScroll);


// Dark mode ----------------------------------------------------
const themeSwitcher = document.getElementById('theme-switcher');

// Update Theme Icon & Text
function UpdateThemeIcon(isDarkMode) {
  themeSwitcher.children[0].classList.replace(isDarkMode ? 'fa-sun' :  'fa-moon', isDarkMode ? 'fa-moon' : 'fa-sun');
}

// Determine if dark mode is prefered 
function prefersDarkMode() {
  return window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches;
}

// set the theme based on the prefernce
function setThemeBasedOnPreference() {
  const isDarkMode = prefersDarkMode();
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  UpdateThemeIcon(isDarkMode);
}

// switch theme
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  UpdateThemeIcon(newTheme === 'dark')
}

// event listener
themeSwitcher.addEventListener('click', switchTheme);

// Check Local Storage For Theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    UpdateThemeIcon(savedTheme === 'dark');
  } else {
    setThemeBasedOnPreference();
  }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeBasedOnPreference);

// initialize theme when the script loads
initializeTheme();
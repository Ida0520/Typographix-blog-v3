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


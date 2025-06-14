let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// typing text code
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Backend Developer', 'Blockchain Developer', 'Web Designer', 'Photographer'],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1200,
  loop: true,
});

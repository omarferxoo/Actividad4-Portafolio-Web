const enlaces = document.querySelectorAll('.navbar-nav .nav-link');
const menu = document.querySelector('.navbar-collapse');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

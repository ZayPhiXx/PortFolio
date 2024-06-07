
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var menu = document.getElementById('menu');
    var headerHeight = header.offsetHeight;

    if (window.pageYOffset > headerHeight) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // On scroll down, hide the navbar
    document.getElementById('menu').style.top = "-50px";
  } else {
    // On scroll up, show the navbar
    document.getElementById('menu').style.top = "0";
  }

  lastScrollTop = scrollTop;
});

function form() {
  var button = document.getElementById('button');
  button.addEventListener('click', function() {
    window.location.href = 'contact.html';
  });
}
form();
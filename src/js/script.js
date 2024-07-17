const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("hidden");
  e.preventDefault();
});

// header

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  if (window.scrollY > fixNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

document.body.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("hidden");
    hamburger.classList.remove("active");
  }
});

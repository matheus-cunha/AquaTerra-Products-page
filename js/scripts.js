function navEffectsOnScroll() {
  const nav = document.querySelector("#nav");
  const navHeight = nav.offsetHeight;
  if (window.scrollY >= navHeight) {
    nav.classList.add("nav-active");
  } else {
    nav.classList.remove("nav-active");
  }
}

window.addEventListener("scroll", function () {
  navEffectsOnScroll();
});

const button = document.getElementById("navbarToggler"); 
const menu = document.getElementById("navbarCollapse"); 
button.addEventListener(
  "click", function () { 
    menu.classList.toggle("show"); 
  }
);
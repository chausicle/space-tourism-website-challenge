document.addEventListener("DOMContentLoaded", () => {
  const techImage = document.querySelector("img.technology-image");
  const navHamburger = document.querySelector("svg.nav-hamburger");
  const navHamburgerClose = document.querySelector("svg.nav-hamburger-close");
  navHamburger.addEventListener("click", openSideMenu);
  navHamburgerClose.addEventListener("click", closeSideMenu);

  if (window.innerWidth > 1080) {
    techImage.src = "assets/technology/image-space-capsule-portrait.jpg";
  } else if (window.innerWidth <= 1080 && window.innerWidth > 800) {
    techImage.src = "assets/technology/image-space-capsule-landscape.jpg";
  } else if (window.innerWidth <= 800) {
    techImage.src = "assets/technology/image-space-capsule-landscape.jpg";
  }
});

function openSideMenu(event) {
  const sidemenu = document.querySelector("div.nav-side-menu");
  const hamburgerClose = document.querySelector("svg.nav-hamburger-close");
  const hamburger = document.querySelector("svg.nav-hamburger");

  hamburger.classList.replace("show", "hide");
  sidemenu.classList.replace("close-menu", "open-menu");
  hamburgerClose.classList.replace("hide", "show");
}

function closeSideMenu(event) {
  const sidemenu = document.querySelector("div.nav-side-menu");
  const hamburgerClose = document.querySelector("svg.nav-hamburger-close");
  const hamburger = document.querySelector("svg.nav-hamburger");

  hamburger.classList.replace("hide", "show");
  sidemenu.classList.replace("open-menu", "close-menu");
  hamburgerClose.classList.replace("show", "hide");
}

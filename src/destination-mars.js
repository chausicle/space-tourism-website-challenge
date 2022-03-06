document.addEventListener("DOMContentLoaded", () => {
  const planetImg = document.querySelector("img.planet-image");
  const navHamburger = document.querySelector("svg.nav-hamburger");
  const navHamburgerClose = document.querySelector("svg.nav-hamburger-close");
  navHamburger.addEventListener("click", openSideMenu);
  navHamburgerClose.addEventListener("click", closeSideMenu);

  window.onresize = () => {
    console.log(planetImg);
    console.log(window.innerWidth);

    if (window.innerWidth <= 1080) {
      planetImg.src = "assets/destination/image-mars.webp";
    } else if (window.innerWidth > 1080) {
      planetImg.src = "assets/destination/image-mars.png";
    }
  };
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

window.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM loaded");

  const navHamburger = document.querySelector("svg.nav-hamburger");
  const navHamburgerClose = document.querySelector("svg.nav-hamburger-close");
  navHamburger.addEventListener("click", openSideMenu);
  navHamburgerClose.addEventListener("click", closeSideMenu);
  // document.addEventListener('click')
});

function openSideMenu(event) {
  const sidemenu = document.querySelector("div.nav-side-menu");
  const hamburgerClose = document.querySelector("svg.nav-hamburger-close");
  const hamburger = document.querySelector("svg.nav-hamburger");

  hamburger.style.visibility = "hidden";
  sidemenu.style.visibility = "visible";
  sidemenu.style.opacity = 1;
  sidemenu.style.width = '65%';
  hamburgerClose.style.visibility = "visible";
}

function closeSideMenu(event) {
  const sidemenu = document.querySelector("div.nav-side-menu");
  const hamburgerClose = document.querySelector("svg.nav-hamburger-close");
  const hamburger = document.querySelector("svg.nav-hamburger");

  hamburger.style.visibility = "visible";
  sidemenu.style.visibility = "hidden";
  sidemenu.style.opacity = 0;
  sidemenu.style.width = '50%';
  hamburgerClose.style.visibility = "hidden";
}

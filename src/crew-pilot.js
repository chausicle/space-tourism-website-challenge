document.addEventListener("DOMContentLoaded", () => {
  const crewImage = document.querySelector("img.crew-image");
  const crewUpperContainer = document.querySelector("div.crew-upper-container");
  const crewNavbar = document.querySelector("div.crew-navbar");
  const crewHeadingTitle = document.querySelector("h4.crew-heading-title");
  const mobileNavContainer = document.createElement("div");
  const hr = document.createElement("hr");
  const navHamburger = document.querySelector("svg.nav-hamburger");
  const navHamburgerClose = document.querySelector("svg.nav-hamburger-close");
  navHamburger.addEventListener("click", openSideMenu);
  navHamburgerClose.addEventListener("click", closeSideMenu);
  mobileNavContainer.setAttribute("class", "mobile-nav");
  hr.setAttribute("class", "mobile-hr");

  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-victor-glover.png";
  } else if (window.innerWidth <= 1080 && window.innerWidth > 800) {
    crewImage.src = "assets/crew/image-victor-glover.webp";
  } else if (window.innerWidth <= 800) {
    crewImage.src = "assets/crew/image-victor-glover.webp";
    mobileNavContainer.appendChild(crewImage);
    mobileNavContainer.appendChild(hr);
    mobileNavContainer.appendChild(crewNavbar);
    crewUpperContainer.insertBefore(mobileNavContainer, crewHeadingTitle);
  }

  window.onresize = onResize;
});

function onResize() {
  const crewImage = document.querySelector("img.crew-image");
  const bottomContainer = document.querySelector("div.bottom-container");
  const crewUpperContainer = document.querySelector("div.crew-upper-container");
  const crewNavbar = document.querySelector("div.crew-navbar");
  const crewHeadingTitle = document.querySelector("h4.crew-heading-title");
  const mobileNavContainer = document.querySelector("div.mobile-nav");

  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-victor-glover.png";
    if (mobileNavContainer) {
      mobileNavContainer.remove();
      crewUpperContainer.appendChild(crewNavbar);
      bottomContainer.appendChild(crewImage);
    }
  } else if (window.innerWidth <= 1080 && window.innerWidth > 800) {
    crewImage.src = "assets/crew/image-victor-glover.webp";
    if (mobileNavContainer) {
      mobileNavContainer.remove();
      crewUpperContainer.appendChild(crewNavbar);
      bottomContainer.appendChild(crewImage);
    }
  } else if (window.innerWidth <= 800) {
    crewImage.src = "assets/crew/image-victor-glover.webp";
    if (!mobileNavContainer) {
      const mobileNavContainer = document.createElement("div");
      const hr = document.createElement("hr");
      mobileNavContainer.setAttribute("class", "mobile-nav");
      hr.setAttribute("class", "mobile-hr");
      crewNavbar.remove();
      crewImage.remove();
      mobileNavContainer.appendChild(crewImage);
      mobileNavContainer.appendChild(hr);
      mobileNavContainer.appendChild(crewNavbar);
      crewUpperContainer.insertBefore(mobileNavContainer, crewHeadingTitle);
    }
  }
}

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

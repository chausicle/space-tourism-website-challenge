document.addEventListener("DOMContentLoaded", () => {
  const crewImage = document.querySelector("img.crew-image");
  const crewUpperContainer = document.querySelector("div.crew-upper-container");
  const crewNavbar = document.querySelector("div.crew-navbar");
  const crewHeadingTitle = document.querySelector("h4.crew-heading-title");
  const mobileNavContainer = document.createElement("div");
  const hr = document.createElement("hr");
  mobileNavContainer.setAttribute("class", "mobile-nav");
  hr.setAttribute("class", "mobile-hr");

  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-douglas-hurley.png";
  } else if (window.innerWidth <= 1080 && window.innerWidth > 800) {
    crewImage.src = "assets/crew/image-douglas-hurley.webp";
  } else if (window.innerWidth <= 800) {
    crewImage.src = "assets/crew/image-douglas-hurley.webp";
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
    crewImage.src = "assets/crew/image-douglas-hurley.png";
    if (mobileNavContainer) {
      mobileNavContainer.remove();
      crewUpperContainer.appendChild(crewNavbar);
      bottomContainer.appendChild(crewImage);
    }
  } else if (window.innerWidth <= 1080 && window.innerWidth > 800) {
    crewImage.src = "assets/crew/image-douglas-hurley.webp";
    if (mobileNavContainer) {
      mobileNavContainer.remove();
      crewUpperContainer.appendChild(crewNavbar);
      bottomContainer.appendChild(crewImage);
    }
  } else if (window.innerWidth <= 800) {
    crewImage.src = "assets/crew/image-douglas-hurley.webp";
    if(!mobileNavContainer) {
      const mobileNavContainer = document.createElement("div");
      const hr = document.createElement("hr");
      mobileNavContainer.setAttribute("class", "mobile-nav");
      hr.setAttribute("class", "mobile-hr");
      crewNavbar.remove()
      crewImage.remove()
      mobileNavContainer.appendChild(crewImage)
      mobileNavContainer.appendChild(hr)
      mobileNavContainer.appendChild(crewNavbar)
      crewUpperContainer.insertBefore(mobileNavContainer, crewHeadingTitle);
    }
  }
}

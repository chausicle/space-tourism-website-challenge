document.addEventListener("DOMContentLoaded", () => {
  const crewImage = document.querySelector("img.crew-image");

  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-anousheh-ansari.png";
  } else if (window.innerWidth <= 1080) {
    crewImage.src = "assets/crew/image-anousheh-ansari.webp";
  }
});

window.onresize = () => {
  const crewImage = document.querySelector("img.crew-image");
  
  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-anousheh-ansari.png";
  } else if (window.innerWidth <= 1080) {
    crewImage.src = "assets/crew/image-anousheh-ansari.webp";
  }
};

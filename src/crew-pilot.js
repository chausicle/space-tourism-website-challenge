document.addEventListener("DOMContentLoaded", () => {
  const crewImage = document.querySelector("img.crew-image");

  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-victor-glover.png";
  } else if (window.innerWidth <= 1080) {
    crewImage.src = "assets/crew/image-victor-glover.webp";
  }
});

window.onresize = () => {
  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-victor-glover.png";
  } else if (window.innerWidth <= 1080) {
    crewImage.src = "assets/crew/image-victor-glover.webp";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const crewImage = document.querySelector("img.crew-image");

  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-douglas-hurley.png";
  } else if (window.innerWidth <= 1080) {
    crewImage.src = "assets/crew/image-douglas-hurley.webp";
  }
});

window.onresize = () => {
  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-douglas-hurley.png";
  } else if (window.innerWidth <= 1080) {
    crewImage.src = "assets/crew/image-douglas-hurley.webp";
  }
};

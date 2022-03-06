document.addEventListener("DOMContentLoaded", () => {
  const crewImage = document.querySelector("img.crew-image");

  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-mark-shuttleworth.png";
  } else if (window.innerWidth <= 1080) {
    crewImage.src = "assets/crew/image-mark-shuttleworth.webp";
  }
});

window.onresize = () => {
  const crewImage = document.querySelector("img.crew-image");
  
  if (window.innerWidth > 1080) {
    crewImage.src = "assets/crew/image-mark-shuttleworth.png";
  } else if (window.innerWidth <= 1080) {
    crewImage.src = "assets/crew/image-mark-shuttleworth.webp";
  }
};

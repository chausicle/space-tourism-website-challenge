document.addEventListener("DOMContentLoaded", () => {
  const techImage = document.querySelector("img.technology-image")

  if(window.innerWidth > 1080) {
    techImage.src = "assets/technology/image-space-capsule-portrait.jpg"
  } else if(window.innerWidth <= 1080 && window.innerWidth > 800) {
    techImage.src = "assets/technology/image-space-capsule-landscape.jpg"
  } else if(window.innerWidth <= 800) {
    techImage.src = "assets/technology/image-space-capsule-landscape.jpg"
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const planetImg = document.querySelector('img.planet-image')

  window.onresize = () => {
    console.log(planetImg)
    console.log(window.innerWidth)

    if (window.innerWidth <= 1080 && window.innerWidth >= 800) {
      planetImg.src = "assets/destination/image-titan.webp"
    } else if (window.innerWidth > 1080) {
      planetImg.src = "assets/destination/image-titan.png"
    }
  }
})
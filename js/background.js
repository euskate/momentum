const images = [
  // "img/1.jpeg",
  "https://source.unsplash.com/random/?love",
  "https://source.unsplash.com/random/?nature",
  "https://source.unsplash.com/random/?sky"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

document.body.style.backgroundImage = `url(${chosenImage})`
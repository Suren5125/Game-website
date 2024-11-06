const imageContainer = document.querySelector(".screenshots")
const scrImages = document.querySelector(".scr-images").querySelectorAll("img")
const body = document.querySelector("body")
const arrows = document.querySelectorAll("#arrow")
const Close = document.querySelector(".close")
const zoom = document.querySelector(".zoom")

scrImages.forEach((scrImage) => {
    scrImage.onclick = () => {
        scrImages[0].classList.add('scr-image-active')
        scrImages[1].classList.add('scr-image-active')
        imageContainer.classList.add('container-active')
        scrImage.classList.add('active')
    }
})

arrows.forEach((arrow) => {
    arrow.onclick = () => {
        scrImages.forEach((scrImage) => {
            scrImage.classList.contains('active') ? scrImage.classList.remove('active') : scrImage.classList.add('active')
        })
    }
})

Close.onclick = () => {
    imageContainer.classList.remove('container-active')
    scrImages[0].classList.remove('scr-image-active')
    scrImages[1].classList.remove('scr-image-active')
    imageContainer.classList.remove('container-zoom')
}

zoom.querySelectorAll("img").forEach((item) => {
    item.onclick = () => {
        imageContainer.classList.toggle('container-zoom')
    }
})
const gameImage = document.querySelector("#gameImg")

window.addEventListener('scroll', (e) => {
    let scrollpos = window.scrollY
    gameImage.style.opacity = (scrollpos - 1750) / 900
})


gsap.registerPlugin(ScrollTrigger);

gsap.from('.game-card', {
    opacity: 0,
    duration: 1.3,
    x: -100
})


gsap.from("#title", {
    opacity: 0,
    y: 70,
    duration: 1.5,
    scrollTrigger: "#text"
})

gsap.from("#text", {
    opacity: 0,
    y: 70,
    duration: 1.5,
    scrollTrigger: "#text"
})
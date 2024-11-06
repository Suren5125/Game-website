// index.html

gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
    gsap.from('.header-image', { scale: 1.2 })
    gsap.to('.header-image', { scale: 1, duration: 1 })
    gsap.from('.navigation', { yPercent: -100 })
    gsap.to('.navigation', { yPercent: 0, duration: 1.3 })
    gsap.from('.header-text', { opacity: 0, yPercent: -15 })
    gsap.to('.header-text', { opacity: 1, yPercent: 0, duration: 1.5 })
})

const tl = new TimelineMax({ delay: 0.5, paused: true });


gsap.from('.about-title', {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".about-subtitle"
})

gsap.from('.about-subtitle', {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".about-text"
})

gsap.from('.about-text', {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".about-btn"
})

gsap.from('.about-btn', {
    duration: 1,
    opacity: 0,
    scrollTrigger: ".md-image"
})

gsap.from('.md-image', {
    duration: 1,
    opacity: 0,
    y: 40,
    scrollTrigger: '.bottom-image'
})

gsap.from('.bottom-image', {
    duration: 1,
    opacity: 0,
    scrollTrigger: '.check'
})

gsap.from('.games-title', {
    duration: 1,
    opacity: 0,
    y: 20,
    scrollTrigger: '.games-subtitle'
})

gsap.from('.games-subtitle', {
    duration: 1,
    opacity: 0,
    y: 20,
    scrollTrigger: '.games-subtitle'
})

gsap.from('.game-card1', {
    xPercent: -30,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: '.game-download'
})

gsap.from('.game-card2', {
    xPercent: 30,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: '.game-download'
})

gsap.from('.game-card3', {
    xPercent: -30,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: '#checkImage'
}, 2000)

gsap.from('#gameImage', {
    xPercent: 30,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: '#checkImage'
})

gsap.from('#contact-bottom-img', {
    yPercent: 100,
    duration: 1,
    scrollTrigger: '#bottom-image'
})

// Kipon.html


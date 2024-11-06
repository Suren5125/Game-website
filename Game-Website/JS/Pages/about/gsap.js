gsap.registerPlugin(ScrollTrigger);

gsap.from('.text', {
    x: -80,
    opacity: 0,
    duration: 1.5
})

gsap.from('#title', {
    opacity: 0,
    duration: 1.3,
    y: 50,
    scrollTrigger: '#firstCard'
})

gsap.from("#firstCard", {
    x: -70,
    duration: 1.2,
    opacity: 0,
    scrollTrigger: '#text1'
})

gsap.from("#secondCard", {
    x: -70,
    duration: 1.2,
    opacity: 0,
    scrollTrigger: '#text2'
})

gsap.from('#fw-title', {
    opacity: 0,
    duration: 1.2,
    x: -70,
    scrollTrigger: '#fw-subtitle'
})

gsap.from('#fw-subtitle', {
    opacity: 0,
    duration: 1.2,
    x: -70,
    scrollTrigger: '#fw-text'
})

gsap.from('#fw-text', {
    opacity: 0,
    duration: 1.2,
    x: -70,
    scrollTrigger: '#check'
})

gsap.from('.fw-image-card', {
    opacity: 0,
    duration: 1.2,
    x: -70,
    scrollTrigger: '#fw-text'
})
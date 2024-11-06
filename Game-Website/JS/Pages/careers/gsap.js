gsap.registerPlugin(ScrollTrigger);

gsap.from(".text", {
    opacity: 0,
    duration: 1.2,
    x: -50
})


gsap.from(".cv-content", {
    opacity: 0,
    y: 70,
    duration: 1.2,
    scrollTrigger: "#title"
})
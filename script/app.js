// Circle animation
const tween = gsap.to(".circle", 2, {
    ease: "none",
    scaleX: 30, scaleY:8});

const trigger = document.querySelector("h1");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: 500,
    triggerHook: 0.35
})
    // .addIndicators()
    .setTween(tween)
    .addTo(controller);

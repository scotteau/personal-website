// Circle animation
const tween = gsap.to(".circle", 2, {
    ease: "back.out(1.7)",
    scaleX: 40, scaleY:9});

const trigger = document.querySelector("h1");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: 500,
    triggerHook: 0.35
})
    .addIndicators()
    .setTween(tween)
    .addTo(controller);

window.addEventListener("load", () => {
  // region Circle animation

  const tween = gsap.to(".circle", 2, {
    ease: "none",
    scale: 40,
  });

  const trigger = document.querySelector("h1");

  const controller = new ScrollMagic.Controller();

  const circleAnimation = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: 500,
    triggerHook: 0.35,
  })
    // .addIndicators({ name: "circle-animation" })
    .setTween(tween)
    .addTo(controller);
  //endregion

  //region Cards Animation
  const item = document.querySelector(".portfolios ul li");

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "#item-1",
    duration: item.scrollHeight * 2 + 10,
    triggerHook: 0.35,
  })
    .setPin("#item-1", { pushFollowers: false })
    // .addIndicators({ name: "pin animation" })
    .addTo(controller);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#item-2",
    duration: item.scrollHeight + 10,
    triggerHook: 0.35,
  })
    .setPin("#item-2", { pushFollowers: false })
    // .addIndicators()
    .addTo(controller);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: "#item-3",
    duration: 10,
    triggerHook: 0.35,
  })
    .setPin("#item-3", { pushFollowers: false })
    // .addIndicators()
    .addTo(controller);

  //    endregion

  //region Highlighter
  const highlighter1 = gsap.to(".about .highlighter", 2, { scaleX: 1 });
  const highlighter2 = gsap.to(".work .highlighter", 2, { scaleX: 1 });
  const highlighter3 = gsap.to(".contact .highlighter", 2, { scaleX: 1 });

  const aboutMe = new ScrollMagic.Scene({
    triggerElement: ".about h2",
    duration: 400,
    triggerHook: 0.8,
  })
    // .addIndicators({ name: "highlighter" })
    .setTween(highlighter1)
    .addTo(controller);

  const work = new ScrollMagic.Scene({
    triggerElement: ".work h2",
    duration: 400,
    triggerHook: 0.8,
  })
    // .addIndicators({ name: "highlighter" })
    .setTween(highlighter2)
    .addTo(controller);

  const contact = new ScrollMagic.Scene({
    triggerElement: ".contact h2",
    duration: 400,
    triggerHook: 0.8,
  })
    // .addIndicators({ name: "highlighter" })
    .setTween(highlighter3)
    .addTo(controller);
  //endregion

  //region Sticky Navigation bar

  const changeColor = gsap.to("header", 1, { backgroundColor: "#333335" });

  const scene = new ScrollMagic.Scene({
    triggerElement: ".hero h3",
    duration: 100,
    triggerHook: 0.3,
  })
    // .addIndicators()
    .addTo(controller)
    .setTween(changeColor);

//  endregion

}); // end of method




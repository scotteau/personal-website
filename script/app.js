window.addEventListener("load", () => {

  // region Blob animation
  const shapes = [
    {
      path:
          "M419.58 138.667C468.561 210.668 502.602 283.893 496.235 362.384C489.745 440.753 442.846 524.264 374.029 554.509C305.212 584.755 214.353 561.489 139.903 519.733C65.4533 477.978 7.41171 417.609 0.676925 354.915C-6.05786 292.343 38.5142 227.444 87.4944 155.443C136.475 83.5642 189.741 4.33869 248.272 0.175371C306.803 -3.98795 370.6 66.6661 419.58 138.667Z",
      pathAlt:
          "M456.519 88.1731C505.499 160.174 562.368 246.481 556 324.972C549.51 403.34 469.846 486.755 401.029 517C332.212 547.245 215.107 517.065 140.657 475.309C66.2066 433.554 8.16499 395.667 1.4302 332.972C-5.30458 270.4 48.5198 228.501 97.5001 156.5C146.48 84.6215 199.746 5.39593 258.278 1.23261C316.809 -2.93071 407.538 16.1721 456.519 88.1731Z",
    },
    {
      path:
          "M531.265 201.07C630.02 222.118 709.803 280.641 791.577 341.127C873.212 401.737 956.838 464.311 967.079 537.789C977.303 611.529 914.158 695.912 864.414 787.551C814.547 879.051 778.098 977.545 706.196 1023.19C634.433 1068.72 527.356 1061.27 476.124 999.051C425.014 936.969 429.873 820.25 365.992 735.928C301.988 651.466 169.523 599.154 129.862 517.463C90.3399 435.649 143.9 324.209 229.536 260.407C315.048 196.465 432.773 180.038 531.265 201.07Z",
      pathAlt:
          "M551.804 255.593C650.559 276.641 757.34 346.071 839.115 406.557C920.75 467.167 1026.84 510.31 1037.08 583.788C1047.3 657.529 984.156 741.912 934.413 833.551C884.546 925.051 842.401 991.852 770.499 1037.5C698.736 1083.02 531.166 1082.15 479.933 1019.93C428.824 957.848 512.055 816.822 448.174 732.5C385.5 637 214.161 608.191 174.5 526.5C134.978 444.686 105.364 375.339 191 311.537C276.512 247.595 453.312 234.561 551.804 255.593Z",
    },
  ];



  const timeline_left = gsap.timeline({ repeat: -1});
  const timeline_right = gsap.timeline({ repeat: -1});


  const blobLeft = document.querySelector(".hero .blob-left path");
  const blobRight = document.querySelector(".hero .blob-right path");

  const duration = 18;

  timeline_left
      .to(blobLeft, {
        duration:duration,
        ease: "none",
        attr: {
          d: shapes[0].pathAlt,
        },
      })
      .to(blobLeft, {
        duration: duration,
        ease: "none",
        attr: { d: shapes[0].path },
        yoyo: true,
        repeat: -1,
      });

  timeline_right
      .to(blobRight, {
        duration:duration,
        ease: "none",
        attr: {
          d: shapes[1].pathAlt,
        },
      })
      .to(blobRight, {
        duration: duration,
        ease: "none",
        attr: { d: shapes[1].path },
        yoyo: true,
        repeat: -1,
      });


//endregion

  // region Circle animation

  const tween = gsap.to(".circle", 2, {
    ease: "none",
    scale: 50,
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
    triggerElement: ".about p",
    duration: 600,
    triggerHook: 0.8,
  })
    // .addIndicators({ name: "highlighter" })
    .setTween(highlighter1)
    .addTo(controller);

  const work = new ScrollMagic.Scene({
    triggerElement: ".work li",
    duration: 600,
    triggerHook: 0.8,
  })
    // .addIndicators({ name: "highlighter" })
    .setTween(highlighter2)
    .addTo(controller);

  const contact = new ScrollMagic.Scene({
    triggerElement: ".contact h2",
    duration: 600,
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




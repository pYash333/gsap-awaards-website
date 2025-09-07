// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline
  let tl = gsap.timeline();

  if (document.querySelector(".hero-section")) {
    // Initialize GSAP timeline
    const tl = gsap.timeline();

    // Step 1: Animate split text
    let split = new SplitText(".animate-text", { type: "chars" });
    tl.from(split.chars, {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power2.out",
    });

    // Step 2: Animate clip text
    tl.from(
      ".clip-text",
      {
        duration: 2,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        ease: "power3.out",
      },
      "-=1"
    );

    // Step 3: Animate bottom content
    tl.from(
      ".bottom-content",
      {
        duration: 0.8,
        opacity: 0,
        y: 200,
        ease: "power1.out",
      },
      "-=0.4"
    );

    // Step 4: Rotate section based on scroll

    gsap.to(".hero-section", {
      rotation: 5,
      scaleX: 0.95,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "10% top",
        end: "bottom top",
        scrub: 1,
        markers: false,
      },
    });
  }
  // message section js
  if (document.querySelector(".message-section")) {
    const split = new SplitText(".message-section .title-text", { type: "words" });

    gsap.from(split.words, {
      opacity: 0.1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".message-section",
        start: "top 50%",
        end: "60% 50%",
        scrub: 1,
        markers: false,
      },
    });

    gsap.fromTo(
      ".message-section .highlight-text",
      {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // hidden
        opacity: 0,
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // fully visible
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".message-section",
          start: "top 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    const split2 = new SplitText(".message-section .content", { type: "lines" });

    gsap.from(split2.lines, {
      y: 40, 
      opacity: 0, 
      stagger: 0.2, 
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".message-section",
        start: "50% 40%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  }
});

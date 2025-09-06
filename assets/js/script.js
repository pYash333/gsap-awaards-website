gsap.registerPlugin(SplitText);

// Create a timeline
let tl = gsap.timeline();

//  Step 1: Animate split text right after
let split = new SplitText(".animate-text", { type: "chars" });
tl.from(split.chars, {
  y: 40,
  opacity: 0,
  stagger: 0.08,
  duration: 0.8,
  ease: "power2.out",
});

//  Step 2: Animate clip text
tl.from(".clip-text", {
  duration: 2,
  clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  ease: "power3.out",
}, "-=1");

// Step 3: Animate Bottom cotnent
tl.from(".bottom-content", {
  duration: 0.8,
  opacity: 0,
  y: 200,
  ease: "power1.out",
},"-=0.4");

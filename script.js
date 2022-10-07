gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})

// navbar
tl.to(".icon", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0})
    .to(".nav a", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0, stagger:0.2}, "-=1.9")
    .to(".anim", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0, stagger: 0.2}, "-=1.9")

gsap.to(".midanim", {
    scrollTrigger: {
        trigger: ".mid",
        start: "20px 80%",
        marker: true,
        toggleActions: "play none none none",
    },
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1,
    delay: 0.3,
});

gsap.to(".animate0", {
    scrollTrigger: {
        trigger: ".animate0",
        toggleActions: "play none none none",
    },
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.8,
});

gsap.to(".animate", {
    scrollTrigger: {
        trigger: ".animate",
        toggleActions: "play none none none",
    },
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.8,
});

gsap.to(".animate2", {
    scrollTrigger: {
        trigger: ".animate2",
        toggleActions: "play none none none",
    },
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.8,
});

gsap.to(".animate3", {
    scrollTrigger: {
        trigger: ".animate3",
        toggleActions: "play none none none",
    },
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.8,
});
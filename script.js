let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})

// navbar
tl.to(".icon", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0})
    .to(".nav a", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0, stagger:0.2}, "-=1.9")
    .to(".appimg", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0}, "-=1.9")
    .to(".text1 p", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0, stagger:0.2}, "-=1.9")
    .to(".text1 img", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0}, "-=2.2")
    .to(".desc", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0}, "-=2")
    .to(".dr img", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", "opacity": 1, y: 0}, "-=1.9")

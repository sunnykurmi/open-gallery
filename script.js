gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    smooth: true,
    lerp: 0.1,
    duration: 2
});

lenis.on("scroll", ScrollTrigger.update);

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);


////// 1st section
ScrollTrigger.create({
    trigger: ".sec_1",
    start: "top top",
    end: "bottom 50%",
    scrub: true,
    // markers: true,
    onUpdate: (self) => {
        const progress = self.progress;

        // Clip path progress (bottom → top)
        const topY = 100 - (100 * progress);
        gsap.set(".clippy_1", {
            clipPath: `polygon(0 ${topY}%, 100% ${topY}%, 100% 100%, 0% 100%)`,
            webkitClipPath: `polygon(0 ${topY}%, 100% ${topY}%, 100% 100%, 0% 100%)`
        });

        
        const scaleVal = 1.1 - (0.1 * progress);
        gsap.set(".clippy_1 img", { scale: scaleVal });
    }
});


ScrollTrigger.create({
    trigger: ".sec_1",
    start: "bottom center",
    end: "bottom 0%",
    scrub: true,
    //   markers: true,
    onUpdate: (self) => {
        const progress = self.progress;
        const topY = 100 - (100 * progress);

        gsap.set(".clippy_1", {
            clipPath: `polygon(0 0, 100% 0, 100% ${topY}%, 0% ${topY}%)`,
            webkitClipPath: `polygon(0 0, 100% 0, 100% ${topY}%, 0% ${topY}%)`
        });

        
        const scaleVal = 1 - (0.1 * progress);
        gsap.set(".clippy_1 img", { scale: scaleVal });
    }
});




/////2nd section
ScrollTrigger.create({
    trigger: ".sec_2",
    start: "top top",
    end: "bottom 50%",
    scrub: true,
    //   markers: true,
    onUpdate: (self) => {
        const progress = self.progress;
        const topY = 100 - (100 * progress);

        gsap.set(".clippy_2", {
            clipPath: `polygon(0 ${topY}%, 100% ${topY}%, 100% 100%, 0% 100%)`,
            webkitClipPath: `polygon(0 ${topY}%, 100% ${topY}%, 100% 100%, 0% 100%)`
        });
        
        const scaleVal = 1.1 - (0.1 * progress);
        gsap.set(".clippy_2 img", { scale: scaleVal });
    }
});

ScrollTrigger.create({
    trigger: ".sec_2",
    start: "bottom center",
    end: "bottom 0%",
    scrub: true,
    //   markers: true,
    onUpdate: (self) => {
        const progress = self.progress;
        const topY = 100 - (100 * progress);

        gsap.set(".clippy_2", {
            clipPath: `polygon(0 0, 100% 0, 100% ${topY}%, 0% ${topY}%)`,
            webkitClipPath: `polygon(0 0, 100% 0, 100% ${topY}%, 0% ${topY}%)`
        });
        
        const scaleVal = 1 - (0.1 * progress);
        gsap.set(".clippy_2 img", { scale: scaleVal });
    }
});



///3rd section
ScrollTrigger.create({
    trigger: ".sec_3",
    start: "top top",
    end: "bottom 50%",
    scrub: true,
    //   markers: true,
    onUpdate: (self) => {
        const progress = self.progress;
        const topY = 100 - (100 * progress);

        gsap.set(".clippy_3", {
            clipPath: `polygon(0 ${topY}%, 100% ${topY}%, 100% 100%, 0% 100%)`,
            webkitClipPath: `polygon(0 ${topY}%, 100% ${topY}%, 100% 100%, 0% 100%)`
        });
        
        const scaleVal = 1.1 - (0.1 * progress);
        gsap.set(".clippy_3 img", { scale: scaleVal });
    }
});

ScrollTrigger.create({
    trigger: ".sec_3",
    start: "bottom center",
    end: "bottom 0%",
    scrub: true,
    // markers: true,
    onUpdate: (self) => {
        const progress = self.progress;
        const topY = 100 - (100 * progress);

        gsap.set(".clippy_3", {
            clipPath: `polygon(0 0, 100% 0, 100% ${topY}%, 0% ${topY}%)`,
            webkitClipPath: `polygon(0 0, 100% 0, 100% ${topY}%, 0% ${topY}%)`
        });
        
        const scaleVal = 1 - (0.1 * progress);
        gsap.set(".clippy_3 img", { scale: scaleVal });
    }
});

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec_4",
      start: "top top",
      end: "+=1500",
      scrub: true,
      pin: true,
      // markers: true,
    }
  });

  tl.to(".sec_4_img_2", { top: 0 })
    .to(".sec_4_img_3", { top: 0 });
});


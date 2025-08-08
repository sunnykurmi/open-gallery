gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
});

lenis.on("scroll", ScrollTrigger.update);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Now your gsap.to / fromTo animations...


gsap.set(".about_img_1", { zIndex: 2 })

gsap.to(".about_img_2 img",{
    scrollTrigger:{
        trigger:".about_txt_box_2",
        start:"top bottom",
        scrub:true,
        end:"top top",
        // markers:true
    },
    scale:.9
})
gsap.to(".about_img_3 img",{
    scrollTrigger:{
        trigger:".about_txt_box_3",
        start:"top bottom",
        scrub:true,
        end:"top top",
        // markers:true
    },
    scale:.9
})
gsap.to(".about_img_2",{
    scrollTrigger:{
        trigger:".about_txt_box_1",
        start:"top top",
        scrub:true,
        end:"top top",
        // markers:true
    },
    zIndex: 3,
    duration: 0.01,
})
gsap.to(".about_img_3",{
    scrollTrigger:{
        trigger:".about_txt_box_2",
        start:"top top",
        scrub:true,
        end:"top top",
        // markers:true
    },
    zIndex: 3,
    duration: 0.01,
})
gsap.to(".about_img_4",{
    scrollTrigger:{
        trigger:".about_txt_box_3",
        start:"top top",
        scrub:true,
        end:"top top",
        // markers:true
    },
    zIndex: 3,
    duration: 0.01,
})



gsap.fromTo(".about_img_2 img",{
    scale:1.1},{
    scrollTrigger:{
        trigger:".about_txt_box_1",
        start:"bottom bottom",
        scrub:true,
        // markers:true
    },
    scale:1,
})
gsap.fromTo(".about_img_3 img",{
    scale:1.1},{
    scrollTrigger:{
        trigger:".about_txt_box_2",
        start:"bottom bottom",
        scrub:true,
        // markers:true
    },
    scale:1,
})
gsap.fromTo(".about_img_4 img",{
    scale:1.1},{
    scrollTrigger:{
        trigger:".about_txt_box_3",
        start:"bottom bottom",
        scrub:true,
        // markers:true
    },
    scale:1,
})





gsap.fromTo(".about_txt_box_1_inner",{
    y:-180
},{
    scrollTrigger:{
        trigger:".about_txt_box_1",
        start:"top bottom",
        scrub:true,
        end:"bottom top",
        // markers:true
    },
  y:100
})
gsap.fromTo(".about_txt_box_2_inner",{
    y:-150
},{
    scrollTrigger:{
        trigger:".about_txt_box_2",
        start:"top bottom",
        scrub:true,
        end:"bottom top",
        // markers:true
    },
  y:100
})
gsap.fromTo(".about_txt_box_3_inner",{
    y:-120
},{
    scrollTrigger:{
        trigger:".about_txt_box_3",
        start:"top bottom",
        scrub:true,
        end:"bottom top",
        // markers:true
    },
  y:70
})
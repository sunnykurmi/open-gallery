gsap.set(".about_img_1", { zIndex: 2 })
gsap.to(".about_img_1",{
    scrollTrigger:{
        trigger:".about_txt_box_1",
        start:"top bottom",
        scrub:true,
        end:"top top",
        // markers:true
    },
    scale:.9
})
gsap.to(".about_img_2",{
    scrollTrigger:{
        trigger:".about_txt_box_2",
        start:"top bottom",
        scrub:true,
        end:"top top",
        // markers:true
    },
    scale:.9
})
gsap.to(".about_img_3",{
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



gsap.fromTo(".about_img_2",{
    scale:1.1},{
    scrollTrigger:{
        trigger:".about_txt_box_1",
        start:"bottom bottom",
        scrub:true,
        // markers:true
    },
    scale:1,
})
gsap.fromTo(".about_img_3",{
    scale:1.1},{
    scrollTrigger:{
        trigger:".about_txt_box_2",
        start:"bottom bottom",
        scrub:true,
        // markers:true
    },
    scale:1,
})
gsap.fromTo(".about_img_4",{
    scale:1.1},{
    scrollTrigger:{
        trigger:".about_txt_box_3",
        start:"bottom bottom",
        scrub:true,
        // markers:true
    },
    scale:1,
})
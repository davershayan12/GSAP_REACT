
gsap.from("#page1 #box",{
    scale:0
})

gsap.from("#page2 #box",{
    scale:0,
    rotation:360,
    duration:2,
    scrollTrigger:"#page2 #box"
})

gsap.from("#page3 #box",{
    scale:0,
    rotation:-360,

    duration:2,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body"
    }
    
})
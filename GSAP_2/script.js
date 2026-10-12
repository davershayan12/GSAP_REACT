
gsap.from("#page1 #box",{
    scale:0
})

gsap.from("#page2 #box",{
    scale:0,
    rotation:360,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        // start:"top 60%",//when scroll trigger
        // end:"top 30%",// when scroll end
        scrub:2,// how smooth the scroll trigger will be
        markers:true//show the scroll start and end markers 
    }
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
gasp.to("#page4 h1",{
    transform:"translateX(-150%)"
})
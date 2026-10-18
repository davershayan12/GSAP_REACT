var initialPath="M 0 100 Q 720 100 1440 100"
var finalPath="M 0 100 Q 720 100 1440 100"
var string=document.querySelector("#string")
string.addEventListener("mousemove",function(dets){
    path=`M 0 100 Q ${dets.x} ${dets.y}  1440 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:.3,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave",function(){

    gsap.to("svg path",{
        attr:{d:initialPath},
        ease:"elastic.out",
        duration:1
    })
})
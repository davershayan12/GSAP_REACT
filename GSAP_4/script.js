var image=document.querySelector("#image")
var main=document.querySelector("#main")
var cursor = document.querySelector("#cursor")
main.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        y:dets.y,
        x:dets.x
    })
})
image.addEventListener("mouseenter",function(){
    cursor.innerHTML="hello"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#f0ffff6e"
    })
})
image.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})
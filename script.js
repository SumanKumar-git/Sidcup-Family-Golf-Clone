var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var h4All = document.querySelectorAll("#nav h4");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px";
    crsr.style.top = dets.y +"px";
})
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x - 200 +"px";
    blur.style.top = dets.y - 200 +"px";
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2,
    }
})

h4All.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border= "1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
})

h4All.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border= "none";
        crsr.style.backgroundColor="#95c11e";
    })
})

gsap.from("#about-us img , #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})

// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

gsap.from("#colon1",{
    x:-60,
    y:-60,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 50%",
        scrub:3,

    }
})

gsap.from("#colon2",{
    x:50,
    y:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 90%",
        scrub:2,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})
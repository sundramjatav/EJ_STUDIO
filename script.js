
function sundram(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("..main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "..main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("..main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("..main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
};


gsap.from(".page1 h1",{
   y:50,
   stagger:true,
})

gsap.to(".page2 .img",{
  width: "100%",
  scrollTrigger: {
      trigger: ".page2",
      scroll: ".main",
      start:"top 10%",
      end: "top -40%",
      scrub: true,
      pin: true
      
  }
})

gsap.from(".page3 h1",{
      y:50,
      rotate:5,
      opacity:0,
      stagger:2,
  scrollTrigger: {
      trigger: ".page3 h1",
      scroll: ".main",
      start:"top 50%",
      end: "top -20%",
      scrub: true,
  }
})

gsap.from(".page4 #box1 img",{
    height:"200%",
scrollTrigger: {
  trigger: ".page4 #box1 img",
  scroll: ".main",

  start:"top 40%",
  end: "top 20%",
  scrub: true,
  // pin: true
  
}
})
gsap.from(".page4 #box2 img",{
  height:"200%",
scrollTrigger: {
trigger: ".page4 #box2 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.from(".page4 #box3 img",{
  height:"200%",
scrollTrigger: {
trigger: ".page4 #box3 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.from(".page4 #box4 img",{
  height:"200%",
scrollTrigger: {
trigger: ".page4 #box4 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.from(".page4 #box5 img",{
  height:"200%",
scrollTrigger: {
trigger: ".page4 #box5 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.from(".page4 #box6 img",{
  height:"200%",
scrollTrigger: {
trigger: ".page4 #box6 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.to(".page5",{
  backgroundColor: "#000",
scrollTrigger: {
trigger: ".page5",
scroll: ".main",
// markers:true,
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.from(".page5 h2",{
  y:50,
  rotate:5,
  opacity:0,
  stagger:2,
scrollTrigger: {
  trigger: ".page5 h2",
  scroll: ".main",
  // markers:true,
  start:"top 50%",
  end: "top 30%",
  scrub: true,
}
})

gsap.from(".page5 #b1 img",{
  height:"200%",
scrollTrigger: {
trigger: ".page5 #b1 img",
scroll: ".main",

start:"top 40%",
end: "top 20%",
scrub: true,
// pin: true

}
})
gsap.from(".page5 #b2 img",{
height:"200%",
scrollTrigger: {
trigger: ".page5 #b2 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.from(".page5 #b3 img",{
height:"200%",
scrollTrigger: {
trigger: ".page5 #b3 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.from(".page5 #b4 img",{
height:"200%",
scrollTrigger: {
trigger: ".page5 #b4 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.from(".page5 #b5 img",{
height:"200%",
scrollTrigger: {
trigger: ".page5 #b5 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.from(".page5 #b6 img",{
height:"200%",
scrollTrigger: {
trigger: ".page5 #b6 img",
scroll: ".main",
start:"top 40%",
end: "top 20%",
scrub: true,
}
})

gsap.to(".page7",{
  backgroundColor: "white ",
scrollTrigger: {
trigger: ".page7",
scroll: ".main",
// markers:true,
start:"top 20%",
end: "top 2%",
scrub: true,
}
})

// gsap.from(".page7 h1",{
//   y:50,
//   // opacity:0,
//   stagger:2,
//   scrollTrigger:{
//     trigger:".page7",
//     scroller:".main",
//     markers:true,
//     start:"top 20%",
//     end:"top 10%",
//     scrub:2
//   }
// })

 var cursor = document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){

  var x = cursor.offsetWidth;
  var y = cursor.offsetHeight;
  cursor.style.left = `${dets.pageX - x +50}px`
  cursor.style.top = `${dets.pageY - y +50}px`
 })

 
var dibba = document.querySelectorAll(".dibba")
dibba.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    document.querySelector(".cursor").style.scale =2
    document.querySelector(".cursor").innerHTML = "more"
  })
  e.addEventListener("mouseleave",function(){
    document.querySelector(".cursor").style.scale =1
    document.querySelector(".cursor").innerHTML =""
  })

  setTimeout(function(){
    document.querySelector(".cursor").style.scale =1
    document.querySelector(".cursor").innerHTML =""
    
},2000)
})

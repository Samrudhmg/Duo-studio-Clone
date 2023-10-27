
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    gsap.registerPlugin(ScrollTrigger);
    
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });  
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
    
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
    new ResizeObserver(() => scroll.update()).observe(document.querySelector("#main"));
    

    







    var cursor=document.querySelector("#cursor");
    var main=document.querySelector("#main")
    document.addEventListener("mousemove",function(dets){
    cursor.style.opacity="1"
    cursor.style.left=dets.x+ 20 +"px"
    cursor.style.top=dets.y+ 20 +"px"
})




var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        markers:true,
        start:"top 34%",
        end:"top 0",
        scrub:3
    }
})

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 ",
        scroller:"#main",
        markers:true,
        start:"top -20%",
        end:"top -100%",
        scrub:3
    }
})

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        markers:true,
        start:"top -180%",
        end:"top -200%",
        scrub:3
    }
})

var tl4=gsap.timeline({
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        markers:true,
        start:"top 70%",
        end:"top 240%"
       
    }
})

var tl5=gsap.timeline({
    scrollTrigger:{
        trigger:"#page3 ",
        scroller:"#main",
        markers:true,
        start:"top 140%",
        end:"top 280%"
       
    }
})

var tl6=gsap.timeline({
    scrollTrigger:{
        trigger:"#page4 ",
        scroller:"#main",
        markers:true,
        start:"top 230%",
        end:"top 320%"
       
    }
})

var tl7=gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        markers:true,
        start:"top 280%",
        end:"top 350%"
       
    }
})
var tl8=gsap.timeline({
    scrollTrigger:{
        trigger:"footer",
        scroller:"#main",
        markers:true,
        start:"top 330%",
        end:"top 400%"
       
    }
})




tl.to("#page1 h1",{
    x:-80,
    duration:2
 },"same")

tl.to("#page1 h2",{
    x:80,
    duration:2
   
   
},"same")

tl.to("#page1 video",{
    width:"90%"
    
},"same")

tl2.to("#main",{
    backgroundColor:"white"
})

tl3.to("#main",{
    backgroundColor:"black"
})

tl4.from("#page2 h1",{
    y:-200,
    opacity:0,
    duration:1
})

tl4.from("#page2left h2",{
    y:100,
    opacity:0,
    duration:0.5
})

tl4.from("#page2right ,#page2button",{
    y:100,
    opacity:0,
    duration:0.5
    
})

tl5.from("#page3 h1",{
    y:500,
    opacity:0,
    duration:0.5,
    delay:0.2
})

tl5.from("#page3-p1",{
    opacity:0,
    stagger:0.2
})
tl5.from("#page3-p2",{
    opacity:0,
    stagger:0.5
})

tl6.from("#page4 #elem",{
    y:-500,
    opacity:0,
    stagger:0.3,
    duration:0.5
})
tl7.from("#page5 h2",{
  x:-300,
  opacity:0,
  stagger:0.2,
  
})
tl7.from("#page5 #box",{
    y:300,
    opacity:0,
    stagger:0.2,
    duration:1
  })

tl8.from("footer #footerpart1 h1,button",{
    x:-300,
    opacity:0,
    stagger:0.5
    

})  
tl8.from("#footerpart2,#footerpart3,#footerpart4",{
    y:300,
    opacity:0,
    stagger:0.5,
    duration:1,
    delay:0.5
})  




function nav(){
    gsap.from("#nav img,#comp,#option",{
        opacity:0,
        y:-100,
        stagger:0.3,
        delay:0.2,
        duration:0.9
    })
    
}nav()

function maintext(){
    gsap.from("#page1 h1",{
        x:-200,
        opacity:0,
        duration:1.2
    
    })
    gsap.from("#page1 h2",{
        x:200,
        opacity:0,
        duration:1.2
    
    })
}maintext()

var boxes=document.querySelectorAll("#box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att=elem.getAttribute("data-image")
        cursor.style.width="200px"
        cursor.style.height="200px"
        cursor.style.borderRadius="0"
        cursor.style.backgroundImage=`url(${att})`
        
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor=""
        cursor.style.width="20px"
        cursor.style.height="20px"
        cursor.style.borderRadius="10px"
        cursor.style.backgroundImage=`none`

        

    })
})


// var anc=document.querySelectorAll("#nav a")
// var purple=document.querySelector("#purple")
// anc.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         purple.style.display="block"
//         purple.style.opacity="1"
//     })
//     elem.addEventListener("mouseleave",function(){
//         purple.style.display="block"
//         purple.style.opacity="0"
//     })
// })

// function page2(){
//     gsap.from("#page2 h1",{
//         opacity:0,
//         Y:400,
//         duration:1,
//         scrollTrigger:{
//             trigger:"#page2",
//             scroller:"body",
//             start:"top 70%",
//             markers:true,
            
//         }
//     })
//     gsap.from("#page2-container #page2left h2",{
//         opacity:0,
//         Y:400,
//         duration:1,
//         scrollTrigger:{
//             trigger:"#page2-container",
//             scroller:"body",
//             start:"top 70%",
//             markers:true,
//         }
//     })
//     gsap.from("#page2-container #page2right ",{
//         opacity:0,
//         Y:500,
//         duration:1,
//         stagger:0.3,
//         scrollTrigger:{
//             trigger:"#page2-container",
//             scroller:"body",
//             start:"top 70%",
//             markers:true,
//         }
//     })
// }page2()

// gsap.from("footer #footerpart1",{
//     y:300,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"footer",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

gsap.to("#footerpart4 a",{
    x:20,
    repeat:-1,
    yoyo:true
})
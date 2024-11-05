const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



var tl=gsap.timeline()


tl.from("nav",{
    y:-20,
    duration:1,
    opacity:0
})
tl.from(".lc-right h1",{
    opacity:0,
    x:20,
    // delay:1,
    duration:1
})
gsap.to(".lc-lower", {
    scrollTrigger: {
        trigger: ".lc-lower",
        start: "top 60%", 
        end: "top -10%", 
        // markers:true,
        scrub: 4,    
    },
    scale: 1.4, 
    overflow:"hidden",
    transformOrigin: "center center",
});

tl.from(".page1 .page1-content h1",{
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:".page1 .page1-content h1",
        scrub:2,
        // markers:true,
        start:"top 90%",
        end:"top 30%",
    }
})
tl.to(".page3 .pg3-lower video",{
    scale:3,
    // marginTop:"0vw",
    scrollTrigger:{
        scroller:"body",
        trigger:".page3 .pg3-lower video",
        // markers:true,
        start:"top 50%",
        end:"bottom -50%",
        scrub:2,
        // pin:true
    }
})
gsap.from(".page3 .pg3-lower h1",{
    y:200,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        scroller:"body",
        trigger:".page3 .pg3-lower h1",
        // markers:true,
        start:"top 100%",
        end:"top -20%",
        scrub:2
    }
})

var tlPG4=gsap.timeline()

tlPG4.from(".page4 .pg4-upper p",{
    x:80,
    opacity:0,
    // duration:8,
    scrollTrigger:{
        scroller:"body",
        trigger:".page4 .pg4-upper p",
        // markers:true,
        start:"top 50%",
        end:"top -10%",
        scrub:2
    }
})


var pg6TL=gsap.timeline()

var pg6cont=document.querySelector(".page6-content")
var pg6upper=document.querySelector(".pg6-upper")

pg6TL.from(".pg6-upper",{
    y:-40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg6-upper",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub:2
    }
})
pg6TL.from(".pg6-l-left",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg6-l-right",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub:2
    }
})

pg6TL.from(".pg6-l-right",{
    x:100,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg6-l-right",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub:2
    }
})


var pg8TL = gsap.timeline()

pg8TL.from(".pg8-lower h1",{
    y:100,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg8-lower h1",
        scrub:2,
        // markers:true,
        start:"top 90%"
    }
})

pg8TL.from(".pg8-lower .imgDiv",{
    x:20,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg8-lower img",
        scrub:2,
        // markers:true,
        start:"top 50%"
    }
})

pg11TL=gsap.timeline()
pg11TL.from(".pg11-cont-left",{
    x:-80,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg11-cont-left",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:true
    }
})
pg11TL.from(".pg11-cont-right",{
    x:80,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg11-cont-left",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:true
    }
})

pg12TL=gsap.timeline()
pg12TL.from(".pg12-upper",{
    y:-20,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg12-upper",
        // markers:true,
        scrub:true,
        start:"top 70%",
        end:"top 40%"

    }
})
pg12TL.from(".pg12-middle h1",{
    y:50,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg12-middle h1",
        scrub:true
    }
})

pg12TL.from(".pg12-middle .pg12-img",{
    y:50,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg12-middle img",
        scrub:true
    }
})

pg12TL.from(".pg12-lower-left",{
    x:-50,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg12-lower-left",
        scrub:true,
        // markers:true,
        end:"top 20%",
        start:"top 70%"
    }
})


pg12TL.from(".pg12-lower-right",{
    x:50,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg12-lower-right",
        scrub:true,
        // markers:true,
        end:"top 20%",
        start:"top 70%"
    }
})

pg13TL=gsap.timeline()
pg13TL.from(".pg13-upper h1",{
    y:-30,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg13-upper",
        // markers:true,
        scrub:true,
        start:"top 60%",
        end:"top 30%"
    }
})
pg13TL.from(".pg13-upper p",{
    y:-30,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".pg13-upper",
        // markers:true,
        scrub:true,
        start:"top 60%",
        end:"top 30%"
    }
})
function accordianMenu(){
    var accElem=document.querySelectorAll(".acc-elem");
    
   accElem.forEach(function(accContent){
    //    console.log(accContent);
       accContent.addEventListener("click",function(){
           accContent.classList.toggle("active")
        })
    
})

}
accordianMenu()

function Page7Image(){
    var page7 = document.querySelector(".page7 img")
    var page7Images=["https://www.datocms-assets.com/106915/1717685614-betteroffstudio_culture-large-loop_1-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685614-betteroffstudio_culture-large-loop_1-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685628-betteroffstudio_culture-large-loop_3-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685635-betteroffstudio_culture-large-loop_4-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685642-betteroffstudio_culture-large-loop_5-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685649-betteroffstudio_culture-large-loop_6-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000"]

    setInterval(function(){
    var random = Math.floor(Math.random() * page7Images.length);
    page7.src=page7Images[random]
    },2000)
}
Page7Image()

function toggleBtn(){
    var toggleBtn = document.querySelector(".toggle-btn")
    var toggleElem = document.querySelector(".toggle-elem")

   toggleBtn.addEventListener("click",function(){
      toggleBtn.classList.toggle("toggle")
    })
}
toggleBtn()

function FAQ(){
    var qnaElem = document.querySelectorAll(".qna-elem")
    
    qnaElem.forEach(function(faq){
        faq.addEventListener("click",function(){
            faq.classList.toggle("qna-active")
        })
    })

}
FAQ()

function footerSubs(){
    var p13SubsImg = document.querySelectorAll(".page13 .p13-text-container img")
    // console.log(p13SubsImg);
    var page13Images=["https://www.datocms-assets.com/106915/1717685614-betteroffstudio_culture-large-loop_1-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685614-betteroffstudio_culture-large-loop_1-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685628-betteroffstudio_culture-large-loop_3-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685635-betteroffstudio_culture-large-loop_4-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685642-betteroffstudio_culture-large-loop_5-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000","https://www.datocms-assets.com/106915/1717685649-betteroffstudio_culture-large-loop_6-min.jpg?auto=format%2Ccompress&fit=max&h=1500&w=2000"]



    p13SubsImg.forEach(function(abc){
        
        setInterval(() => {

            var random = Math.floor(Math.random() * page13Images.length);
            abc.src= page13Images[random]
            
        }, 1000);
        
    })
}
footerSubs()

var tl = gsap.timeline()
tl.from(".nav img,.nav h3 ,.nav button",{
    y:-100,
    opacity:0,
    duration: .3,
    delay:.2,
    stagger:.1
})

tl.from("h1",{
    y:100,
    duration:.4,
    stagger: .1,
    opacity:0
})

tl.from(".img",{
    scale:0,
    opacity:0,
    duration:.5,
    stagger: .3  
})
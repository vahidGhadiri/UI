// select elements
const selectEl = function(element){
    return document.querySelector(element)
}

const menuToggle = selectEl(".menu-toggle")
const body = selectEl("body")

menuToggle.addEventListener("click", function(){
    body.classList.toggle("open")
})

// Scroll reveal
window.sr = ScrollReveal()

sr.reveal(".animate-left", {
    origin: "left",
    duration: 1000,
    distance:"25rem",
    delay: 300,
})

sr.reveal(".animate-right",{
    origin : "right",
    duration:1000,
    distance: "25rem",
    delay: 600
})

sr.reveal(".animate-top", {
    origin:"top",
    duration: 1000,
    distance: "25rem",
    delay:600,
})


sr.reveal(".animate-bottom", {
    origin:"bottom",
    duration: 1000,
    distance: "25rem",
    delay:600,
})
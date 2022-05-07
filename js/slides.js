const slides = document.querySelector(".slides-container");
const buttonOne = slides.querySelector(".button-control-one");
const buttonTwo = slides.querySelector(".button-control-two");
const buttonThree = slides.querySelector(".button-control-three");
const slideOne = slides.querySelector(".slide-item-one");
const slideTwo = slides.querySelector(".slide-item-two");
const slideThree = slides.querySelector(".slide-item-three");

buttonOne.addEventListener("click", function(evt){
    if(!buttonOne.classList.contains("slide-button-active")){
        evt.preventDefault()
        buttonOne.classList.add("slide-button-active");
        slideOne.classList.add("slide-active");

        slideTwo.classList.remove("slide-active");
        slideThree.classList.remove("slide-active");

        buttonTwo.classList.remove("slide-button-active");
        buttonThree.classList.remove("slide-button-active");
    }
})

buttonTwo.addEventListener("click", function(evt){
    if(!buttonTwo.classList.contains("slide-button-active")){
        evt.preventDefault()
        buttonTwo.classList.add("slide-button-active");
        slideTwo.classList.add("slide-active");

        slideOne.classList.remove("slide-active");
        slideThree.classList.remove("slide-active");

        buttonOne.classList.remove("slide-button-active");
        buttonThree.classList.remove("slide-button-active");
    }
})

buttonThree.addEventListener("click", function(evt){
    if(!buttonThree.classList.contains("slide-button-active")){
        evt.preventDefault()
        buttonThree.classList.add("slide-button-active");
        slideThree.classList.add("slide-active");

        slideOne.classList.remove("slide-active");
        slideTwo.classList.remove("slide-active");

        buttonOne.classList.remove("slide-button-active");
        buttonTwo.classList.remove("slide-button-active");
    }
})
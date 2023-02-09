const ratingContainer = document.querySelector(".rating-container");
const ratingBtn = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit")
const cardOne = document.querySelector(".card");
const cardTwo = document.querySelector(".cardTwo");
const ratingSpan = document.querySelector(".selected-rating")
const appreciationOne = document.querySelector(".appreciation")
const appreciationTwo = document.querySelector(".appreciation-2")
const appreciationThree = document.querySelector(".appreciation-3")
let rating;
submitBtn.setAttribute("disabled", "disabled");
ratingBtn.forEach((button)=>{
   button.addEventListener("click", (e)=>{
        e.preventDefault();
        submitBtn.removeAttribute("disabled")
        rating = e.target.getAttribute("data-rating")
        if(!e.target.classList.contains("selected")){
            ratingBtn.forEach((button)=>{
                button.classList.remove("selected");
            })
            e.target.classList.add("selected");
        }
        else{
            button.classList.remove("selected");
            submitBtn.setAttribute("disabled", "disabled");
        }
    })
})

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("click");
    cardOne.classList.add("hide");
    cardTwo.classList.remove("hide");
    ratingSpan.textContent = rating;
    // appreciationOne.classList.add("hide");
    // appreciationTwo.classList.add("hide");
    // appreciationThree.classList.remove("hide");
})
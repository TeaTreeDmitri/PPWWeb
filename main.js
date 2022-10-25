"use strict"


//CDN
import {
    animate,
    scroll,
    stagger,
    inView
} from "https://cdn.skypack.dev/motion";

//global vars
const projectDesc = document.querySelector("#projectText");
const projectVideo = document.querySelector("#projectVideo");
const projectView = document.querySelector("#projectDesc");

//text contents
const gernerText = "We went to Bornholm for this assignment, working with a high-end ceramic and glass studio. Here we were tasked with creating a prototype website featuring a shop, marketing strategy, content for said strategy and a 100 page report detailing our research and how it relates to our design and content choices."
const MMDText = "This was a short project, where I attempted to contact people working in the UX and digital design industry, such as a Senior Creative Director at Valtech, and a Design Consultant at Is It A Bird. Asking them various questions through an online interview format, and recording their valuable wisdom to help guide myself and my student colleagues in the future."
const dystText = "Any Bo Burnham fans out there?! (check out the music)... This was a great first project to stick my new coding teeth into. We spent a week designing and testing the game, then creating the assets from scratch we built it from the ground up in vanilla JS, CSS and HTML. Of course I had to get carried away and create the soundtrack too!"

//video contents
const dystVideo = "assets/video/DystopiaDemo.mp4";
const MMDVideo = "assets/video/MMDDemo.mp4";
const gernerVideo = "assets/video/GernerDemo.mp4";
let projectCards = document.querySelectorAll(".projectCard");

//animation vars





//functions

document.addEventListener("DOMContentLoaded", init());


function init() {
    console.log("init")
    mobileFunctionality();
}

function mobileFunctionality() {
    console.log("mobilefunction");

    if (window.innerWidth > 649) {
        console.log("greater than 649")
        projectCards.forEach(button => button.addEventListener("mouseover", openProjectWindow));
        projectCards.forEach(button => button.addEventListener("mouseout", closeProjectWindow));
    } else {
        console.log("less than 649")
       projectCards.forEach(button => button.addEventListener("touchstart", openMobileWindow, {passive: true}));
    }
}

function openMobileWindow(event) {
    console.log("I'M TOUCHED");
    const cardId = event.target.id;
    const project = event.target.parentNode;

    const projectImgThumb = project.querySelector(".projectImgThumb");
    const projectTag = project.querySelector(".projectTag");
    projectImgThumb.classList.add("slowHide");
    projectTag.classList.remove("focusTextBack")
    projectTag.classList.add("focusText");

}

function openProjectWindow(event) {
    const cardId = event.target.id;
    const project = event.target.parentNode;

    const projectImgThumb = project.querySelector(".projectImgThumb");
    const projectTag = project.querySelector(".projectTag");

    projectImgThumb.classList.add("slowHide");

    if (cardId === "img1t") {
        projectVideo.src = gernerVideo;
        projectDesc.textContent = gernerText;
    } else if (cardId === "img2t") {
        projectVideo.src = MMDVideo;
        projectDesc.textContent = MMDText;
    } else if (cardId === "img3t") {
        projectVideo.src = dystVideo;
        projectDesc.textContent = dystText;
    }

    projectView.classList.remove("hidden");
    projectView.classList.add("grid");
    projectView.classList.add("slowShow");
    projectTag.classList.remove("focusTextBack")
    projectTag.classList.add("focusText");

}

function closeProjectWindow(event) {
    console.log("closeProjectWindow")
    const project = event.target.parentNode;

    // const projectImgThumb = project.querySelector(".projectImgThumb");
    const projectTag = project.querySelector(".projectTag");

    projectView.classList.remove("slowShow");
    projectView.classList.remove("grid");
    projectView.classList.add("hidden");


    projectTag.classList.add("focusTextBack");
    projectTag.classList.remove("focusText");

}

darkMode() {

}
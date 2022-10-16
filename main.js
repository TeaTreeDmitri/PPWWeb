"use strict"


//CDN
import {
    animate,
    scroll,
    stagger,
    inView
} from "https://cdn.skypack.dev/motion";

//global vars
let projectWindows = document.querySelectorAll(".projectWindow");
let projectNames = document.querySelectorAll(".projectName");
let projectList = document.querySelector("#projectList");

//functions

document.addEventListener("DOMContentLoaded", init());


function init() {
    projectNames.forEach(button => button.addEventListener("mouseover", openProjectWindow));
}

function openProjectWindow(event) {
    const projectView = event.target.parentNode;
    const window = projectView.querySelector(".projectWindow");

    window.classList.add("reveal");
    window.classList.remove("hidden");

    projectView.addEventListener("click", closeProjectWindow);
}

function closeProjectWindow(project) {
    const window = project.target.querySelector(".projectWindow")
    window.classList.remove("reveal");
    window.classList.add("hidden");

}

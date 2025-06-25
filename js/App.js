const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

function closeNav() {
    nav.classList.remove("right-0");
    nav.classList.add("-right-96");
    overlay.classList.remove("overlay--visible");
}
navOpenBtn.addEventListener("click",() => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", closeNav)
})
navCloseBtn.addEventListener("click", closeNav);
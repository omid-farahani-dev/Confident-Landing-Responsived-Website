const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

navOpenBtn.addEventListener("click",() => {
    nav.classList.remove("-right-[1000px]");
    nav.classList.add("right-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", closeNav)
})
function closeNav() {
    nav.classList.remove("right-0");
    nav.classList.add("-right-[1000px]");
    overlay.classList.remove("overlay--visible");
}
navCloseBtn.addEventListener("click", closeNav);
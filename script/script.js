const navBtn = document.querySelector("#nav-button");
const nav = document.querySelector("#nav");
const navBtnImg = document.querySelector("#nav-btn-img");



button.addEventListener("click", function() {
    if(nav.classList.toggle("open")) {
        navBtnImg.src = "./img/icons/close.svg";
    } else {
        navBtnImg.src = "./img/icons/open.svg";
    }
})
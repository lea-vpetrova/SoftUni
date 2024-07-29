import { showRegisterView } from "./register.js";
import { showHomeView } from "./home.js"; 
document.querySelectorAll("section").forEach(section => section.style.display = 'none');
const userNav = document.querySelectorAll("li.user");
const guestNav = document.querySelectorAll("li.guest");
document.querySelector("nav").addEventListener("click", onNavigate);


const userData = JSON.parse(sessionStorage.getItem("userData"));

const routes = {
    "/register": showRegisterView,
    "/home": showHomeView
}

function onNavigate(e) {
    if (e.target.tagName !== "A || !e.target.href") {
        return;
    }
    e.preventDefault();
    const url = new URL(e.terget.href);
    const path = url.pathname;
    routes[path]();
}

function updateNav(){
    if (userData) {
        userNav.forEach(li => {
            li.style.display = "block"
        });
        guestNav.forEach((li) => {
            li.style.display = "none";
        });
    }
    else{
        userNav.forEach((li) => {
            li.style.display = "none";
        });
        guestNav.forEach((li) => {
            li.style.display = "block";
        });
    }
}

updateNav();

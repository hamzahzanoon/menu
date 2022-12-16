const menu =document.querySelector(".menu");
const toggle = document.querySelector(".toggle"); 


toggle.onclick = function() {
    menu.classList.toggle("active");
}
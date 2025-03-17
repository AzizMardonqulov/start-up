let medioBars = document.getElementById("medioBars");
let medioNavbar = document.getElementById("medioNavbar");
let navbarMedioCLose = document.getElementById("navbarMedioCLose")
medioBars.addEventListener('click' , function(){
    medioNavbar.style.top="0";
})
navbarMedioCLose.addEventListener("click" , function(){
medioNavbar.style.top = "-100%";
})
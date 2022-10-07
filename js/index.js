window.addEventListener("scroll",scrollhandler);
function scrollhandler(){
    let h1 = document.querySelector("section .content h1");
    h1.style.color = "red";
    let navbar = document.querySelector("nav");
    if(window.scrollY == 0){
        navbar.className = "";
    }else{
        navbar.className = "sticky";
    }
};
function handler(){
    var rec = document.querySelector(".profileimg .rectangle");
    rec.className += " mouseover";
};
function outhandler(){
    var rec = document.querySelector(".profileimg .rectangle");
    rec.className = "rectangle";
};
// -------------------- Nav Menu ---------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// -------------------- Mail ---------------------
const prenom = 'benjamin';
const nom = 'petel';
const client = '@outlook.com';
const mail = document.querySelectorAll(".button_mail");

for(let i=0;i<mail.length; i++){
    mail[i].addEventListener("click", MailMe);
}

function MailMe(){
    location.href = 'mailto:'+prenom+'.'+nom+client;
}
// -------------------- Nav Menu ---------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLinks.forEach((navLink) => {
    navLink.addEventListener("click", mobileMenu);
});

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
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
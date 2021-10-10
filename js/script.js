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

// ---------------------- Mail -----------------------
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

// --------------------- Skills ----------------------
const selection = document.querySelector("#selection");
const skillsButtons = selection.querySelectorAll(".btn");
const skillsSection = document.querySelector("#skills");
const skillsArticles = skillsSection.querySelectorAll("article");

skillsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const skill = button.id.split("_")[0];
        displayCompetence(skill);
    });
});


function displayCompetence(competence){

    skillsButtons.forEach((button) => {
        const skill = button.id.split("_")[0];
        if (skill === competence) button.classList.add("btnSelected");
        else button.classList.remove("btnSelected");
    });

    skillsArticles.forEach((article) => {
        const skill = article.id.split("_")[0];
        if (skill === competence){
            article.style.display = "block";
        }
        else article.style.display = "none";
    });
}

// --------------------- Values ----------------------
const values = document.querySelector("#values");
const valuesBtn = values.querySelectorAll("li");
const valuesArticles = values.querySelectorAll("article");

valuesBtn.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.id.split("_")[0];
        displayValue(value);
    });
});

function displayValue(value){
    valuesArticles.forEach((article) => {
        const articleValue = article.id.split("_")[0];
        if (value === articleValue) article.style.display = "block";
    });
}

// close the modal if click outside the modal
window.onclick = ((event) => {
    valuesArticles.forEach((article) => {
        if(event.target === article){
            article.style.display = "none";
        }

    });
});

// -------------------- NAV MENU ---------------------
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

// ---------------------- MAIL -----------------------
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

// --------------------- SKILLS ----------------------
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

// -------------------- PROJECTS ---------------------
const items = document.querySelectorAll(".carousel article");
setInitialClasses();
let slide = 0;

// Set event listeners
document.querySelector("#carousel_button_next").addEventListener('click', ()=> {
    move('next');
});
document.querySelector("#carousel_button_prev").addEventListener('click', ()=>{
    move('prev')
});

function setInitialClasses(){
    items[items.length - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next")
}

function move(direction){
    if (direction==='next') slide++;
    else slide--;

    if (slide<0) slide=items.length -1;
    if (slide>=items.length) slide=0;

    moveCarouselTo()
}

function moveCarouselTo(){
    // remove class active/next/previous from all elements
    items.forEach(item =>{
        item.classList.remove("active");
        item.classList.remove("prev");
        item.classList.remove("next");
    });

    // add class prev to the previous element
    if(slide===0) items[items.length -1].classList.add("prev");
    else items[slide-1].classList.add("prev");

    // add the class active to the active element
    items[slide].classList.add("active");

    // add class next to the next element
    if(slide===items.length -1) items[0].classList.add("next");
    else items[slide+1].classList.add("next");

}

// --------------------- VALUES ----------------------

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



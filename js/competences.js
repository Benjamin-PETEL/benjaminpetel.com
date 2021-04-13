const buttonTransverse = document.getElementById("button_transverse");
const buttonJava = document.getElementById("button_java");
const buttonBack = document.getElementById("button_back");
const buttonFront = document.getElementById("button_front");

buttonTransverse.addEventListener("click", function(){displayCompetence("transverse")});
buttonJava.addEventListener("click", function(){displayCompetence("java")});
buttonBack.addEventListener("click",function(){displayCompetence("backend")});
buttonFront.addEventListener("click",function(){displayCompetence("frontend")});


function displayCompetence(competence){
    document.getElementById("transverse").style.display = "none";
    document.getElementById("backend").style.display = "none";
    document.getElementById("java").style.display = "none";    
    document.getElementById("frontend").style.display = "none";

    document.getElementById("button_transverse").classList.remove("btnSelected");
    document.getElementById("button_java").classList.remove("btnSelected");
    document.getElementById("button_back").classList.remove("btnSelected");
    document.getElementById("button_front").classList.remove("btnSelected");

    document.getElementById("button_transverse").classList.add("btn");
    document.getElementById("button_java").classList.add("btn");
    document.getElementById("button_back").classList.add("btn");
    document.getElementById("button_front").classList.add("btn");
    if (competence=="transverse"){
        document.getElementById("transverse").style.display = "block";
        document.getElementById("button_transverse").classList.remove("btn");
        document.getElementById("button_transverse").classList.add("btnSelected");
    }
    if (competence=="java"){
        document.getElementById("java").style.display = "block";

        document.getElementById("button_java").classList.remove("btn");
        document.getElementById("button_java").classList.add("btnSelected");
    }
    if (competence=="frontend"){
        document.getElementById("frontend").style.display = "block";
        document.getElementById("button_front").classList.remove("btn");
        document.getElementById("button_front").classList.add("btnSelected");
    }
    if(competence=="backend"){
        document.getElementById("backend").style.display = "block";
        document.getElementById("button_back").classList.remove("btn");
        document.getElementById("button_back").classList.add("btnSelected");
    }
}

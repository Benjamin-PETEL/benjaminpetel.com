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
    document.getElementById("button_transverse").style.backgroundColor = "#555";
    document.getElementById("button_java").style.backgroundColor = "#555";
    document.getElementById("button_back").style.backgroundColor = "#555";
    document.getElementById("button_front").style.backgroundColor = "#555"; 
    if (competence=="transverse"){
        document.getElementById("transverse").style.display = "block";
        document.getElementById("button_transverse").style.backgroundColor = "#777";
    }
    if (competence=="java"){
        document.getElementById("java").style.display = "block";
        document.getElementById("button_java").style.backgroundColor = "#777";
    }
    if (competence=="frontend"){
        document.getElementById("frontend").style.display = "block";
        document.getElementById("button_front").style.backgroundColor = "#777";
    }
    if(competence=="backend"){
        document.getElementById("backend").style.display = "block";
        document.getElementById("button_back").style.backgroundColor = "#777";
    }
}
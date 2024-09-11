let buttonPincelPrincipal = window.document.querySelector("#buttonPincel");
let buttonPincelSecundarios = window.document.querySelector(".container-buttons-pincel");
let separador = window.document.querySelector(".separador");
let pdfaddclass = window.document.querySelector("#pdf-container");
let inputImport = window.document.querySelector(".importFile");

let containerBottom  = window.document.querySelector(".container-bottom");
let ContainerBox = window.document.querySelector(".Container-box");


inputImport.oninput = () => {
    setTimeout(function() {
        console.log(pdfaddclass.clientWidth);
        console.log(pdfaddclass.clientHeight);

        if(pdfaddclass.clientHeight <= 867){
            ContainerBox.classList.add("comFundo");
        }else{
            ContainerBox.classList.remove("comFundo");
        }

        if(pdfaddclass.clientWidth >= 800){
            pdfaddclass.classList.add("grande");
        }else if(pdfaddclass.clientWidth < 800 && pdfaddclass.clientWidth >= 600){
            pdfaddclass.classList.add("medio");
        }else if(pdfaddclass.clientWidth < 600){
            pdfaddclass.classList.add("pequeno");
        }

        containerBottom.classList.add("semFundo");
        
    }, 1000);
}


function PincelSecundarios(){
    

    if(buttonASecundarios.classList.contains("active") || buttonAPrincipal.classList.contains("active")){
        buttonAPrincipal.classList.remove("active");
        buttonASecundarios.classList.remove("active");
        separador.classList.remove("activeA");
    }

    if(buttonStarSecundarios.classList.contains("active") || buttonStarPrincipal.classList.contains("active")){
        buttonStarPrincipal.classList.remove("active");
        buttonStarSecundarios.classList.remove("active");
        separador.classList.remove("activeStar");
    }

    buttonPincelPrincipal.classList.toggle("active");
    buttonPincelSecundarios.classList.toggle("active");
    separador.classList.toggle("activePincel");

    if(!buttonASecundarios.classList.contains("active") && !buttonStarSecundarios.classList.contains("active") && !buttonPincelSecundarios.classList.contains("active")){
        pdfaddclass.classList.remove("active");
    }else{
        pdfaddclass.classList.add("active");
    }

    if(buttonPincelSecundarios.classList.contains("active")){
        pdfaddclass.classList.add("activePincel2");
    }else{
        pdfaddclass.classList.remove("activePincel2");
    }
}

buttonPincelPrincipal.addEventListener("click", PincelSecundarios);

let buttonAPrincipal = window.document.querySelector("#buttonA");
let buttonASecundarios = window.document.querySelector(".container-buttons-A");

function buttonMaoclick(){
    if(pdfaddclass.classList.contains("activePincel2")){
        pdfaddclass.classList.remove("activePincel2");
    }

    if(buttonPincelSecundarios.classList.contains("active") || buttonPincelPrincipal.classList.contains("active")){
        buttonPincelPrincipal.classList.remove("active");
        buttonPincelSecundarios.classList.remove("active");
        separador.classList.remove("activePincel");
    }

    if(buttonStarSecundarios.classList.contains("active") || buttonStarPrincipal.classList.contains("active")){
        buttonStarPrincipal.classList.remove("active");
        buttonStarSecundarios.classList.remove("active");
        separador.classList.remove("activeStar");
    }

    buttonAPrincipal.classList.toggle("active");
    buttonASecundarios.classList.toggle("active");
    separador.classList.toggle("activeA");

    if(!buttonASecundarios.classList.contains("active") && !buttonStarSecundarios.classList.contains("active") && !buttonPincelSecundarios.classList.contains("active")){
        pdfaddclass.classList.remove("active");
    }else{
        pdfaddclass.classList.add("active");
    }
}

buttonAPrincipal.addEventListener("click", buttonMaoclick);


let buttonStarPrincipal = window.document.querySelector("#buttonStar");
let buttonStarSecundarios = window.document.querySelector(".container-buttons-Star");


buttonStarPrincipal.onclick = () => {
    if(pdfaddclass.classList.contains("activePincel2")){
        pdfaddclass.classList.remove("activePincel2");
    }

    if(buttonPincelSecundarios.classList.contains("active") || buttonPincelPrincipal.classList.contains("active")){
        buttonPincelPrincipal.classList.remove("active");
        buttonPincelSecundarios.classList.remove("active");
        separador.classList.remove("activePincel");
    }

    if(buttonASecundarios.classList.contains("active") || buttonAPrincipal.classList.contains("active")){
        buttonAPrincipal.classList.remove("active");
        buttonASecundarios.classList.remove("active");
        separador.classList.remove("activeA");
    }

    buttonStarPrincipal.classList.toggle("active");
    buttonStarSecundarios.classList.toggle("active");
    separador.classList.toggle("activeStar");

    if(!buttonASecundarios.classList.contains("active") && !buttonStarSecundarios.classList.contains("active") && !buttonPincelSecundarios.classList.contains("active")){
        pdfaddclass.classList.remove("active");
    }else{
        pdfaddclass.classList.add("active");
    }
}

let buttonMão = window.document.querySelector(".container-mouse");

function buttonMãoclick(){
    buttonMão.classList.toggle("active");
}

buttonMão.addEventListener("click", buttonMãoclick);

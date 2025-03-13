function DMSBFDFM(a){
    if (a=1) {
        alert("'DMSBFDFM' Den Metod Som Bara Finns Där För Mig =)")
    } else {
        alert("b") // test
    }
}

// Funkar ej ska fixas
window.ChangeArow = function(vilkenPill){ // det här är idiotiskt att jag behövde strulla så mycket.
// Efftersom anropet låg i massa element så behövde den vara global med window... Påminelse till senare 
    switch (vilkenPill) {
        case 0:
            alert("rotate kinda work")
        break;
        case 1:
            let arrowProperty = document.querySelector("#Arrowimg1")
            arrowProperty.style.transform = "rotate(+180deg)"
        break;
        case 2:
            let arrowProperty2 = document.querySelector("#Arrowimg2")
            arrowProperty2.style.transform = "rotate(180deg)"
        break;
        case 3:
            let arrowProperty3 = document.querySelector("#Arrowimg3")
            arrowProperty3.style.transform = "rotate(180deg)"
        break;
        case 4:
            let arrowProperty4 = document.querySelector("#Arrowimg4")
            arrowProperty4.style.transform = "rotate(180deg)"
        break;
    }
}






function ändraSpråk(){ // Problem också

}

function AlertaIngenMeny(){

}

function TillVarukorgen(){

}

function ChangeArow(){

}

function LäggTillVarukorg(){

}

function MerInfoProduckt(){

}
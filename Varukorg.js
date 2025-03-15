document.addEventListener("DOMContentLoaded", function() {
    let värde = NyProduckt()
    NySumma(värde)
})


function ändraSpråk(){ // Problem också
    alert("Den här fungerar inte. Jag orkar inte och har inte tid med att implimentera det")
    }
    
function AlertaIngenMeny(){
    alert("Den här menyn fungerar inte. Jag orkar inte och har inte tid med att implimentera det")
    }

function TillButik(page) {
        window.open(page, "_self");
    }



function NyProduckt(){
    let Summa

    for (let index = 1; index < 7; index++) {
        const nyckel = index
        let OParsadJson = window.localStorage.getItem(nyckel)
        if (OParsadJson) {
            const ProducktInfo = JSON.parse(OParsadJson)
            CreateProduct(ProducktInfo)
            Summa =+ ProducktInfo.Pris
        }
    }


function CreateProduct(ProducktInfo){
    
        
        let NewProductArt = document.createElement("article")
        let NewProductImg = document.createElement("img")
        let NewDiv = document.createElement("div")
        let NewPris = document.createElement("p")
        let NewBeskrivning = document.createElement("p")
        let NewButton = document.createElement("button")
        let NewButtonImg = document.createElement("img")

        
        NewProductImg.setAttribute("src", ProducktInfo.BildSrc)
        NewProductImg.setAttribute("alt", ProducktInfo.BildAlt)
        NewPris.textContent = ProducktInfo.Pris
        NewBeskrivning.textContent = ProducktInfo.Beskrivning
        NewButtonImg.setAttribute("src", "./img/Kryss.png")
        NewButtonImg.setAttribute("alt", "Bortagnigs kryss")

        NewProductArt.classList.add("Allclass")
        NewProductImg.classList.add("Classimg")
        NewDiv.classList.add("Prducbes")
        NewButton.classList.add("productVarukorgknapp")
        NewButtonImg.classList.add("Varukorgimg")
    
        NewProductArt.appendChild(NewProductImg)
        NewProductArt.appendChild(NewDiv)
        NewDiv.appendChild(NewPris)
        NewDiv.appendChild(NewBeskrivning)
        NewButton.appendChild(NewButtonImg)
        NewProductArt.appendChild(NewButton)

    };

    return Summa;
}


function Betalning(){
    alert("Du har inte råd")
    }

function TömVarukorg(){
    let article = document.querySelectorAll("article")
    article.forEach(function(article){
        article.parentNode.removeChild(article)
    })
}


function NySumma(SamanlagdaVärde) {
    let PElement = document.querySelector("#Summa");
    PElement.textContent("Summa "+SamanlagdaVärde,":-")
}
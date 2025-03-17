let Summa = 0


document.addEventListener("DOMContentLoaded", function() {
    let värde = NyProduckt()
    NySumma(värde)
    OmTom()
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
    

    for (let index = 1; index < 7; index++) {
        const nyckel = index
        let OParsadJson = window.localStorage.getItem(nyckel)
        if (OParsadJson) {
            let ProducktInfo = JSON.parse(OParsadJson)
            console.log(ProducktInfo)
            console.log(ProducktInfo.NumPris)
            CreateProduct(ProducktInfo,nyckel)
            Summa += Number(ProducktInfo.NumPris) 
        }
    }


function CreateProduct(ProducktInfo,Sifra){

        let VarorCon = document.querySelector("#VarorCon")
        
        let NewProductArt = document.createElement("article")
        let NewProductImg = document.createElement("img")
        let NewDiv = document.createElement("div")
        let NewPris = document.createElement("p")
        let NewBeskrivning = document.createElement("p")
        let NewButton = document.createElement("button")
        let NewButtonImg = document.createElement("img")
        
        NewProductImg.setAttribute("src", ProducktInfo.BildSrc)
        NewProductImg.setAttribute("alt", ProducktInfo.BildAlt)
        NewPris.textContent = ProducktInfo.PrisText
        NewBeskrivning.textContent = ProducktInfo.Beskrivning
        NewButtonImg.setAttribute("src", "./img/Kryss.png")
        NewButtonImg.setAttribute("alt", "Bortagnigs kryss")

        NewProductArt.classList.add("Allclass")
        NewProductImg.classList.add("Classimg")
        NewDiv.classList.add("Prducbes")
        NewButton.classList.add("productVarukorgknapp")
        NewButtonImg.classList.add("Varukorgimg")


        let holder = "NewProductArt" + Sifra    //Sifra kommer från en for loop
        NewProductArt.id = holder

        NewButton.onclick = function() {
            let ToRemove = document.querySelector("#"+holder) 
            VarorCon.removeChild(ToRemove)
            localStorage.removeItem(Sifra)
            Summa -= Number(ProducktInfo.NumPris)
            NySumma(Summa)
            OmTom()
        }

        NewProductArt.appendChild(NewProductImg)
        NewProductArt.appendChild(NewDiv)
        NewDiv.appendChild(NewPris)
        NewDiv.appendChild(NewBeskrivning)
        NewButton.appendChild(NewButtonImg)
        NewProductArt.appendChild(NewButton)
        VarorCon.appendChild(NewProductArt)

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
    let pchek = document.querySelector(".Ptom")
    if (!pchek) {
    let VarorCon = document.querySelector("#VarorCon")
    let NewPTom = document.createElement("p")
    NewPTom.textContent = "Tom"
    NewPTom.classList.add("Ptom")
    VarorCon.appendChild(NewPTom)
    localStorage.clear()
    }
    NySumma(0)
}


function NySumma(SamanlagdaVärde) {
    let PElement = document.querySelector("#Summa");
    PElement.textContent = "Totalt "+SamanlagdaVärde,":-"
}

function OmTom(){
    let Ptom = document.querySelector(".PTom")
    let VarorCon = document.querySelector("#VarorCon")
    let articles = document.querySelectorAll("article")
    if (articles.length > 0) {
        VarorCon.parentNode.removeChild(Ptom)
    } else {
        let NewPTom = document.createElement("p")
        NewPTom.textContent = "Tom"
        NewPTom.classList.add("Ptom")
        VarorCon.appendChild(NewPTom)
    }
}
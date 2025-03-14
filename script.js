function ändraSpråk(){ // Problem också
alert("Den här fungerar inte. Jag orkar inte och har inte tid med att implimentera det")
}

function AlertaIngenMeny(){
alert("Den här menyn fungerar inte. Jag orkar inte och har inte tid med att implimentera det")
}



function TillVarukorgen(){

}

function LäggTillVarukorg(){

}








function MerInfoProduckt(ImgID){

let strimg = "#imgProduckt"+ImgID
        let taking_src_elementet = document.querySelector(strimg)
        let taking_alt_elementet = document.querySelector(strimg)

        const newScr = taking_src_elementet.getAttribute("src");
        const newAlt = taking_alt_elementet.getAttribute("alt");

        let Recivning_img_element = document.querySelector("#Stor_img")
        Recivning_img_element.setAttribute("src", newScr);
        Recivning_img_element.setAttribute("alt", newAlt);

let strPris = "#productPris"+ImgID
    let ProductPris = document.querySelector(strPris)
    let Recivning_pris_element = document.querySelector("#Stor_productPris")
    Recivning_pris_element.textContent = ProductPris.textContent

let strPbes = "#productBeskrivning"+ImgID
    let ProductBes = document.querySelector(strPbes)
    let Recivning_Bes_element = document.querySelector("#Stor_productBeskrivning")
    Recivning_Bes_element.textContent = ProductBes.textContent 
}


function DMSBFDFM(a){
    if (a===1) {
        alert("'DMSBFDFM' Den Metod Som Bara Finns Där För Mig =)")
    } else {
        alert("b") // test
    }
}
const translateBtn = document.querySelector(".btn-translate");
const input = document.querySelector(".txtarea");
const outputDiv = document.querySelector(".output");

translateBtn.addEventListener("click", clickHandler);

let urlAPI = "https://api.funtranslations.com/translate/minion.json";

let translatedtxt;

function clickHandler(){
    let urlFetch = urlAPI + "?text=" + encodeURIComponent(input.value);
    
    fetch(urlFetch)
    .then(response => response.json())
    .then(json => {
        translatedtxt = json.contents.translated
        outputDiv.innerText = translatedtxt})
    .catch(errorHandler);
}

function errorHandler(error){
    if (translatedtxt == undefined)
    {
        outputDiv.innerText = "Hourly limit(5 per hour) reached. Please try after an hour. Thanks";
        console.log(error);
    }
    else
    {
        outputDiv.innerText = 'Error occured: ' + error.message;
        console.log(error);
    }

}
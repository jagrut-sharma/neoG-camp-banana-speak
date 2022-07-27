const translateBtn = document.querySelector(".btn-translate");
const input = document.querySelector(".txtarea");
const outputDiv = document.querySelector(".output");

translateBtn.addEventListener("click", clickHandler);

let urlAPI = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function clickHandler(){
    let urlFetch = urlAPI + "?text=" + encodeURIComponent(input.value);
    console.log(urlFetch);
}
let translateBtn = document.querySelector(".btn-translate");
let input = document.querySelector(".input-txtarea");
let outputDiv = document.querySelector(".output");

translateBtn.addEventListener("click", clickHandler);

function clickHandler(){
    outputDiv.innerText = input.value + " auhdsidhijashdi";
}
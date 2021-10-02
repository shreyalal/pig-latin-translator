var btn = document.querySelector("#btn-input");
var txt = document.querySelector("#input-txt");
var output = document.querySelector("#output-txt");


var serverUrl = "https://api.funtranslations.com/translate/pig-latin.json";

function errorHandler(error){
    console.log("error is " + error);
    alert("something went wrong with the server");
}

function generateURL(text) {
    return serverUrl + "?" + "text=" + text;
}
btn.addEventListener("click", function() {
    var inputtext = txt.value;
    fetch(generateURL(inputtext)).then(response => response.json()).then(data => {
        output.innerText = data.contents.translated;
    }).catch(errorHandler);
});
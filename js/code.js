
function encryptText(text) {
    text = text.replaceAll("e", "enter");
    text = text.replaceAll("i", "imes");
    text = text.replaceAll("a", "ai");
    text = text.replaceAll("o", "ober");
    text = text.replaceAll("u", "ufat");
    return text;
}

function decryptText(text) {
    text = text.replaceAll("enter", "e");
    text = text.replaceAll("imes", "i");
    text = text.replaceAll("ai", "a");
    text = text.replaceAll("ober", "o");
    text = text.replaceAll("ufat", "u");
    return text;
}

function encryptValueInput() {
    // console.log(textInput.value.isEmpty());
    if (textInput.value !== "") {
        displayHide();
        let input = encryptText(textInput.value);
        textOutput.value = input;
        textInput.value = "";
    }

}

function decryptValueInput() {
    if (textInput.value !== "") {
        displayHide();
        let input = decryptText(textInput.value);
        textOutput.value = input;
        textInput.value = "";
    }
}

function displayHide() {
    imageDecrypt.style.display = "none";
    messageDecrypt.style.display = "none";
}


function copyText() {
    if (textOutput.value !== "") {
        imageDecrypt.style.display = "block";
        messageDecrypt.style.display = "flex";
        navigator.clipboard.writeText(textOutput.value);
        textOutput.value = "";
    }
}


let textInput = document.querySelector(".encrypt-area");
let textOutput = document.querySelector(".decrypt-area");
let buttonEncrypt = document.querySelector(".encrypt-btn-one");
let buttonDecrypt = document.querySelector(".encrypt-btn-two");
let buttonCopy = document.querySelector(".decrypt-btn");
let imageDecrypt = document.querySelector(".decrypt-img");
let messageDecrypt = document.querySelector(".decrypt-message");


buttonEncrypt.onclick = encryptValueInput;
buttonDecrypt.onclick = decryptValueInput;
buttonCopy.onclick = copyText;
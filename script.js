let samplechat = document.getElementById("samplechat");
let chatbox = document.getElementById("chatbox");
let map = document.getElementById("map");
let isLennyClicked = false;

function openChat() {
    if (!isLennyClicked) {
        isLennyClicked = true;
        map.style.filter = 'brightness(70%)';
        chatbox.style.opacity = 1;
    }
    else {
        isLennyClicked = false;
        map.style.filter = 'brightness(100%)';
        chatbox.style.opacity = 0;
    }
    
    closeQuestion();
}

function openQuestion() {
    if (isLennyClicked == false)
    samplechat.style.opacity = 1;
}

function closeQuestion() {
    samplechat.style.opacity = 0;
}
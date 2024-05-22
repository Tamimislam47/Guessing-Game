const form = document.querySelector(".form");
const inputField = form.querySelector("#input");
const dumyHere = form.querySelector(".dumy");
const btn = form.querySelector("#btn");

let win = 0, lose = 0;
const maxAttempts = 5;

function dmyText(win, lose, remainMatch) {
    return `Win: ${win} Lose: ${lose} \nRemain Guess: ${remainMatch}`;
}

function makeRandomNum() {
    return Math.floor(Math.random() * 5) + 1;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let userNum = parseInt(inputField.value),randomNum = makeRandomNum();

    if(userNum === randomNum){
        win++;
    }
    else{
        lose++;
    }

    let remainMatch = maxAttempts - (win + lose);
    if(remainMatch <= 0){
        alert(dmyText(win, lose, remainMatch));
        win = 0;
        lose = 0;
        remainMatch = maxAttempts;
    }

    dumyHere.innerHTML = dmyText(win, lose, remainMatch);
    inputField.value = "";
});

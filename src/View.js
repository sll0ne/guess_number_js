import {
    blockGreeting,
    blockInformation,
    blockShowGame,
    blockMessage,
    blockResult,
    blockResultText,
    fieldName,
    textInfo,
    numAttempt,
    maxNum,
    makeNumber,
    hiddenNumber,
    var_numAttempt
} from './Model.js';

export var userName;

export function startGame() {
    blockGreeting.style.display = 'flex';
    blockInformation.style.display = 'none';
    blockShowGame.style.display = 'none';
    blockMessage.style.display = 'none';
    blockResult.style.display = 'none';
}

export function informationOutput() {
    if (fieldName.value === "") {
        alert("Enter your name")
    } else {
        userName = fieldName.value;

        blockGreeting.style.display = 'none';
        blockInformation.style.display = 'flex';
        blockShowGame.style.display = 'none';

        textInfo.innerHTML = "Great, <b>" + userName + "</b>! Let's play the game \"Guess Number\"." +
            "  I guess the number<b> from 1 to " + maxNum +
            "</b> and you have to guess the number for <b>" + numAttempt + "</b> attempts.";
    }
}

export function showGameOutput() {
    blockGreeting.style.display = 'none';
    blockInformation.style.display = 'none';
    blockShowGame.style.display = 'flex';
    blockMessage.style.display = 'none';
    blockResult.style.display = 'none';

    makeNumber();
}

export function messageOutput(type_message) {
    if (type_message === "less") {
        blockMessage.style.display = 'flex';
        blockMessage.innerHTML = "Your number is too small! Number of attempts: " + var_numAttempt;
    }
    if (type_message === "more") {
        blockMessage.style.display = 'flex';
        blockMessage.innerHTML = "Your number is too large! Number of attempts: " + var_numAttempt;
    }
    if (type_message === "win") {
        blockMessage.style.display = 'none';
        blockShowGame.style.display = 'none';
        blockResult.style.display = 'flex';
        blockResultText.innerHTML = "Congratulations! You guessed the number " + hiddenNumber +
            " c " + (numAttempt - var_numAttempt + 1) + "th attempt";
    }
    if (type_message === "loose") {
        blockMessage.style.display = 'none';
        blockShowGame.style.display = 'none';
        blockResult.style.display = 'flex';
        blockResultText.innerHTML = "Sorry, you didn't guess the number :-'(' " + hiddenNumber;
    }
}
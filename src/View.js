import {
    blockGreeting,
    blockInformation,
    blockShowGame,
    blockMessage,
    blockResult,
    blockResultText,
    blockGameMenu,
    fieldName,
    textInfo,
    numAttempt,
    maxNum,
    makeNumber,
    hiddenNumber,
    var_numAttempt,
	blockList,
	blockTextList
} from './Model.js';

import {
    addNewGame
} from "./DB.js";

export let userName;

export function startGame() {
    hideAll();

    blockGreeting.style.display = 'flex';
}

export function informationOutput() {
    if (fieldName.value === "") {
        alert("Enter your name")
    } else {
        userName = fieldName.value;

        hideAll();

        blockInformation.style.display = 'flex';

        textInfo.innerHTML = "Great, <b>" + userName + "</b>! Let's play the game \"Guess Number\"." +
            "  I guess the number<b> from 1 to " + maxNum +
            "</b> and you have to guess the number for <b>" + numAttempt + "</b> attempts.";
    }
}

export function GameMenu(){
    hideAll();

    blockGameMenu.style.display = 'flex';
}

export function showGameOutput() {
    hideAll();

    makeNumber();

    addNewGame(userName, maxNum, numAttempt, hiddenNumber);

    blockShowGame.style.display = 'flex';
}

export function messageOutput(type_message) {
    blockResultText.style.display = "flex";

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
            " for " + (numAttempt - var_numAttempt + 1) + "th attempt";
    }
    if (type_message === "lost") {
        blockMessage.style.display = 'none';
        blockShowGame.style.display = 'none';
        blockResult.style.display = 'flex';
        blockResultText.innerHTML = "Sorry, you didn't guess the number :-'('" + hiddenNumber;
    }
}

export function writeAllGame(result){
    hideAll();

    blockList.style.display = 'flex';
    blockTextList.innerHTML = result;
}

function hideAll(){
    blockGreeting.style.display = 'none';
    blockInformation.style.display = 'none';
    blockShowGame.style.display = 'none';
    blockMessage.style.display = 'none';
    blockResult.style.display = 'none';
    blockGameMenu.style.display = 'none';
    blockList.style.display = 'none';
}
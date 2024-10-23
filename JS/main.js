//EJERCICIO 2/3
"use strict";

//QUERY

const userNumberInput = document.querySelector(".js__userNumberInput");
const testButton = document.querySelector(".js__testButton");
const clueBox = document.querySelector(".js__clueBox");
const triesBox = document.querySelector(".js__triesBox");
//VARIABLES GLOBALES
const randomNumber = getRandomNumber(100);
console.log(randomNumber);
let userTries = 0;

//FUNCIONES

function getRandomNumber(max) {
  return parseInt(Math.random() * max);
}

function generteClue() {
  const userNumber = parseInt(userNumberInput.value);

  if (isNaN(userNumber)) {
    clueBox.innerHTML = "Escribe un número";
  } else if (userNumber < 1 || userNumber > 100) {
    clueBox.innerHTML = "El número debe estar entre 1 y 100.";
  } else if (userNumber < randomNumber) {
    clueBox.innerHTML = "Demasiado bajo.";
  } else if (userNumber > randomNumber) {
    clueBox.innerHTML = "Demasiado alto.";
  } else if (userNumber === randomNumber) {
    clueBox.innerHTML = "¡¡¡Has ganado campeona!!!";
  }
}

function countNumOfTries() {
  userTries++; //userTries = userTries + 1;

  triesBox.innerHTML = userTries;
}

//FUNCIONES DE EVENTOS

function handleClickButton(ev) {
  generteClue();
  countNumOfTries();
}

//EVENTOS
testButton.addEventListener("click", handleClickButton);

//CÓDIGO AL CARGAR LA PÁGINA

//Cuando carga la página

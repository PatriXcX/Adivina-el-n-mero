//EJERCICIO 2/3
"use strict";

const formInputs = document.querySelector(".js__form__input");
const InputNumber = document.querySelector(".js__inputNum");
const formInputBtn = document.querySelector(".js__btn");
const formInputText1 = document.querySelector(".js__inputText1t");
const formInputText2 = document.querySelector(".js__inputText2");
const prueba = "Prueba";

formInputs.innerHTML = `<input class="js__inputNum" type="number" id="numero" placeholder="">
            <button class="btn" onclick="adivinar()">${prueba}</button>
            <input class="js__inputText1" type="text" id="input1"
                placeholder="Pista: Escribe el número y dale a Prueba">
            <input class="js__inputText2" type="text" id="input2" placeholder="Número de intentos:">

    `;

//Funciones

//generar un número aleatorio

function showMessage() {}
//Coger el valor del input number
//Mostrar mensaje en innerhtml

function getRandomNumber(max) {
  console.log(parseInt(Math.random() * max));
  return parseInt(Math.random() * max);
}
getRandomNumber(100);

//Funciones de eventos

const handleClickBtnbtn = (ev) => {
  //
  showMessage();
  generateNum();
};

btn.addEventListener("click", handleClickBtnbtn);

/*const descripcionadalaber2 = document.querySelector(".js__adalaber");
const adalaberinput = document.querySelector(".js__adalaber__input");
const btn = document.querySelector(".js__btn");

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
  distance: 20,

  run: function () {
    console.log("Estoy corriendo");
  },
  runAMarathon: function (distance) {
    console.log(
      `Estoy corriendo un maratón de ${adalaber1.distance} kilómetros`
    );
  },
};
adalaber1.run();
adalaber1.runAMarathon("distance");

//EJERCICIO 1 ------------------------------------------------------------------------------

/*const descripcionadalaber1 = document.querySelector(".js__adalaber");
const descripcionadalaber2 = document.querySelector(".js__adalaber");
const adalaberinput = document.querySelector(".js__adalaber__input");
const btn = document.querySelector(".js__btn");

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
};

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
};

descripcionadalaber1.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;
descripcionadalaber2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;

btn.addEventListener("click", (ev) => {
  if (adalaberinput.value === "Susana") {
    descripcionadalaber1.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;
  }
  if (adalaberinput.value === "Rocío") {
    descripcionadalaber1.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;
  }
});*/
//---------------------------------------------------------------

/*console.log(adalaber);
adalaber.nombre = "Marta"; //para cambiar de nombre
console.log(adalaber);
/*const adalaber2 = {};
name: "Susana";
age: 34;
job: "periodista";

/*const objeto1 = {
  a: 1,
  b: 2,
  c: 3,
};
const a = 1;
const b = 2;
const c = 3;

const suma = objeto1.a + objeto1.b + objeto1.c;

console.log(suma);
console.log(objeto1);
//-------------------------------

/*const profe = {
  nombre: "Iván",
  altura: 180,
  peso: 85,
};*/

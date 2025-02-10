import { Comecocos } from "./classes/Comecocos.js"; // Importar la classe Comecocos

const xCanvas = 600;
const yCanvas = 600;

const gameBoard = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let comecocos;
let imgMur;

/**
 * Càrrega de la imatge de les parets
 */
function preload() {
  imgMur = loadImage("../img/roca.png"); // Carregar la imatge de la paret
}

/**
 * Configuració inicial
 */
function setup() {
  createCanvas(xCanvas, yCanvas);
  angleMode(DEGREES);

  comecocos = new Comecocos(100, 240, 40, "Yellow"); // Creem el comecocos
}

/**
 * Funció de dibuix continu
 */
function draw() {
  background(220);

  const midaCasella = 40;

  for (let row = 0; row < gameBoard.length; row++) {
    for (let col = 0; col < gameBoard[row].length; col++) {
      const x = col * midaCasella; // Posició X de la cel·la
      const y = row * midaCasella; // Posició Y de la cel·la

      // Dibuixar segons el valor de gameBoard[row][col]
      if (gameBoard[row][col] === 1) {
        image(imgMur, x, y, midaCasella, midaCasella); // Dibuixar roca
      }
    }
  }

  comecocos.draw(); // Dibuixar el comecocos un cop fora del bucle
  comecocos.preventOutOfBounds(); // Comprovar si el comecocos surt del canvas
}

/**
 * Funció per moure el comecocos
 */
function keyPressed() {
  if (keyCode === UP_ARROW) {
    comecocos.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    comecocos.moveDown();
  } else if (keyCode === LEFT_ARROW) {
    comecocos.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    comecocos.moveRight();
  }
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.keyPressed = keyPressed;
globalThis.preload = preload;

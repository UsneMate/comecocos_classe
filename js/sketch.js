import { Comecocos } from "./classes/Comecocos.js"; // Importar la classe Comecocos
import { Tauler } from "./classes/Tauler.js"; // Importar la classe Tauler

const xCanvas = 600;
const yCanvas = 500;

let comecocos;
let imgMur;
let tauler; // Instància del tauler

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

  // Creem una instància del tauler
  tauler = new Tauler(30, 25, imgMur); // 30 files x 25 columnes
}

/**
 * Funció de dibuix continu
 */
function draw() {
  background(220);

  // Dibuixar el tauler
  tauler.draw(); // Dibuixar les parets del tauler

  comecocos.draw(); // Dibuixar el comecocos
  comecocos.preventOutOfBounds();
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

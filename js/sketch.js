import { Comecocos } from "./classes/Comecocos.js"; // Importar la classe Comecocos

// Coordenades de la mida del canvas
const xCanvas = 600;
const yCanvas = 500;

// Creem una instància del comecocos
let comecocos;

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
  drawParedsVerticals();
  drawParedsHoritzontals();
  comecocos.draw(); // Dibuixem el comecocos

  // Comprovem si el comecocos surt dels límits i corregim la seva posició
  comecocos.preventOutOfBounds();
}

/**
 * Funció per moure el comecocos amunt
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

// funció per dibuixar les pareds verticals
/**
 *
 */
function drawParedsVerticals() {
  fill(0);
  rect(0, 0, 20, 210);
  rect(0, 270, 20, 250);
  rect(579, 0, 20, 210);
  rect(579, 270, 20, 250);
}

// funció per dibuixar les pareds horitzontals
/**
 *
 */
function drawParedsHoritzontals() {
  fill(0);
  rect(20, 0, 559, 20);
  rect(20, 480, 559, 20);
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.keyPressed = keyPressed;

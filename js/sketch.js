import { Comecocos } from "./classes/Comecocos.js"; // Importar la classe Comecocos
import { Food } from "./classes/food.js"; // Importar la classe Food

const xCanvas = 600;
const yCanvas = 600;

const gameBoard = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1],
  [1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
  [1, 2, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 2, 2, 1],
  [1, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 1],
  [0, 0, 2, 0, 0, 0, 0, 1, 0, 2, 2, 0, 2, 2, 0],
  [0, 0, 2, 0, 0, 0, 1, 1, 1, 2, 2, 0, 2, 2, 0],
  [1, 0, 2, 0, 0, 0, 1, 1, 1, 2, 2, 0, 2, 2, 1],
  [1, 0, 2, 1, 0, 0, 0, 0, 0, 2, 2, 1, 2, 2, 1],
  [1, 0, 2, 1, 0, 0, 0, 0, 0, 2, 2, 1, 2, 2, 1],
  [1, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 1],
  [1, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let comecocos;
let imgMur;
let imgFood;
const foodItems = []; // Array per emmagatzemar els objectes de menjar
let score = 0; // Punts inicials

/**
 * Càrrega de la imatge de les parets
 */
function preload() {
  imgMur = loadImage("../img/roca.png"); // Carregar la imatge de la paret
  imgFood = loadImage("../img/food.png"); // Carregar la imatge del menjar
}

/**
 * Configuració inicial
 */
function setup() {
  createCanvas(xCanvas, yCanvas);
  angleMode(DEGREES);

  comecocos = new Comecocos(100, 240, 40, "Yellow"); // Creem el comecocos

  // Crear els objectes de menjar per a les cel·les amb valor 0
  for (let row = 0; row < gameBoard.length; row++) {
    for (let col = 0; col < gameBoard[row].length; col++) {
      if (gameBoard[row][col] === 2) {
        foodItems.push(new Food(col, row, 10)); // Afegir un objecte de menjar amb 10 punts
      }
    }
  }
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

  // Dibuixar els objectes de menjar
  for (let i = foodItems.length - 1; i >= 0; i--) {
    const food = foodItems[i];
    food.draw(imgFood);

    // Comprovar si el comecocos ha recollit el menjar
    if (comecocos.xCoord < food.x * 40 + 30 &&
      comecocos.xCoord + 40 > food.x * 40 &&
      comecocos.yCoord < food.y * 40 + 30 &&
      comecocos.yCoord + 40 > food.y * 40) {
      // Eliminar el menjar de la llista
      foodItems.splice(i, 1);
      // Afegir punts
      score += food.points;
    }
  }

  comecocos.draw(); // Dibuixar el comecocos un cop fora del bucle
  comecocos.preventOutOfBounds(); // Comprovar si el comecocos surt del canvas
}

/**
 *
 */
function keyPressed() {
  const midaCasella = 40;

  // Moure el comecocos segons la tecla premuda
  if (keyCode === UP_ARROW) {
    comecocos.moveUp();
    if (isWall(comecocos.xCoord, comecocos.yCoord)) {
      comecocos.yCoord += 30; // Desfer el moviment si hi ha una roca
    }
  } else if (keyCode === DOWN_ARROW) {
    comecocos.moveDown();
    if (isWall(comecocos.xCoord, comecocos.yCoord)) {
      comecocos.yCoord -= 30; // Desfer el moviment si hi ha una roca
    }
  } else if (keyCode === LEFT_ARROW) {
    comecocos.moveLeft();
    if (isWall(comecocos.xCoord, comecocos.yCoord)) {
      comecocos.xCoord += 30; // Desfer el moviment si hi ha una roca
    }
  } else if (keyCode === RIGHT_ARROW) {
    comecocos.moveRight();
    if (isWall(comecocos.xCoord, comecocos.yCoord)) {
      comecocos.xCoord -= 30; // Desfer el moviment si hi ha una roca
    }
  }
}

/**
 * funció per verificar si tenim una pared
 * @param x
 * @param y
 * @returns {boolean}
 */
function isWall(x, y) {
  // Calculem la posició de la casella dins de gameBoard
  const col = Math.floor(x / 40); // Calcular la columna
  const row = Math.floor(y / 40); // Calcular la fila

  // Comprovem si la casella és una roca (valor 1)
  return gameBoard[row][col] === 1;
}

/**
 * Funció per verificar si hi ha menjar en una posició donada
 * @param x Coordenada X en píxels
 * @param y Coordenada Y en píxels
 * @returns {boolean} Retorna cert si hi ha menjar en la posició
 */
function isFood(x, y) {
  // Calculem la posició de la casella dins de gameBoard
  const col = Math.floor(x / 40); // Calcular la columna
  const row = Math.floor(y / 40); // Calcular la fila

  // Comprovem si la casella conté menjar (valor 2)
  return gameBoard[row][col] === 2;
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.keyPressed = keyPressed;
globalThis.preload = preload;

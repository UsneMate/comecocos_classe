// variables globals

// coordenades de la mida del canvas
const xCanvas = 600;
const yCanvas = 500;

// coordenades comecocos
let xCoordComecocos = 100;
let yCoordComecocos = 240;
const radiComecocos = 80;
let angleIniciComecocos = 40;
let angleFiComecocos = 330;
const colorComecocos = "Yellow";

// variable amb la velocitat de moviment
const velocitat = 15;

/**
 *
 */
function setup() {
  createCanvas(xCanvas, yCanvas);
  angleMode(DEGREES);
}

/**
 *
 */
function draw() {
  background(220);
  drawParedsVerticals();
  drawParedsHoritzontals();
  drawComecocos();
}

// funció per dibuixar les pareds verticals
/**
 *
 */
function drawParedsVerticals() {
  fill(0);
  rect(0, 0, 20, 180);
  rect(0, 300, 20, 220);
  rect(579, 0, 20, 180);
  rect(579, 300, 20, 220);
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

// dibuixo el comecocos
/**
 *
 */
function drawComecocos() {
  fill(colorComecocos);
  arc(xCoordComecocos, yCoordComecocos, radiComecocos, radiComecocos, angleIniciComecocos, angleFiComecocos);
}

// Funció per detectar tecles i moure el Comecocos
/**
 *
 */
function keyPressed() {
  console.log("nnnn");
  if (keyCode === UP_ARROW) {
    yCoordComecocos -= velocitat;
    angleIniciComecocos = 300;
    angleFiComecocos = 240;
  } else if (keyCode === DOWN_ARROW) {
    yCoordComecocos += velocitat;
    angleIniciComecocos = 125;
    angleFiComecocos = 55;
  } else if (keyCode === LEFT_ARROW) {
    xCoordComecocos -= velocitat;
    angleIniciComecocos = 210;
    angleFiComecocos = 135;
  } else if (keyCode === RIGHT_ARROW) {
    console.log("nnnn");
    xCoordComecocos += velocitat;
    angleIniciComecocos = 40;
    angleFiComecocos = 330;
  }

  // Assegurar que el Comecocos no surti del canvas.
  // 20 és el gruix de la pared de la superior
  // radiComecocos/2, perquè les coordenades es conten des del centre
  if (yCoordComecocos < 20 + radiComecocos / 2) {
    yCoordComecocos = 20 + radiComecocos / 2;
  }
  // if que detecta les pareds de la part inferior, se li ha de restar a       l'alçada
  // del canvas de y l'amplada de la pared - el radi del comecocos
  if (yCoordComecocos > yCanvas - 20 - radiComecocos / 2) {
    yCoordComecocos = yCanvas - 20 - radiComecocos / 2;
  }

  // Bloquejar el moviment lateral excloent les obertures laterals
  // L'alçada del pas és de 100
  // primer limitem la sortida de l'esquerra
  if (xCoordComecocos < 20 + radiComecocos / 2 && (yCoordComecocos <= 200 || yCoordComecocos >= 300)) {
    xCoordComecocos = 20 + radiComecocos / 2;
  }
  // Ara limitem la sortida de la dreta
  if (xCoordComecocos > xCanvas - 20 - radiComecocos / 2 && (yCoordComecocos <= 200 || yCoordComecocos >= 300)) {
    xCoordComecocos = xCanvas - 20 - radiComecocos / 2;
  }

  // Només deixem passar si passa entre 200 i 300 en vertical
  // si el comecocos sobrepassa el canvas, comença un altre cop a coordenada de x 0
  if (xCoordComecocos > xCanvas && (yCoordComecocos > 200 && yCoordComecocos < 300)) {
    xCoordComecocos = 0;
  }
  // si el comencocos sobrepassa la pared de l'esquerra, comença un altre cop
  // a la dreta, que és l'amplada del canvas
  if (xCoordComecocos < 0 && (yCoordComecocos > 200 && yCoordComecocos < 300)) {
    xCoordComecocos = xCanvas;
  }
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.keyPressed = keyPressed;
// globalThis.preload = preload;

// Comecocos.js

export class Comecocos {
  constructor(x, y, radi, color) {
    this.xCoord = x;
    this.yCoord = y;
    this.radi = radi;
    this.color = color;
    this.angleInici = 40;
    this.angleFi = 330;
  }

  // Dibuixar el comecocos
  draw() {
    fill(this.color);
    arc(this.xCoord, this.yCoord, this.radi, this.radi, this.angleInici, this.angleFi);
  }

  // Moure el comecocos amunt
  moveUp() {
    this.yCoord -= 15;
    this.angleInici = 300;
    this.angleFi = 240;
  }

  // Moure el comecocos avall
  moveDown() {
    this.yCoord += 15;
    this.angleInici = 125;
    this.angleFi = 55;
  }

  // Moure el comecocos a l'esquerra
  moveLeft() {
    this.xCoord -= 15;
    this.angleInici = 210;
    this.angleFi = 135;
  }

  // Moure el comecocos a la dreta
  moveRight() {
    this.xCoord += 15;
    this.angleInici = 40;
    this.angleFi = 330;
  }

  // Assegurar que el comecocos no surti del canvas
  preventOutOfBounds() {
    // Assegurem que no surti per dalt o per baix
    if (this.yCoord < 20 + this.radi / 2) {
      this.yCoord = 20 + this.radi / 2;
    }
    if (this.yCoord > 500 - 20 - this.radi / 2) {
      this.yCoord = 500 - 20 - this.radi / 2;
    }

    // Assegurem que no surti per l'esquerra ni per la dreta
    if (this.xCoord < 20 + this.radi / 2 && (this.yCoord <= 270 || this.yCoord >= 330)) {
      this.xCoord = 20 + this.radi / 2;
    }
    if (this.xCoord > 600 - 20 - this.radi / 2 && (this.yCoord <= 270 || this.yCoord >= 330)) {
      this.xCoord = 600 - 20 - this.radi / 2;
    }

    // Si el comecocos surt del canvas, ha de reapareixer a l'altre costat
    if (this.xCoord > 600 && (this.yCoord > 270 && this.yCoord < 330)) {
      this.xCoord = 0;
    }
    if (this.xCoord < 0 && (this.yCoord > 270 && this.yCoord < 330)) {
      this.xCoord = 600;
    }
  }
}

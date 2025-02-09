// Tauler.js

export class Tauler {
  constructor(larg, alt, imgMur) {
    this.larg = larg; // Nombre de columnes
    this.alt = alt; // Nombre de files
    this.imgMur = imgMur; // Imatge de la paret
    this.tauler = []; // Array bidimensional per emmagatzemar les parets
    this.init(); // Inicialitzar el tauler
  }

  // Inicialitza l'array amb valors per defecte (sense paret, 0)
  init() {
    // Generem el tauler inicial (tot buit)
    for (let i = 0; i < this.larg; i++) {
      this.tauler[i] = [];
      for (let j = 0; j < this.alt; j++) {
        this.tauler[i][j] = 0; // 0 representa que no hi ha paret
      }
    }

    // Afegim les parets externes (marco del tauler)
    for (let i = 0; i < this.larg; i++) {
      this.tauler[i][0] = 1; // Paret esquerra
      this.tauler[i][this.alt - 1] = 1; // Paret dreta
    }

    for (let j = 0; j < this.alt; j++) {
      this.tauler[0][j] = 1; // Paret superior
      this.tauler[this.larg - 1][j] = 1; // Paret inferior
    }

    // Afegim camins interiors per on el Pacman pot passar
    // Per exemple, deixem lliures espais entre les parets (com un camí)
    for (let i = 1; i < this.larg - 1; i++) {
      for (let j = 1; j < this.alt - 1; j++) {
        if (i > 5 && i < 15 && j > 5 && j < 20) { // Exemple: crear una zona lliure
          this.tauler[i][j] = 0; // Aquestes cel·les seran camins per Pacman
        }
      }
    }
  }

  // Dibuixar el tauler
  draw() {
    for (let i = 0; i < this.larg; i++) {
      for (let j = 0; j < this.alt; j++) {
        if (this.tauler[i][j] === 1) {
          // Dibuixar la imatge de la paret només on hi ha paret (1)
          image(this.imgMur, i * 20, j * 20, 20, 20);
        }
        // Si és 0 (espai lliure), no es dibuixa res (el Pacman pot passar)
      }
    }
  }

  // Afegeix una paret en una posició específica del tauler
  addWall(x, y) {
    if (x >= 0 && x < this.larg && y >= 0 && y < this.alt) {
      this.tauler[x][y] = 1; // Afegeix paret a la posició especificada
    }
  }
}

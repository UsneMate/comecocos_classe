export class Food {
  constructor(x, y, points) {
    this.x = x;
    this.y = y;
    this.points = points;
  }

  // Dibuixar el menjar a la posició especificada
  draw(imgFood) {
    const cellSize = 40;
    image(imgFood, this.x * cellSize, this.y * cellSize, cellSize, cellSize);
  }
}

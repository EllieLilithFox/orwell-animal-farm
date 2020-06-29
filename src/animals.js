export class Animal {
  constructor() {
    this.foodLevel = 10;
    this.waterLevel = 10;
    this.energy = 10;
  }

  hunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

}
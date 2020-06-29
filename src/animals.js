export class Animal {
  constructor() {
    this.foodLevel = 10;
    this.waterLevel = 10;
    this.energy = 10;
    this.alive = true;
  }

  hunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  thirst() {
    setInterval(() => {
      this.waterLevel--;
    }, 1000);
  }

  fatigue() {
    setInterval(() => {
      this.energy--;
    }, 1000);
  }

  feed() {
    this.foodLevel += 8;
  }

  water() {
    this.waterLevel += 8;
  }

  sleep() {
    this.energy += 10;
  }

  isAlive() {
    setInterval(() => {
      if (this.foodLevel > 0 && this.waterLevel > 0) {
        this.alive = true;
      } else {
        this.alive= false;
      }
    }, 1001);
  }
}
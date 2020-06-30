// export class GifAPI {

//   async getAPI(image) {
//     try {
//       let response = await fetch(`http://api.giphy.com/v1/gifs/${image}?api_key=${process.env.API_KEY}`);
//       let jsonifiedResponse;
//       if (response.ok && response.status == 200) {
//         jsonifiedResponse = await response.json();
//       } else {
//         jsonifiedResponse = false;
//       }
//       return jsonifiedResponse;
//     } catch {
//       return false;
//     }
//   }
// }

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
    }, 4000);
  }

  thirst() {
    setInterval(() => {
      this.waterLevel--;
    }, 4000);
  }

  fatigue() {
    setInterval(() => {
      this.energy--;
    }, 4000);
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
        this.alive = false;
      }
    }, 4001);
  }
}
import { Animal } from "../src/animals.js";

describe("Animal class", () => {
  let reusableAnimal;

  beforeEach(() => {
    reusableAnimal = new Animal();
  });

  test('should create a new animal class with foodLevel, waterLevel and energy properties', () => {
    expect(reusableAnimal).toEqual({ foodLevel: 10, waterLevel: 10, energy: 10 });
  });
});
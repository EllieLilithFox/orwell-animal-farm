import { Animal } from "../src/animals.js";

describe("Animal class", () => {
  let reusableAnimal;
  jest.useFakeTimers();

  beforeEach(() => {
    reusableAnimal = new Animal();
    reusableAnimal.hunger();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  test('should create a new animal class with foodLevel, waterLevel and energy properties', () => {
    expect(reusableAnimal).toEqual({ foodLevel: 10, waterLevel: 10, energy: 10 });
  });

  test('Program will call hunger method on a set interval on animal classes which subtracts one hunger', () => {
    jest.advanceTimersByTime(3001);
    reusableAnimal.hunger();
    expect(reusableAnimal.foodLevel).toEqual(7);
  });




});
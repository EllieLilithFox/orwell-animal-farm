import { Animal } from "../src/animals.js";

describe("Animal class", () => {
  let reusableAnimal;
  jest.useFakeTimers();

  beforeEach(() => {
    reusableAnimal = new Animal();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  test('should create a new animal class with foodLevel, waterLevel and energy properties', () => {
    expect(reusableAnimal).toEqual({ foodLevel: 10, waterLevel: 10, energy: 10, alive: true });
  });

  test('should call hunger method on a set interval on animal classes which subtracts one foodLevel', () => {
    reusableAnimal.hunger();
    jest.advanceTimersByTime(3001);
    expect(reusableAnimal.foodLevel).toEqual(7);
  });

  test('Program call thirst method on a set interval on animal classes which subtracts one waterLevel', () => {
    reusableAnimal.thirst();
    jest.advanceTimersByTime(4001);
    expect(reusableAnimal.waterLevel).toEqual(6);
  });

  test('should call fatigue method on a set interval on animal classes which subtracts one energy', () => {
    reusableAnimal.fatigue();
    jest.advanceTimersByTime(6001);
    expect(reusableAnimal.energy).toEqual(4);
  });

  test('should call feed method and add 8 to foodLevel property', () => {
    reusableAnimal.foodLevel = 2;
    reusableAnimal.feed();
    expect(reusableAnimal.foodLevel).toBe(10);
  });

  test('should call water method and add 8 to waterLevel property', () => {
    reusableAnimal.waterLevel = 2;
    reusableAnimal.water();
    expect(reusableAnimal.waterLevel).toBe(10);
  });

  test('should call sleep method and add 8 to energy property', () => {
    reusableAnimal.energy = 0;
    reusableAnimal.sleep();
    expect(reusableAnimal.energy).toBe(10);
  });

  test('should call isAlive method that will  true or false depending on food and water Levels', () => {
    reusableAnimal.isAlive();
    reusableAnimal.foodLevel = 0;
    jest.advanceTimersByTime(1002);
    expect(reusableAnimal.alive).toBe(false);
  });

});
const Car = require('./car');

describe('The Car class', () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });

  test('has four wheels', () => {
    expect(car.wheels).toBe(4);
  });

  test('Two newly created cars are object equal', () => {
    let car2 = new Car();

    expect(car).toEqual(car2);
  });

  test("a newly created car does not have doors", () => {
    expect(car.doors).toBeUndefined();
  });

  test('Raises an error when called drive on it', () => {
    expect(() => car.drive()).toThrow();
  });

  test('Raises a TypeError when called drive on it', () => {
    expect(() => car.drive()).toThrow(TypeError);
  });
});
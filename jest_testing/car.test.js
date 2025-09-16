const Car = require("./car");

describe("The Car class", () => {
  test("has four wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });

  xtest("bad wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(3);
  });

  test("two new cars are equal objects", () => {
    let car1 = new Car();
    let car2 = new Car();

    expect(car1).toEqual(car2);
  });

  test("Does not have doors", () => {
    let car = new Car();
    expect(car.doors).toBeUndefined();
  });

  test("raises an error when called drive on it", () => {
    let car = new Car();
    expect(() => car.drive()).toThrow();
  });

  test("raises a TypeError when called drive on it", () => {
    let car = new Car();
    expect(() => car.drive()).toThrow(TypeError);
  })
});
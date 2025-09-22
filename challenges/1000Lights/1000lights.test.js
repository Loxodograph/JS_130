let Lights = require('./1000lights.js');

describe("Lights", () => {
  test("100 passes returns lights", () => {
    expect(Lights.lightsOn(100)).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
  });

  test("5 passes returns [1, 4]", () => {
    expect(Lights.lightsOn(5)).toEqual([1, 4]);
  });
});
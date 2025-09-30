"use strict";

class Lights {
  static lightsOn(count) {
    if (count === 0) return [];
    let lightObject = this.createLights(count);
    let lightsOnArray = [];
    for (let passes = 2; passes <= count; passes++) {
      for (let switchIndex = passes; switchIndex <= count; switchIndex += passes) {
        lightObject[switchIndex] = !lightObject[switchIndex];
      }
    }
    for (const [key, value] of Object.entries(lightObject)) {
      if (value) lightsOnArray.push(Number(key));
    }
    return lightsOnArray;
  }

  static createLights(count) {
    let lightObject = {};
    for (let index = 1; index <= count; index++) {
      lightObject[index] = true;
    }

    return lightObject;
  }
}

module.exports = Lights;
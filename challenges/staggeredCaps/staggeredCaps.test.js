let Staggered = require("./staggeredCaps");

describe("Staggered case", () => {
  test("test simple sentence", () => {
    let staggered = new Staggered('I love Launch School!');
    expect(staggered.stagger()).toBe("I lOvE lAuNcH sChOoL!");
  });
});

describe("All caps", () => {
  test("all caps turns to staggered", () => {
    let staggered = new Staggered("ALL CAPS");
    expect(staggered.stagger()).toBe("AlL cApS");
  });
});

describe("Staggered Case", () => {
  test("Special characters", () => {
    let staggered = new Staggered("ignore 77 the 444 numbers");
    expect(staggered.stagger()).toBe("IgNoRe 77 ThE 444 nUmBeRs");
  })
})
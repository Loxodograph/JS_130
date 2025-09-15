function sum(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  }, 0);
}

console.log(sum(1, 4, 5, 6)); // 16
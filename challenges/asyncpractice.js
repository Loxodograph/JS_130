// function afterNSeconds(callback, seconds) {
//   setTimeout(function() {
//     callback();
//   }, seconds * 1000);
// }

// let logIt = () => console.log("hello");

// afterNSeconds(logIt, 3);

function startCounting() {
  let count = 0;
  let counterId = setInterval(function() {
    count += 1;
    console.log(count);
  }, 1000);
  return counterId;
}

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counterId = startCounting();
stopCounting(counterId);
function completeTask() {
  console.log('completeTask 함수 시작');
}

function startTask(callbackFunction) {
  console.log('startTask 함수 시작');
  callbackFunction();
  console.log('startTask 함수 종료');
}

// startTask(completeTask);
function completeTask() {
  console.log('completeTask 함수 시작');
}

function startTask(A) {
  A();
}
// 
const applyOperation = (func, number) => {
  return func(number);
}

let double2 = function(x) {
  return x * 2;
}

const double = x => x * 2;

console.log(applyOperation(double, 5));

// 
const makeMultiplier = (n) => {
  return (x) => x * n;
}

const doubleNumber = makeMultiplier(2);
const tripleNumber = makeMultiplier(3);

console.log(doubleNumber(5)); // 결과: 10
console.log(tripleNumber(5)); // 결과: 15
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
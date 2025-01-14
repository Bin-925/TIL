function add(n1, n2) {
  return n1 + n2
}
let sub = function (n3, n4) {
  return n3 - n4
}
let sub2 = (n5, n6) => n5 - n6
console.log(sub(3, 6))

let cube = x => x**3
console.log(cube(2))

// //const person = {
//   name: '철수',
//   greet: function () {
//       console.log('안녕하세요. 반갑습니다.');
//   },
// };

// person.greet(); // 안녕하세요. 반갑습니다.
const person = {
  name: '철수',
  greet: () => console.log('안녕하세요. 반갑습니다.'),
  greet2() {
    console.log('다른인사')
  }
}  

person.greet()
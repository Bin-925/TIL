// Array Helper Method

// a의 개별 항목들에 대하여
let a = [1, 2, 3, 4];
a.forEach()

const numbers1 = [1, 2, 3, 4];

numbers1.forEach((num) => {
    console.log(num+1); // 2, 3, 4, 5
});

// map

const numbers2 = [1, 2, 3, 4];

const doubled = numbers2.map((num) => {
    return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

// filter

const numbers3 = [1, 2, 3, 4];

const evenNumbers = numbers3.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

// 청소년 영화 구하기
const movies = [
  {title: "matrics", isAdult: false},
  {title: "kingsman", isAdult: true},
  {title: "zootopia", isAdult: false}
]

// let babymovies = movies.filter((movie) => {
//   return movie.isAdult
// });

// let baby = movies
//                  .filter(movie => movie.isAdult === false)
//                  .map(movie => movie.title)

let baby = movies.reduce(function (acc, movie) {
  if (!movie.isAdult) {acc.push(`영화제목:${movie.title}`)}
  return acc
}, [])
console.log(baby) // reduce 사용                

// reduce
const numbers = [1, 2, 3, 4];

// accumulator : 누적값
// currentValue : 배열 원소 값
const sum = numbers.reduce((accumulator, currentValue) => {
    
    console.log(accumulator, currentValue);
    // 0 1
    // 1 2
    // 3 3
    // 6 4
    return accumulator + currentValue;
});

// console.log(sum); // 10

// let arr = [1, 2, 3]

// let s = arr.reduce(function (acc, num) {}, 초기값)

let arr = [1, 2, 3]

let s = arr.reduce(function (acc, num) {
  acc.push(num*2)
  return acc
}, [])
let a = [1, 2, 3]
for (let i = 0; i < a.length; i++) {
  console.log(a[i])
} 
const person = { name: '홍길동', age: 30, city: '서울' };
for (let key in person) {
  console.log(key, person[key]);
}
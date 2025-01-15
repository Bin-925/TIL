console.log("hi");
let name = '친구';
name = 'Bin'
console.log(name)
let talk = `안녕 내 이름은 ${name}이야`
console.log(talk)
// 숫자형
let age = 25; //정수
let price = 19.99; //소수
let exp = 2e5; //짓 표기법 (2 * 10^5)
console.log(exp)
// 빅인트 BigInt
let bignumber = 123456789101234456789n;
console.log(bignumber)
// 심볼 (변경 불가능한 유일한 값, 주로 Key, 충돌 없이 고유한 식별자)
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1)
//sym1과 sym2는 다르다.
//추가 연산
let count = 5;
count++; 
console.log(count); // 6

count--;
console.log(count); // 5
//복합 할당 연산자
let x = 10;
x += 5; 
console.log(x); // 15

x *= 2; 
console.log(x); // 30
//비교 연산자
//`==` : 값이 같은지 비교 (느슨한 동등성)
//`===` : 값과 자료형이 모두 같은지 비교 (엄격한 동등성)
console.log(5 == '5');  // true (값이 같음)
console.log(5 === '5'); // false (자료형이 다름)
console.log(10 > 5);    // true
console.log(10 >= 5);    // false
//논리 연산자
let isOnline = true;
let isActive = false;

console.log(isOnline && isActive); // AND, 모두 참일 때만 참
console.log(isOnline || isActive); // OR, 하나라도 참이면 참
console.log(!isOnline); // NOT, 참을 거짓으로 거짓을 참으로
//타입 연산자 - 변수의 자료형을 확인
console.log(typeof 123); // "number"
console.log(typeof 'Hello'); // "string"
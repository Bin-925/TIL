let info = 
  [
    {
        "name": "김철수",
        "age": 30,
        "city": "서울"
    },
    {
        "name": "박영희",
        "age": 25,
        "city": "부산"
    },
    {
        "name": "이민수",
        "age": 35,
        "city": "대구"
    },
    {
        "name": "최은영",
        "age": 28,
        "city": "인천"
    }
]
let names = [];
for (let i of info) {
  names.push(i.name)
}
console.log(names)
// 또 다른 예시 //
// const names = [];
// for (let i = 0; i < info.length; i++) {
//     names.push(info[i].name);
// }
// console.log(names)
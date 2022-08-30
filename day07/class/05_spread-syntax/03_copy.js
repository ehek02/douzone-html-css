let arr = [10, 20, 30];
let arrCopy = [...arr];

console.log(arr);
console.log(arrCopy);

console.log(arr === arrCopy); // 깊은 복사

arrCopy.push(50);

console.log(arr);
console.log(arrCopy);


let obj = {
    name: '이효라',
    age: 20
};
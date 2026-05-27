// Đoạn 1 => undefined
console.log(x);
var x = 5;

// Đoạn 2 => undefined
console.log(y);
let y = 10;

// Đoạn 3 => Cannot assign to "z" because it is a constant
const z = 15;
z = 20;
console.log(z);

// Đoạn 4 => (4) [1, 2, 3, 4]
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// Đoạn 5 => Trong block: 2
//           Ngoài block: 1
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
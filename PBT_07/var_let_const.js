// Đoạn 1 => undefined
try {
    console.log(x);
    var x = 5;
} catch(e) {
        console.error("-", e.message);
}

// Đoạn 2 => Sẽ in ra lỗi ReferenceError
try {
    console.log(y);
    let y = 10;
} catch(e) {
        console.error("-", e.message);
}

// Đoạn 3 => Sẽ in ra lỗi TypeError
try {
    const z = 15;
    z = 20;
    console.log(z);
} catch(e) {
        console.error("-", e.message);
}

// Đoạn 4 => (4) [1, 2, 3, 4]
try {
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);
} catch(e) {
        console.error("-", e.message);}

// Đoạn 5 => Trong block: 2 / Ngoài block: 1
try {
    let a = 1;
    {
        let a = 2;
        console.log("Trong block:", a);
    }
    console.log("Ngoài block:", a);
} catch(e) {
        console.error("-", e.message);}
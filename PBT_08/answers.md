# PHẦN A
## Câu A1
1. Function Declaration
```js 
console.log(tinhThueBaoHiem(15000000));
function tinhThueBaoHiem(luong) {
    let thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thue,
        thuc_nhan: luong - thue
    };
}
```
-  Về hoisting không bị lỗi bởi vì các khai báo biến được đưa hết lên đầu khi thực thi

2. Function Expression
```js
console.log(tinhThueBaoHiem(15000000));
const tinhThueBaoHiem = function(luong) {
    let thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```
- Biến `const tinhThueBaoHiem` được hoisting nhưng chưa khởi tạo -> Hàm chỉ được gán cho biến khi chạy đến dòng khai báo. 

3. Arrow Function -> Giống Function Expression
```js
console.log(tinhThueBaoHiem(15000000));
const tinhThueBaoHiem = (luong) => {
    let thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```
**Chỉ có Function Declaration cho phép gọi hàm trước khi khai báo. Function Expression và Arrow Function phải được khai báo trước rồi mới sử dụng.**
## Câu A2
```js
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
// Output sau 200ms: 
// var: 3 
// var: 3
// var: 3
// let: 0
// let: 1
// let: 2
```
- `var` dùng chung một biến cho toàn vòng lặp -> `let` mỗi vòng lặp dùng biến riêng

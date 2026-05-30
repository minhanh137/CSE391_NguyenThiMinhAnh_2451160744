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
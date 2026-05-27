# PHẦN A
## Câu A1
```js
// Đoạn 1
console.log(x); // KQ: undefined
var x = 5; 

// Đoạn 2
console.log(y); // KQ: báo lỗi
let y = 10; 

// Đoạn 3
const z = 15;
z = 20; // KQ: báo lỗi không được thay đổi
console.log(z); 

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // KQ: [1, 2, 3, 4]

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a); // KQ: Trong block: 2
}
console.log("Ngoài block:", a); // KQ: Ngoài block: 1
```
- Đoạn 1: Khi khai báo biến bằng `var`, js sẽ kéo khai báo lên đầu phạm vi. Khi đó trình duyệt hiểu rằng biến x đã tồn tại nhưng chưa được gán giá trị -> `console.log(x)` sẽ trả về undefined chứ không bị lỗi
- Đoạn 2: Không thể truy cập biến `y` trước khi dong `let y = 10` được thực thi
- Đoạn 3: vì `const` là hằng số, sau khi gán giá trị ban đầu là 15 thì không thể gán 1 giá trị mới cho nó
- Đoạn 4: Vì `arr` là một mảng, `const` chỉ ngăn cản việc thay đổi địa chỉ ô nhớ (VD: arr = [5, 6]) chứ không cấm việc thêm/xóa phần tử của mảng
- Đoạn 5: `let` chỉ có giá trị bên trong cặp dấu ngoặc nhọn `{}`. Biến `a = 2` bên trong hoàn toàn độc lập với biến `a = 1` ngoài. Khi ra ngoài block, lệnh `console.log` sẽ tìm đến biến a ở phạm vi ngoài cục.
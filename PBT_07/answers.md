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
- Đoạn 1: Khi khai báo biến bằng `var`, js sẽ kéo khai báo lên đầu phạm vi. Khi đó trình duyệt hiểu rằng biến x đã tồn tại nhưng chưa được gán giá trị -> `console.log(x)` sẽ trả về undefined chứ không bị lỗi **=> biến `var` được đưa lên đầu nhưng chưa có giá trị**
- Đoạn 2: Không thể truy cập biến `y` trước khi `let y = 10` được thực thi **=> Biến `let` không được truy cập trước khi khai báo**
- Đoạn 3: vì `const` là hằng số, sau khi gán giá trị ban đầu là 15 thì không thể gán 1 giá trị mới cho nó **=> Không thể thay đổi giá trị của hằng số `const`**
- Đoạn 4: Vì `arr` là một mảng, `const` chỉ ngăn cản việc thay đổi địa chỉ ô nhớ (VD: arr = [5, 6]) chứ không cấm việc thêm/xóa phần tử của mảng **=> `const` với mảng thì vẫn được thêm phần tử**
- Đoạn 5: `let` chỉ có giá trị bên trong cặp dấu ngoặc nhọn `{}`. Biến `a = 2` bên trong hoàn toàn độc lập với biến `a = 1` ngoài. Khi ra ngoài block, lệnh `console.log` sẽ tìm đến biến a ở phạm vi ngoài cục **=> Biến `let` bên trong và bên ngoài độc lập với nhau**
## Câu A2
```js
console.log(typeof null);              // "object"
console.log(typeof undefined);         // "undefined"
console.log(typeof NaN);              // "number"
console.log("5" + 3);                 // "53" (string concatenation!)
console.log("5" - 3);                 // 2 (number subtraction!) 
console.log("5" * "3");              // 15 (number multiplication!)
console.log(true + true);            // 2 (true = 1!) 
console.log([] + []);                // ""
console.log([] + {});                // "[object Object]"
console.log({} + []);                // 0 
```

* Sau khi trả lời, chạy code kiểm tra. Giải thích tại sao "5" + 3 và "5" - 3 cho kết quả khác nhau.
    - `"5" + 3`: Phép cộng với chuỗi sẽ biến thành phép nối chuỗi -> "53"
    - `"5" - 3`: Phép trừ không làm việc với chuỗi -> js tự ép "5" thành số 5.
## Câu A3
```js
console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);             // false
console.log(0 == false);             // true
console.log(0 === false);            // false
console.log("" == false);            // true
```

* Quy tắc: Từ giờ trở đi, bạn nên dùng == hay ===? Tại sao?
    - Luôn dùng `===` -> tránh ép kiểu ngầm
    - Vì `==` sẽ tự ép kiểu để so sánh, còn `===` so sánh cả giá trị + kiểu dữ liệu
## Câu A4
* 6 giá trị Falsy (coi như false):
```js 
false, 0, "", null, undefined, NaN
```
```js
if ("0") console.log("A");           // "A"
if ("") console.log("B");            // Không in B
if ([]) console.log("C");            // "C"
if ({}) console.log("D");            // "D" 
if (null) console.log("E");          // Không in E
if (0) console.log("F");             // Không in F
if (-1) console.log("G");            // "G"
if (" ") console.log("H");           // "H"
```
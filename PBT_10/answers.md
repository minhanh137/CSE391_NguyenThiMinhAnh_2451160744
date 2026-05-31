# Phần A
## Câu A1
```js
console.log("1 - Start");

setTimeout(() => console.log("2 - Timeout 0ms"), 0);

Promise.resolve().then(() => console.log("3 - Promise"));

console.log("4 - End");

setTimeout(() => console.log("5 - Timeout 100ms"), 100);

Promise.resolve().then(() => {
    console.log("6 - Promise 2");
    setTimeout(() => console.log("7 - Nested timeout"), 0);
});
```
1. Thứ tự output
    - 1 - Start
    - 4 - End
    - 3 - Promise
    - 6 - Promise 2
    - 2 - Timeout 0ms
    - 7 - Nested timeout
    - 5 - Timeout 100ms
2. Giải thích
    - JavaScript thực thi code đồng bộ trong Call Stack trước nên in `1 - Start` và `4 - End`. Sau khi Call Stack rỗng, Event Loop ưu tiên xử lý toàn bộ Microtask Queue (Promise), nên in `3 - Promise` rồi `6 - Promise 2`. Trong lúc chạy `6 - Promise 2`, callback `7 - Nested timeout` được thêm vào cuối Macrotask Queue. Tiếp theo Event Loop xử lý các Macrotask, nên `2 - Timeout 0ms` chạy trước, rồi `7 - Nested timeout`. Cuối cùng sau khoảng 100ms mới đến `5 - Timeout 100ms`.
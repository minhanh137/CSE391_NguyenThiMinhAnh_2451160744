# PHẦN A
## Câu A1
```
|Kích thước | < 768px | 768px - 991px | >= 992px |
|-----------|---------|---------------|----------|
| Số cột | 12 | 6 | 3 |
| Box layout | 4 hàng, mỗi hàng 1 box | 2 hàng, mỗi hàng 2 box | 1 hàng, 4 box |
```
```
┌────────────────────────────┐
|          Mobile            |
├────────────────────────────┤
|          [ box 1 ]         |
|          [ box 2 ]         |
|          [ box 3 ]         |
|          [ box 4 ]         |
└────────────────────────────┘
```
```
┌────────────────────────────┐
|          Tablet            |
├────────────────────────────┤
|    [ box 1 ] [ box 2 ]     |
|    [ box 3 ] [ box 4 ]     |
└────────────────────────────┘
```
```
┌───────────────────────────────────────────────┐
|                    Desktop                    |
├───────────────────────────────────────────────┤
|    [ box 1 ] [ box 2 ] [ box 3 ] [ box 4 ]    |
└───────────────────────────────────────────────┘
```
- `col-md-6`: áp dụng cho màn hình >= 768px, box chiếm 6/12 cột = 50% chiều ngang -> 2 box 1 hàng.
- Không viết `col-sm-12` vì bootstrap dùng nguyên tắc mobile-first -> `col-12` áp dụng cho tất cả kích thước nhỏ hơn md => < 768px tự động dùng `col-12`.
## Câu A2
1. Giải thích class d-none d-md-block. Element này hiển thị khi nào, ẩn khi nào?
    - `d-none` -> ẩn element ở tất cả các kích thước
    - `d-md-block` -> hiển thị dạng block khi màn hình >= 768px
2. Liệt kê 5 spacing utilities (margin/padding) và giải thích.
    - `mt-3`: margin-top = 16px / 1rem -> Tạo khoảng cách phía trên = mức 3
    - `px-4`: padding trái + phải = cấp 4 -> làm nội dung rộng ra 2 bên
    - `mb-auto`: margin-bottom = auto -> Đẩy phần tử xuống dưới cùng
    - `py-2`: padding trên + dưới = cấp 2 -> Đẩy chiều cao bên trong
    - `py-5`: margin-left (start) = cấp 5 -> Đẩy phần tử sang phải
3. Sự khác nhau giữa .container, .container-fluid, .container-md?
    - `.container`: co giãn theo từng nấc -> độ rộng tối đa cố định cho từng loại màn hình -> <567px thì bị tràn ra 100%
    - `.container-fluid`: luôn tràn viền -> Luôn luôn chiếm $100\%$ chiều rộng của màn hình ở mọi kích thước, không phân biệt điện thoại hay máy tính lớn.
    - `container-md`: tràn viền ở màn hình nhỏ, cố định ở màn hình lớn -> Nó sẽ tràn màn hình 100\% ở các kích thước nhỏ < 768px. Nhưng bắt đầu từ màn hình >= 768px, nó sẽ hoạt động giống hệt như .container (bị giới hạn max-width).
# PHẦN A
## Câu A1
1. Thẻ `<meta viewport>` chuẩn
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
    - `name="viewport`: Khai báo vùng hiển thị của trang web trên thiết bị di động
    - `width=device-width`: Chiều rộng website sẽ bằng chiều rộng thực của thiết bị
    - `initial-scale=1.0`: Mức zoom ban đầu là 100%
2. Nếu thiếu thẻ này thì iPhone hiển thị thế nào?
    - Iphone sẽ coi trang web là web desktop và thu nhỏ xíu lại
3. Mobile-First và Desktop-First khác nhau thế nào? Viết ví dụ CSS cho mỗi cách với breakpoint 768px. Tại sao Mobile-First được khuyên dùng?

    | Mobile-First | Desktop-First |
    |--------------|---------------|
    | Thiết kế cho mobile trước | Thiết kế desktop trước |
    | CSS mặc định dành cho điện thoại| CSS mặc định dành cho desktop |
    | Dùng min-width | Dùng max-width |
    | Mở rộng dần lên màn hình lớn  | Thu nhỏ dần xuống màn hình nhỏ |
    | Khuyên dùng hiện nay | Cách cũ |

    - Ví dụ cho Mobile-First:
    ```css
    .col { width: 100%; }
    @media (min-width: 768px){
        .col { width: 50% }
    }
    ```
    - Ví dụ cho Destop-First:
    ```css
    .col { width: 25%; }
    @media (max-width: 768px) {.col { width: 100%; }}
    ```
    - Mobile-First được khuyên dùng vì điện thoại tải ít CSS hơn nên nhanh hơn.
## Câu A2: Breakpoints chuẩn

| Tên | Kích thước | Thiết bị | Lưới sản phẩm hiển thị|
|-----|------------|----------|-----------------------|
| xs | < 576px | Điện thoại dọc | 1 cột |
| sm | >= 576px | Điện thoại ngang | 2 cột |
| md | >= 768px | Tablet | 2-3 cột |
| lg | >= 992px | Desktop nhỏ | 3-4 cột |
| xl | >= 1200px | Desktop lớn | 4 cột |

## Câu A3

| Chiều rộng màn hình | .container width |
|---------------------|------------------|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |
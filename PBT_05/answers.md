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

## Câu A4
1. Variables ($primary-color)
    - Cho phép lưu giá trị vào biến bằng ký hiện $ -> Dùng lại nhiều lần
    - Ví dụ:
    ```css
    $primary-color: #805ad5;
    .button {
        background: $primary-color;
        color: white;
    }
    ```
2. Nesting (viết CSS lồng nhau)
    - Cho phép viết selector bên trong selector khác -> CSS theo cấu trúc HTML -> Code gọn hơn, viết CSS nhanh hơn
    - Ví dụ: 
    ```css
    .navbar {
        background: #1a202c;
        padding: 16px;
        
        ul {
            list-style: none;
            display: flex;
            
            li {
                margin-right: 24px;
                
                a {
                    color: white;
                    text-decoration: none;
                    
                    &:hover {    // & = thẻ cha (a)
                        color: $primary;
                    }
                }
            }
        }
    }
    ```
    **Lưu ý:** Không lồng quá 3 cấp. Sâu hơn = selector quá dài, khó maintain

3. Mixins (@mixin, @include)
    - Dùng để tái sử dụng nhiều đoạn CSS
    - Ví dụ:
    ```css
    @mixin flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @mixin responsive($breakpoint) {
        @if $breakpoint == tablet {
            @media (min-width: 768px) { @content; }
        } @else if $breakpoint == desktop {
            @media (min-width: 1024px) { @content; }
        }
    }

    .hero { 
        @include flex-center;
        height: 100vh;
    }

    .grid {
        grid-template-columns: 1fr;
        
        @include responsive(tablet) {
            grid-template-columns: repeat(2, 1fr);
        }
        
        @include responsive(desktop) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    ```

4. @extend / Inheritance
    - Cho class kế thừa style từ class khác
    - Ví dụ:
    ```css
    .button {
        padding: 10px;
        border-radius: 5px;
    }

    .primary-btn {
        @extend .button;
        background: blue;
    }
    ```
# PHẦN C
## Câu C1
### Mobile
1. Navigation thay đổi thế nào? (hamburger? dropdown?)
    - Thanh menu bên trái bị ẩn
    - Xuất hiện icon hamburger menu.
    - Thanh tìm kiếm được thu gọn.
    - Một số nút chuyển thành icon.
2. Lưới content thay đổi mấy cột?
    - Video hiển thị trên 1 cột
3. Elements nào bị ẩn trên mobile?
    - Sidebar 
    - Nút chức năng phụ: tìm kiếm bằng giọng nói, thông báo,...
    - Khung chat trực tiếp
    - Video gợi ý khi xem video bị đẩy xuống dưới cùng thay vì nằm bên phải
4. Font size có thay đổi không?
    - Font nhỏ hơn desktop
### Tablet
1. Navigation thay đổi thế nào? (hamburger? dropdown?)
    - Thanh tìm kiếm dài hơn mobile
    - Menu điều hướng rõ hơn
2. Lưới content thay đổi mấy cột?
    - Hiển thị 2 cột video
3. Font size có thay đổi không?
    - Font lớn hơn mobile nhưng bé hơn desktop
###
1. Navigation thay đổi thế nào? (hamburger? dropdown?)
    - Hiển thị sidebar đầy đủ, chiếm diện tích ở bên trái
    - Menu điều hướng đầy đủ
2. Lưới content thay đổi mấy cột?
    - Hiển thị 3 cột video
3. Font size có thay đổi không?
    - Font lướn dễ đọc hơn
    - Khoảng cách giữa các phần tử rộng hơn
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
## Câu C2
1. Mobile 
```
┌────────────────────────────┐
│ HEADER (logo + phone)      │
├────────────────────────────┤
│        HERO IMAGE          │
├────────────────────────────┤
│        FOOD GRID           │
│        (1 cột)             │
│   [ món 1]                 │
│   [ món ....]              │
│   [ món 6]                 │
├────────────────────────────┤
│     BOOKING FORM           │
│  [ ngày ]                  │
│  [ giờ ]                   │
│  [ số người ]              │
│  [ ghi chú ]               │
|  [ nút đặt bàn]            |
├────────────────────────────┤
│        GOOGLE MAP          │
├────────────────────────────┤
│          FOOTER            │
└────────────────────────────┘
```

2. Tablet

```
┌──────────────────────────────────────────────────────────────────────┐
│ [LOGO]                                                     [ Phone ] │
├──────────────────────────────────────────────────────────────────────┤
│                              HERO IMAGE                              │
├──────────────────────────────────────────────────────────────────────┤
│                              FOOD GRID                               │
│ ┌───────────────────────────────┐  ┌───────────────────────────────┐ │
│ │           Món ăn 1            │  │           Món ăn 2            │ │ 
│ └───────────────────────────────┘  └───────────────────────────────┘ │
│ ┌───────────────────────────────┐  ┌───────────────────────────────┐ │
│ │           Món ăn 3            │  │           Món ăn 4            │ │
│ └───────────────────────────────┘  └───────────────────────────────┘ │
│ ┌───────────────────────────────┐  ┌───────────────────────────────┐ │
│ │           Món ăn 5            │  │           Món ăn 6            │ │
│ └───────────────────────────────┘  └───────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────┤
│                             BOOKING FORM                             │
│ ┌───────────────────────────────┐  ┌───────────────────────────────┐ │
│ │ [ Ngày ]                      │  │ [ Giờ ]                       │ │ 
│ └───────────────────────────────┘  └───────────────────────────────┘ │
│ ┌───────────────────────────────┐  ┌───────────────────────────────┐ │
│ │ [ Số người ]                  │  │ [ Ghi chú ]                   │ │
│ └───────────────────────────────┘  └───────────────────────────────┘ │
│              ┌───────────────────────────────────┐                   │
│              │          [ NÚT ĐẶT BÀN ]          │                   │
│              └───────────────────────────────────┘                   │
├──────────────────────────────────────────────────────────────────────┤
│                              GOOGLE MAP                              │
├──────────────────────────────────────────────────────────────────────┤
│       [ Cột 1: Thông tin liên hệ ]    │    [ Cột 2: Mạng xã hội ]    │ 
└──────────────────────────────────────────────────────────────────────┘
```
3. Desktop <= 1440px 
```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ HEADER (logo + phone + nav)                                                                      |
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                            HERO IMAGE                                            │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                            FOOD GRID                                             │
│  ┌───────────────────────────┐   ┌───────────────────────────┐   ┌───────────────────────────┐   │
│  │         Món ăn 1          │   │         Món ăn 2          │   │         Món ăn 3          │   │
│  └───────────────────────────┘   └───────────────────────────┘   └───────────────────────────┘   │
│  ┌───────────────────────────┐   ┌───────────────────────────┐   ┌───────────────────────────┐   │
│  │         Món ăn 4          │   │         Món ăn 5          │   │         Món ăn 6          │   │
│  └───────────────────────────┘   └───────────────────────────┘   └───────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│  [               BOOKING FORM                  ] │                                               │
│                                                  │                                               │
│  ┌────────────────────────────────────────────┐  │  ┌─────────────────────────────────────────┐  │ 
│  │ Ô nhập: [ Ngày ]        │ Ô nhập: [ Giờ ]  │  │  │                                         │  │ 
│  └────────────────────────────────────────────┘  │  │                                         │  │ 
│  ┌────────────────────────────────────────────┐  │  │               GOOGLE MAP                │  │
│  │ [ Số người ]                               │  │  │               (Nhúng dọc)               │  │
│  └────────────────────────────────────────────┘  │  │                                         │  │
│  ┌────────────────────────────────────────────┐  │  │                                         │  │
│  │ [ Ghi chú ]                                │  │  └─────────────────────────────────────────┘  │
│  └────────────────────────────────────────────┘  │  ┌─────────────────────────────────────────┐  │
│  ┌────────────────────────┐                      │  │ GIỜ MỞ CỬA: 08:00 - 22:00               │  │
│  │     [ Nút đặt bàn  ]   │                      │  └─────────────────────────────────────────┘  │
│  └────────────────────────┘                      │                                               │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│     [ Cột 1: Về chúng tôi ]     │     [ Cột 2: Thực đơn ]     │     [ Cột 3: Liên hệ nhanh ]     │ 
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
**CSS skeleton** 
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    color: #333;
}

.header{
    background: #222;
    color: white;

    padding: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav{
    display: none;
}

.hero{
    height: 300px;
    background: #ccc;
}

.food-grid{
    padding: 20px;

    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.food-card{
    background: white;
    padding: 40px;
    text-align: center;

    border-radius: 10px;
}

.booking-section{
    padding: 20px;
}

.booking-form{
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

.booking-form input,
.booking-form textarea,
.booking-form button{
    padding: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.booking-form button{
    background: #222;
    color: white;
    border: none;
}

.map{
    height: 300px;
    background: #bbb;

    margin: 20px;
    border-radius: 10px;
}

.footer{
    background: #222;
    color: white;

    padding: 20px;

    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px){
    .header{
        padding: 20px 40px;
    }

    .food-grid{
        grid-template-columns: repeat(2,1fr);
    }

    .booking-form{
        grid-template-columns: repeat(2,1fr);
    }

    .booking-form textarea{
        grid-column: span 2;
    }

    .booking-form button{
        grid-column: span 2;
    }

    .footer{
        grid-template-columns: repeat(2,1fr);
    }
}

@media (min-width: 1024px){

    .header{
        padding: 20px 60px;
    }

    .nav{
        display: flex;
        gap: 20px;
    }

    .nav a{
        color: white;
        text-decoration: none;
    }

    .food-grid{
        grid-template-columns: repeat(3,1fr);
    }

    .booking-layout{
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 30px;

        padding: 20px;
    }

    .booking-section{
        padding: 0;
    }

    .map-sidebar{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .map{
        margin: 0;
        height: 400px;
    }

    .opening-hours{
        background: white;
        padding: 20px;
        border-radius: 10px;
    }

    .footer{
        grid-template-columns: repeat(3,1fr);
    }
}
```

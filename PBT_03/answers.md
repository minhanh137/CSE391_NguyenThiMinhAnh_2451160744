# PHẦN A
## Câu A1: Các cách nhúng CSS vào HTML
### 1. Inline
* CSS được viết trực tiếp trong thuộc tính style của thẻ HTML
* Ví dụ:
    ```html
    <p style="color: red; font-size: 24px;">Hello!</p>
    ```
* Ưu điểm
    - Nhanh, đơn giản
    - Dễ thử nhanh một style cho 1 phần tử
* Nhược điểm
    - Khó bảo trì
    - Code bị rối
    - Không tái sử dụng được
* Nên dùng khi:
    - Test nhanh 1 style
    - Chỉnh riêng 1 phần tử nhỏ
    - Demo ngắn
### 2. Internal
* CSS được viết trong thẻ `<style>` đặt ở phần `<head>` của file HTML
* Ví dụ:
    ```html
    <head>
        <style>
            p {
            color: blue;
            font-size: 18px;
            }
        </style>
    </head>
    ```
* Ưu điểm:
    - Không cần file CSS riêng
    - Tái sử dụng được style cho nhiều phần tử trong cùng 1 trang
* Nhược điểm:
    - Không tái sử dụng được giữa nhiều trang
    - File HTML dài và nặng nếu CSS nhiều
* Nên dùng khi:
    - Trang đơn giản, bài tập nhỏ
    - Viết style riêng biệt chỉ dành riêng cho trang đó
### 3. External
* CSS được viết trong file .css riêng và liên kết vào HTML bằng thẻ `<link>`
* Ví dụ:
    ```html
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    ```
* Ưu điểm:
    - Dễ bảo trì và sửa đổi
    - Tái sử dụng cho nhiều trang
    - Code sạch và chuyên nghiệp
* Nhược điểm:
    - Phải quản lý thêm file CSS
    - Nếu link sai -> style không hoạt động
* Nên dùng khi:
    - Làm dự án thực tế, website thật có nhiều trang
### Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách nào "thắng"? Tại sao?
* Kết quả: Cách inline -> thắng
* Vì:
    - Trình duyệt ưu tiên code nằm càng gần phần tử càng tốt
    - Inline được viết trực tiếp vào thẻ nên có độ ưu tiên cao nhất, đè lên các style của Internal và External
    - Thứ tự ưu tiên: **Inline -> Internal -> External**
## Câu A2
```html
<div id="app">
    <header class="top-bar dark">
        <h1>ShopTLU</h1>
        <nav>
            <a href="/" class="active">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
        </nav>
    </header>
    <main>
        <article class="product">
            <h2>iPhone 16</h2>
            <p class="price">25.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>
        <article class="product featured">
            <h2>MacBook Pro</h2>
            <p class="price">45.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>
    </main>
</div>
```
1. h1 -> Chọn "ShopTLU"
2. .price -> Chọn "25.990.000đ" và "45.990.000đ"
3. #app header -> Chọn toàn bộ nội dung khối header -> ShopTLU, Home, Products, About
4. nav a:first-child -> Chọn thẻ `<a>` đầu tiên trong thẻ `<nav>` -> "Home"
5. .product.featured h2  -> Chọn thẻ `<h2>` nằm trong phần tử có 2 class **product** và **featured** -> "MacBook Pro"
6. article > p -> Chọn các thẻ `<p>` là con trực tiếp của `<article>` -> "25.990.000đ, Mô tả sản phẩm..., 45.990.000đ, Mô tả sản phẩm..."
7. a[href="/"] -> Chọn thẻ `<a>` có href="/" -> "Home"
8. .top-bar.dark h1 -> Chọn thẻ `<h1>` nằm trong phần tử có đồng thời class **top-bar** và **dark** -> "ShopTLU"
## Câu A3
1. **Trường hợp 1: content-box (mặc định)**
```css
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```
- Chiều rộng hiển thị = 400 + 20x2 + 5x2 = 450px
- Không gian chiếm trên trang = 450 + 10x2 = 470px

2. **Trường hợp 2: border-box**
```css
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```
- Chiều rộng hiển thị = 400px
- Kích thước content thực tế = 400 - 20x2 - 5x2 = 350px
- Không gian chiếm trên trang = 400 + 10x2 = 420px

3. **Trường hợp 3: Margin collapse**
```css
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
```
- Khoảng cách giữa box-a và box-b = 40px 
* **Khi 2 thẻ block nằm chồng dọc, margin của chúng không cộng dồn mà gộp làm một -> lấy giá trị lớn hơn**

4. **Nâng cao**
```css
.box-a { margin-bottom: -10px; }
.box-b { margin-top: 40px; }
```
- Khoảng cách = 40 + (-10) = 30px
* **Khi có margin âm, trình duyệt sẽ lấy Margin dương lớn nhất cộng với Margin âm nhỏ nhất**

## Câu A4
1. **Tính specificity score (a, b, c) cho mỗi rule**
    - Rule A: **p { color: black; }** -> specificity score(0, 0, 1)
    - Rule B: **.price { color: blue; }** -> specificity score(0, 1, 0)
    - Rule C: **#main-price { color: red; }** -> specificity score(1, 0, 0)
    - Rule D: **p.price { color: green; }** -> specificity score(0, , 1)
* **Thứ tự ưu tiên: ID(a) > Class(b) > Element(c)**
2. **Element sẽ có màu gì? Giải thích**
    - Element có màu đỏ
    - Rule C sử dụng bộ chọn ID(#main-price) có mức độ ưu tiên cao hơn class và tag
3. **Nếu thêm `<p class="price" id="main-price" style="color: orange;">`, element có màu gì?**
    - Element sẽ có màu cam "orange"
    - Inline Style (viết trực tiếp vào thuộc tính style của thẻ) có độ ưu tiên cao hơn mọi bộ chọn trong file CSS bên ngoài (External) hoặc thẻ style nội bộ (Internal).
4. **Nếu Rule A thêm !important, element có màu gì? Tại sao?**
    - Element có màu đen "black"
    - "!important" có quyền lực cao nhất trong CSS. Nó sẽ ghi đè lên tất cả các tính toán Specificity thông thường, bao gồm cả ID và Inline Style, để ép trình duyệt áp dụng giá trị đó.

**=> !important > inline style > ID > class > tag**

* Tài liệu tham chiếu: https://github.com/hieutachi/CCC_Frontend_2026/blob/main/tuan_2_css_core/09_css_selectors.md - ⚖️ Specificity — "Ai thắng khi xung đột?
# PHẦN B
## Bài B2
1. Chứng minh content-box vs border-box
* Đo từ DevTools
    - Hộp 1 (content-box): chiều rộng thực tế = 350px
    - Hộp 2 (border_box): chiều rộng thực tế = 300px
* Giải thích sự khác biệt
    - content-box: width = 300px chỉ tính phần content => **Tổng chiều rộng thực tế: 300 + 20x2 + 5x2 = 350px**
    - border_box: width = 300px đã tính cả phần content, padding và border. Vì vậy chiều rộng thực tế vẫn là 300px
2. Layout 3 cột nếu không dùng border-box
* Kết quả đo thực tế từ DevTools:
    - sidebar = 255px
    - content = 490px
    - ads = 255px
    - Tổng: 255 + 490 + 255 = 1000px
* Kích thước thực tế của mỗi cột:
    - sidebar và ads: 250 + 15x2 = 280px
    - content: 500 + 20x2 = 540px
    - Tổng: 280 + 540 + 280 = 1100px
* Do sử dụng content-box, tổng chiều rộng thực tế của 3 cột bao gồm cả padding là 1100px, vượt quá 1000px của container. Thuộc tính flex đã tự động thu nhỏ các cột lại để vừa khít khung chứa, dẫn đến kích thước các cột bị sai lệch so với thiết kế ban đầu
## Bài B3
1. 10 rules + specificity score
    - p { color: gray;} -> Specificity: 0,0,1
    - body p { color: green; } -> Specificity: 0,0,2
    - html body p { color: blue; } -> Specificity: 0,0,3 
    - .text { color: orange; } -> Specificity: 0,1,0 
    - p.text { color: purple; } -> Specificity: 0,1,1 
    - .text.highlight { color: brown; } -> Specificity: 0,2,0
    - p.text.highlight { color: black; } -> Specificity: 0,2,1
    - #demo { color: pink; } -> Specificity: 1,0,0 
    - p#demo { color: teal; } -> Specificity: 1,0,1 
    - p#demo.text.highlight { color: red; } -> Specificity: 1,2,1 
2. Element cuối cùng hiển thị màu gì? Tại sao?
    - Element cuối cùng màu đỏ 
    - Do rule cuối cùng p#demo.text.highlight có specificity cao nhất vì có cả ID, class, tag. 
3. Thay đổi thứ tự rules trong CSS file. Kết quả có đổi không? Giải thích.
    - Khi thay đổi thứ tự rules trong CSS thì kết quả không đổi
    - Rule nào có độ ưu tiên (specificity) cao hơn thì thắng. Nếu độ ưu tiên bằng nhau thì rule viết sau cùng sẽ thắng
# PHẦN C
## Câu C1
1. Chiều rộng thực tế
    - Sidebar = 300 + 20x2 + 1x2 = 342px
    - content = 660 + 30x2 + 1x2 = 722px
2. Layout bị vỡ vì
    - Tổng = 342 + 722 = 1064px > 960px => content không đủ chỗ nên bị đẩy xuống dòng mới
3. Cách sửa
* Cách 1
    - Dùng border-box: đã bao gồm content + padding + border
* Cách 2
    - Không dùng border-box
    - Phải giảm width content sao cho tổng vẫn bằng 960px
    - sidebar = 342px, padding+border của content = 30x2 + 1x2 = 62px => content = 960 - 342 - 62 = 556px
## Câu C2
1. "Sản phẩm A"
* Font-size
    - body { font-size: 16px; } có specificity 0,0,0,1, đặt font-size: 16px
    - .container { font-size: 14px; } có specificity 0,0,1,0 cao hơn body, nên phần tử con bên trong .container sẽ inherit giá trị 14px nếu không có rule riêng.
    - .card .title { font-size: 20px; } có specificity 0,0,2,0, vì gồm 2 class (.card, .title). Rule này target trực tiếp vào phần tử h2, nên giá trị font-size: 20px được áp dụng.
    - h2 có thể kế thừa 14px từ .container, nhưng vì .card .title áp dụng trực tiếp lên chính phần tử đó với specificity cao hơn rule kế thừa, nên: **Font-size cuối cùng = 20px**
* color
    - Rule #featured .title { color: red; } có specificity = 0,1,1,0
    - Rule .highlight { color: green !important; } -> specificity = 0,0,1,0
    - Mặc dù #featured .title có specificity cao hơn, nhưng .highlight dùng !important, nên nó thắng => **Color cuối cùng = green**
2. "Mô tả sản phẩm"
    - Rule body { color: #333; } -> có specificity 0,0,0,1, đặt màu mặc định là #333.
    - Rule .card { color: blue; } -> có specificity 0,0,1,0, cao hơn body, nên phần tử bên trong .card sẽ kế thừa màu blue
    - Rule .card p { color: inherit; } -> có thuộc tính inherit bắt buộc phần tử p phải lấy màu từ cha trực tiếp của nó là .card. => **Color cuối cùng = blue**
3. "Sản phẩm B"
* Font-size
    - body { font-size: 16px; } có specificity 0,0,0,1, đặt font-size: 16px
    - .container { font-size: 14px; } có specificity 0,0,1,0 cao hơn body, nên phần tử con bên trong .container sẽ inherit giá trị 14px nếu không có rule riêng.
    - .card .title { font-size: 20px; } có specificity 0,0,2,0, vì gồm 2 class (.card, .title). Rule này target trực tiếp vào phần tử h2, nên giá trị font-size: 20px được áp dụng.
    - h2 có thể kế thừa 14px từ .container, nhưng vì .card .title áp dụng trực tiếp lên chính phần tử đó với specificity cao hơn rule kế thừa, nên: **Font-size cuối cùng = 20px**
* Color
    - Rule body { color: #333; } -> có specificity 0,0,0,1.
    - Rule .card { color: blue; } -> có specificity 0,0,1,0, nên phần tử bên trong màu blue => **Color cuối cùng = blue**
4. "Mô tả sản phẩm B"
    - Rule body { color: #333; } -> có specificity 0,0,0,1.
    - Rule .card { color: blue; } -> có specificity 0,0,1,0, nên phần tử con màu blue.
    - Rule .card p { color: inherit; } -> có specificity 0,0,1,1, nên p lấy màu từ .card, tức là blue.
    - Rule .highlight { color: green !important; } -> có specificity 0,0,1,0.
    - Dù .card p target trực tiếp vào p, nhưng .highlight có !important, nên nó thắng => **Color cuối cùng = green**
# PHẦN D
    - Link video: https://drive.google.com/file/d/1a8csAOLzCYujjFmWFFun84ld_cOi2-CL/view?usp=sharing
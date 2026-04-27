# PHẦN A
## Câu A1
1. type="email" -> Ô nhập text, tự kiểm tra có @ -> Dùng cho đăng ký tài khoản 
2. type="password" -> Ô nhập text nhưng ẩn ký tự thành dấu chấm/sao -> Dùng cho ô nhập mật khẩu
3. type="number" -> Ô nhập số, có nút tăng/giảm -> Dùng để chọn số lượng sản phẩm
4. type="tel" -> Ô nhập số điện thoại, hiển thị bàn phím số trên di dộng -> Dùng nhập SĐT giao hàng
5. type="url" -> Ô nhập link, tự kiểm tra định dạng URL -> Dùng nhập link website
6. type="date" -> Hiển thị bảng chọn ngày tháng -> dùng để chọn ngày giao hàng
7. type="range" -> Thanh trượt để chọn giá trị trong khoảng -> Dùng để lọc khoảng giá sản phẩm
8. type="file" -> Cho phép upload file -> Dùng để up ảnh review sản phẩm
9. type="checkbox" -> Ô tick nhiều lựa chọn -> Dùng chọn nhiều sản phẩm
10. type="radio" -> chọn 1 trong nhiều lựa chọn -> Dùng chọn phương thức thanh 
## Câu A2
```html
<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống -->
<!--Không submit được do required bắt buộc nhưng value rỗng -->

<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" -->
<!--Không submit được do type="email" yêu cầu đúng format email, "abc" không có @ -->

<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->
<!--Không submit được do giá trị(15) > max(10) -->

<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->
<!--Không submit được do pattern chỉ chấp nhận đúng 10 chữ số, "abc123" chữ cả chữ cái và sai độ  -->

<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->
<!--Không submit được do độ dài ngắn hơn minlength yêu cầu  -- >
```
## Câu A3
1. Tầm quan trọng của `<label for="email">`
    - Giúp Screen Reader (trình đọc màn hình) đọc chính xác tên của ô nhập liệu khi người khiếm thị chuyển con trỏ vào đó. Nếu không có label, họ sẽ không biết ô đó yêu cầu nhập gì
    - Khi click label --> focus vào input
2. Sử dụng `<fieldset> + <legend>`
    - Dùng khi cần nhóm các thẻ input có liên quan logic với nhau giúp screen reader hiểu 
    - **VD**: Nhóm "Phương thức thanh toán" gồm các radio button: COD, banking,..
    ```html
    <fieldset>
        <legend>Phương thức thanh toán</legend>
        <input type="radio" name="pay"> COD
        <input type="radio" name="pay"> Banking
    </fieldset>
    ```
3. Sử dụng aria-label
    - Dùng aria-label khi giao diện không có `<label>` nhưng vẫn cần mô tả cho Screen Reader
    - KHông nên dùng aria-label khi đã có `<label>` vì nó gây dư thừa và ghi đè thông tin, làm screen reader đọc 2 lần
## Câu A4
1. loading="lazy" trên `<img>`
    - Cải thiện: Chỉ tải ảnh khi người dùng cuộn trang đến gần vị trí ảnh -> tăng tốc độ tải trang ban đầu, tiết kiệm băng thông
    - Khi nào không dùng? Không dùng cho các ảnh ở phần đầu trang -> vì sẽ làm chậm thời gian hiển thị nội dung chính đầu tiên
2. Vì sao nên cup cấp nhiều `<source>` trong thẻ `<video>`?
    - Vì nó giúp trình duyệt tự chọn định dạng mà nó hỗ trợ tốt nhất -> Khả năng tương thích trình duyệt
    - 3 format phổ biến: MP4, WebM, Ogg 
3. Thuộc tính alt dùng để làm gì?
    * Mô tả nội dung hình ảnh khi ảnh bị lỗi không hiển thị hoặc cho trình đọc màn hình
    * Viết alt tốt:
        - Iphone 16: alt="Điện thoại iphone 16 pro max màu Titan"
        - Ảnh trang trí: alt="" -> để trống để screen reader bỏ qua
        - Biểu đồ doanh thu: alt="Biểu đồ cột thể hiện doanh thu Q1/2026 đạt mức tăng trưởng 15% so với cùng thời kỳ năm trước"
## Câu A5
* Cách 1: Dùng `<img>` khi ảnh là một phần của nội dung văn bản hoặc mang tính chất trang trí, không cần giải thích độc lập
    - VD1: Các icon nhỏ trong menu điều hướng
    - VD2: Các banner quảng cáo
* Cách 2: Dùng `<figure>` khi ảnh cần có chú thích đi kèm. Nếu tách khỏi bài viết, nội dung vẫn có ý nghĩa
    - VD1: Ảnh sản phẩm trong trang chi tiết kèm tên và giá bán
    - VD2: Ảnh sơ đồ kiến trúc hệ thống trong một bài blog kỹ 
# PHẦN B
## Bài B1
1. HTML chỉ validate từng input riêng lẻ, không so sánh giữa 2 input bởi nó không có cơ chế so sánh giá trị giữa các thẻ input với nhau.
* Ví dụ:
    - password = Abc12345
    - confirm = Acd14567
* HTML vẫn thấy cả 2 đều hợp lệ về pattern -> pass -> Nhưng không biết 2 giá trị có giống nhau 
# PHẦN C
## Câu C1
```html
<form>
    Tên: <input type="text">
    <input type="email" placeholder="Email của bạn">
    <input type="password" placeholder="Mật khẩu">
    <input type="password" placeholder="Nhập lại mật khẩu">
    Phone: <input type="text" value="0901234567">
    <select>
        <option>Hà Nội</option>
        <option>TP.HCM</option>
    </select>
    <label>
        Tôi đồng ý điều khoản
    </label>
    <input type="submit" value="Gửi">
</form>
```
1. Lỗi 1
    - Dòng 2 - Input "Tên" không có `<label for="...">`, vi phạm accessibility
    - Sửa: `<label for="name">Tên:</label> <input type="text" id="name" name="name" required>`
    ```html
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>
    ```
2. Lỗi 2
    - Dòng 3 - Input "email" không có `<label for="...">` và `<input...id="..." name="...">`, vi phạm accessibility và best practices
    - Sửa: `<input type="email" id="email" name="email" placeholder="Nhập email" required>`
    ```html
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" placeholder="Nhập email" required><br><br>
    ```
3. Lỗi 3
    - Dòng 4, 5 - Input "password" không có `<label for="...">` và `<input...id="..." name="...">`, vi phạm accessibility và best practices
    - Sửa: `<label for="password">Mật khẩu:</label><input type="password" id="password" name="password" placeholder="Nhập mật khẩu">`
           `<label for="confirm_password">Xác nhận mật khẩu:</label><input type="password" id="confirm_password" name="confirm_password" placeholder="Xác nhận mật khẩu">`
4. Lỗi 4
    - Dòng 6 - Input "phone" không có `<label for="...">`, `<input...id="..." name="...">` và nên dùng `<input type="tel"> để tối ưu bàn phím số trên điện thoại di động, vi phạm cả 3 lỗi
    - Sửa: `<label for="phone">Số điện thoại:</label><input type="tel" id="phone" name="phone" value="0901234567" required>`
5. Lỗi 5
    - Dòng 7->10: Input "city" không có `<label for="...">`, `<select id="..." name="...">` và `<option value="...">`, vi phạm cả 3 lỗi
    - Sửa: `<label for="city">Thành phố</label><select id="city" name="city" required><option value="">Chọn thành phố</option><option value="hanoi">Hà Nội</option><option value="hcm">Hồ Chí Minh</option></select>`
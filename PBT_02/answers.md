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
    - Không nên dùng aria-label khi đã có `<label>` vì nó gây dư thừa và ghi đè thông tin, làm screen reader đọc 2 lần
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
    - Sửa:
    ```html
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>
    ```
2. Lỗi 2
    - Dòng 3 - Input "email" không có `<label for="...">` và `<input...id="..." name="...">`, vi phạm accessibility và best practices
    - Sửa:
    ```html
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" placeholder="Nhập email" required><br><br>
    ```
3. Lỗi 3
    - Dòng 4, 5 - Input "password" không có `<label for="...">` và `<input...id="..." name="...">`, vi phạm accessibility và best practices
    - Sửa:
    ```html
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" placeholder="Nhập mật khẩu"><br>
    <label for="confirm_password">Xác nhận mật khẩu:</label>
    <input type="password" id="confirm_password" name="confirm_password" placeholder="Xác nhận mật khẩu">
    ```
4. Lỗi 4
    - Dòng 6 - Input "phone" không có `<label for="...">`, `<input...id="..." name="...">` và nên dùng `<input type="tel"> để tối ưu bàn phím số trên điện thoại di động, vi phạm cả 3 lỗi
    - Sửa:
    ```html
    <label for="phone">Số điện thoại:</label>
    <input type="tel" id="phone" name="phone" value="0901234567" required>
    ```
5. Lỗi 5
    - Dòng 7->10 - Input "city" không có `<label for="...">`, `<select id="..." name="...">` và `<option value="...">`, vi phạm cả 3 lỗi
    - Sửa:
    ```html
    <label for="city">Thành phố</label>
    <select id="city" name="city" required>
        <option value="">Chọn thành phố</option>
        <option value="hanoi">Hà Nội</option>
        <option value="hcm">Hồ Chí Minh</option>
    </select>
    ```html
6. Lỗi 6
    - Dòng 11->13 - Tương tác và tích chọn ô điều khoản thiếu thẻ `<input type="checkbox"...`, vi phạm cả 3 lỗi
    - Sửa:
    ```html
    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">Tôi đồng ý với điều khoản</label>
    ```
7. Lỗi 7
    - Dòng 14 - nút "submit" thiếu một aria-label, nên sử dụng thẻ `<button type="submit"...>`, vi phạm accessibility và best practices
    - Sửa: 
    ```html
    <button type="submit" aria-label="Gửi">Gửi</button>
    ```
8. Lỗi 8
    - Toàn bộ form - thiếu thuộc tính required ở các trường bắt buộc -> cho phép gửi form rỗng, vi phạm validation
    - Sửa: Thêm required vào các input: tên, email, password,...
## Câu C2
1. Viết pattern cho CMND/CCCD và Số tài khoản 
    - CMND/CCCD có đúng 12 số: `pattern="[0-9]{12}"`
    - Số tài khoản có 10->15 số: `pattern="[0-9]{10,15}`
2. HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa? Tại sao?
* Không đủ an toàn
* Lý do:
    - Dễ dàng bị vô hiệu hóa: Người dùng mở DevTools F12 và xóa thuộc tính required/pattern trong mã HTML -> có thể gửi dữ liệu sai quy định
    - HTML5 validation chủ yếu phục vụ trải nghiệm người dùng (UX) để báo lỗi nhanh, không có khả năng bảo vệ dữ liệu thực sự trước các cuộc tấn công có ý đồ
3. Loại validation mà HTML5 không thể làm được
* Kiểm tra dữ liệu từ server
    - Vì HTML5 không thể truy cập vào cơ sở dữ liệu nên không thể kiểm tra xem số CMND/CCCD hoặc email này đã tồn tại trong hệ thống ngân hàng chưa. 
* Xử lý logic phức tạp
    - HTML5 không xử lý được logic kiểu "nếu...thì"
    - VD: Nếu phương thức xác thực là "Mã OTP qua email" -> "Số điện thoại' không bắt buộc. Nhưng nếu chọn "SMS" -> "Số điện thoại" là bắt buộc
* So sánh dữ liệu nhiều field
    - HTML không thể kiểm tra mối quan hệ giữa 2 input
    - VD: Mật khẩu và xác nhận mật khẩu phải giống nhau, ngày kết thúc phải sau ngày bắt đầu,..
4. Hai rủi ro bảo mật nếu chỉ validate trên Frontend mà không validate Backend
* Người dùng có thể vượt qua validation (Bypass Validation)
    - Người dùng không cần đi qua giao diện web, mà có thể dùng công cụ như Postman/cURL hoặc tắt JS và F12 để sửa mã nguồn nhằm ném dữ liệu sai lệch trực tiếp vào bên trong mà không bị kiểm tra
    - Hậu quả -> Kẻ xấu có thể gửi dữ liệu như: số tiền âm, mật khẩu chỉ có 1 ký tự, số tài khoản giả,.. -> Nếu Backend không kiểm tra lại -> hệ thống chấp nhận toàn bộ dữ liệu đó -> lỗi logic nghiệp vụ nghiêm trọng
* Bị điều khiển hoặc đánh cắp dữ liệu (Injection Attack)
    - Khi không kiểm tra dữ liệu ở Backend -> Server thực thi mọi thứ được gửi lên. Thay vì nhập số tài khoản, những kẻ xấu nhập vào các đoạn mã độc
    - Hậu quả 1-> Tiêm mã độc vào giao diện (XSS) -> Đánh cắp cookies/Session ID, tự động chuyển hướng người dùng sang trang web giả mạo ngân hàng, hay thay đổi nội dung để lừa đảo
    - Hậu quả 2 -> Tấn công trực tiếp vào CSDL (SQL Injection) -> đăng nhập vào tài khoản bất kỳ mà không cần mật khẩu, xuất ra toàn bộ danh sách khách hàng và số dư hoặc có thể sửa/xóa dữ liệu của ngân hàng


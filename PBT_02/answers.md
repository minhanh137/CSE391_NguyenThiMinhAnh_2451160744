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
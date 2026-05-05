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
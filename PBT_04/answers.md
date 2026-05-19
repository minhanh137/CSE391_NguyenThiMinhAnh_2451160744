# PHẦN A
## Câu A1

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| `static` | Có | Không dùng top/left | Có | Mặc định |
| `relative`| Có | Chính nó | Có | Dịch nhẹ, làm mốc cho `absolute` |
| `absolute`| Không | Cha relative gần nhất | Có | Badge, dropdown, toolip |
| `fixed`  | Không | Viewport | Không | Chat button, modal overlay. |
| `sticky` | Có (khi chưa dính) | Viewport (Khi dính) | Có | Sticky header, sideba |

### Khi nào absolute tham chiếu body? Khi nào tham chiếu parent? Khái niệm "nearest positioned ancestor"?
1. absolute tham chiếu body khi ancestor không có position hoặc position = static
2. absolute tham chiếu vào parent gần nhất có position khác static
3. "nearest positioned ancestor" là thằng cha gần nhất (từ trong ra ngoài) có position = relative/absolute/fixed/sticky
## Câu A2
1. Trường hợp 1
    ```css
    .container { display: flex; }
    .item { flex: 1; }
    ```
    - 4 items chia đều thành 1 hàng ngang, mỗi items = 25% chiều rộng
    ```
    [ 1 ][ 2 ][ 3 ][ 4 ]
    ```
2. Trường hợp 2
    ```css
    .container { display: flex; flex-wrap: wrap; }
    .item { width: 45%; margin: 2.5%; }
    ```
    -  6 items chia thành 3 hàng, mỗi hàng 2 cột. Tổng không gian chiếm dụng của mỗi item theo chiều ngang là: width (45%) + margin (2,5% x 2) = 50%
    ```
    [ 1 ][ 2 ]
    [ 3 ][ 4 ]
    [ 5 ][ 6 ]
    ```
3. Trường hợp 3
    ```css
    .container { display: flex; justify-content: space-between; align-items: center; }
    ```
    - 3 items dàn đều: item 1 dính sát lề trái, item 3 dính sát lề phải và item 2 tự động nằm giữa khoảng không gian còn lại. Cả 3 item nằm giữa theo chiều cao của container
    ```
    [ 1 ]                   [ 2 ]                   [ 3 ]
    ```
4. Trường hợp 4
    ```css
    .container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
    ```
    - 3 items chia thành 3 cột. Cột 1 và 3 có kích thước cố định là 200px. Cột 2 ở giữa tự động giãn để chiếm toàn bộ không gian còn lại khi đã trừ kích thước 2 cột và 40px khoảng cách giữa các cột
    ```
    [ 1 ]  [                    2                   ]  [ 3 ]
    ```
5. Trường hợp 
    ```css
    .container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    ```
    - 7 items chia thành 3 hàng, mỗi hàng 3 items, tạo thành lưới 3 cột bằng nhau. Hàng 1 có item 1, 2 và 3. Hàng 2 có item 4, 5 và 6. Hàng 3 chỉ có item 7 nằm ở cột 1, cột 2 và 3 bỏ trống. Khoảng cách giữa các hàng và cột là 10px
    ```
    [ 1 ][ 2 ][ 3 ]
    [ 4 ][ 5 ][ 6 ]
    [ 7 ][   ][   ]
    ```
# PHẦN C
## Câu C1
1. Navigation bar ngang (logo + menu + buttons)
    - Dùng flexbox 
    - Vì thanh điều hướng nằm trên 1 hàng ngang chỉ cần dàn đều trái - giữa - phải
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
    - Dùng grid
    - Vì cố định 3 cột đều nhau. Khi lượng ảnh tăng, grid sẽ tự động thêm hàng mới bên dưới 
3. Layout blog: main content + sidebar
    - Dùng grid
    - Vì chia 2 cột rõ ràng, cố định độ rộng của sidebar và cho phép main co giãn 
4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
    - Dùng cả grid và flexbox
    - Vì grid chia đều thành 4 cột lớn trên máy tính, còn flexbox chia theo chiều dọc cho các liên kết bên trong từng cột
5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
    - Dùng flexbox
    - Vì xếp theo chiều dọc
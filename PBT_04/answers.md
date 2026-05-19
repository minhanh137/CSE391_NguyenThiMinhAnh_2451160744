# PHẦN A
## Câu A1
### **Position - Vẫn chiếm chỗ trong flow? - Tham chiếu vị trí - Cuộn theo trang - Usecase**
1. static - Có chiếm chỗ - Không dùng top/left - Cuộn theo trang - Mặc định
2. relative - Có chiếm chỗ - Chính nó - Cuộn theo trang - Dịch nhẹ, làm mốc cho absolute
3. absolute - Không chiếm chỗ - Cha relative gần nhất - Có cuộn theo trang - Badge, dropdown, toolip
4. fixed - Không chiếm chỗ - Viewport - Không cuộn theo trang - Chat button, modal overlay
5. sticky - Ban đầu có, khi dính thì không - Bình thường, Viewport (Khi dính) - Cuộn theo trang (khi dính thì dừng lại) - Sticky header, sidebar
### Khi nào absolute tham chiếu body? Khi nào tham chiếu parent? Khái niệm "nearest positioned ancestor"?
1. absolute tham chiếu body khi ancestor không có position hoặc position = static
2. absolute tham chiếu vào parent gần nhất có position khác static
3. "nearest positioned ancestor" là thằng cha gần nhất (từ trong ra ngoài) có position = relative/absolute/fixed/sticky
## Câu A2
1. 
    ```css
    .container { display: flex; }
    .item { flex: 1; }
    ```
    - 4 items chia đều thành 1 hàng ngang, mỗi items = 25% chiều rộng
    ```
    [ 1 ][ 2 ][ 3 ][ 4 ]
    ```
2. 
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
3. 
    ```css
    .container { display: flex; justify-content: space-between; align-items: center; }
    ```
    - 3 items dàn đều theo chiều ngang và căn giữa theo chiều 
    ```
    [ 1 ]                   [ 2 ]                   [ 3 ]
    ```
4. 
    ```css
    .container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
    ```
    - 3 items chia thành 3 cột. Cột 1 và 3 có kích thước cố định là 200px. Cột 2 ở giữa tự động giãn để chiếm toàn bộ không gian còn lại khi đã trừ kích thước 2 cột và 40px khoảng cách giữa các cột
    ```
    [ 1 ]  [                    2                   ]  [ 3 ]
    ```
5. 
    ```css
    .container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    ```
    - 7 items chia thành 3 hàng, mỗi hàng 3 items, tạo thành lưới 3 cột. Hàng 1 có item 1, 2 và 3. Hàng 2 có item 4, 5 và 6. Hàng 3 chỉ có item 7 nằm ở cột 1, cột 2 và 3 bỏ trống
    ```
    [ 1 ][ 2 ][ 3 ]
    [ 4 ][ 5 ][ 6 ]
    [ 7 ][   ][   ]
    ```
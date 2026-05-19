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
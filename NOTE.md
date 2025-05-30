# 📝 What is Redis?

---

## Tổng quan

Redis (Remote Dictionary Server) là một **in-memory data store**, lưu trữ dữ liệu trong RAM, hoạt động như:

- Cơ sở dữ liệu NoSQL
- Cache để tăng tốc ứng dụng
- Message broker cho hệ thống phân tán

---

## Tại sao Redis nhanh?

| **Lý do**            | **Giải thích**                                 |
|----------------------|-----------------------------------------------|
| Lưu trữ trong RAM    | Truy xuất dữ liệu cực nhanh                   |
| Cấu trúc đơn giản    | Dùng các cấu trúc như String, Hash, List, Set |
| Tính năng gọn nhẹ    | Tập trung hiệu năng, ít phức tạp              |

---

📌 **Kết luận:** Redis lý tưởng cho các ứng dụng cần tốc độ cao như cache phiên người dùng, xếp hạng thời gian thực, hoặc hàng đợi công việc.
# 🛠️ Redis Design Methodology

## 📝 1. Tổng Quan Về Phương Pháp Thiết Kế Redis

`Phương pháp thiết kế cho Redis` tập trung vào tối ưu hóa dữ liệu để đáp ứng các truy vấn hiệu quả, khác biệt so với phương pháp SQL truyền thống. Redis yêu cầu xác định rõ nhu cầu truy vấn và các yếu tố thiết kế (design considerations) trước khi cấu trúc dữ liệu.

| **Bước**                | **Mô Tả**                     |
|--------------------------|--------------------------------|
| Xác định truy vấn        | Xác định các truy vấn cần thiết |
| Cấu trúc dữ liệu         | Tối ưu hóa dữ liệu cho truy vấn |

---

## ⚙️ 2. Quy Trình Thiết Kế và Design Considerations

### 2.1. So Sánh Với SQL

- **SQL Database Design Methodology**:

  1. Đặt dữ liệu vào bảng.

  2. Xác định cách truy vấn dữ liệu.

- **Redis Design Methodology**:

  1. Xác định các truy vấn cần trả lời.

  2. Cấu trúc dữ liệu để tối ưu hóa các truy vấn đó.

### 2.2. Design Considerations

- **Loại dữ liệu**: Redis chủ yếu lưu trữ chuỗi (strings).

- **Kích thước dữ liệu**: Đánh giá liệu cần quan tâm đến kích thước dữ liệu không.

- **Hết hạn dữ liệu**: Xác định có cần thiết lập thời gian hết hạn (expiration) không.

- **Chính sách đặt tên key**: Quy định cách đặt tên key (ví dụ: `users:45`).

- **Yêu cầu logic nghiệp vụ**: Xem xét các yêu cầu đặc thù của ứng dụng.

---

## 📌 3. Tóm Tắt

✅ Redis ưu tiên xác định truy vấn và các yếu tố thiết kế trước khi cấu trúc dữ liệu.

✅ Khác biệt với SQL, tập trung vào hiệu suất truy vấn thay vì bảng cố định.

✅ **Use Case**: Tối ưu hóa truy vấn nhanh, quản lý dữ liệu tạm thời.

---
# 🔑 Key Naming Methodology

## 📝 1. Tổng Quan Về Đặt Tên Key

`Đặt tên key trong Redis` là yếu tố quan trọng để đảm bảo tính duy nhất và dễ hiểu. Key cần được `thiết kế rõ ràng, hỗ trợ truy vấn hiệu quả, và tránh lỗi đánh máy` bằng cách sử dụng các hàm tạo key.

| **Nguyên Tắc**           | **Mô Tả**                          |
|---------------------------|------------------------------------|
| Duy nhất                  | Mỗi key phải là duy nhất          |
| Dễ hiểu                   | Khác kỹ sư khác hiểu được mục đích|
| Sử dụng hàm tạo key       | Tránh lỗi đánh máy                |
| Tách phần bằng dấu ':'    | Phân tách các thành phần key      |

---

## ⚙️ 2. Quy Tắc Đặt Tên Key

### 2.1. Tính Duy Nhất và Dễ Hiểu

- Key phải duy nhất trong Redis.

- Ví dụ: `users:45`, `items:19`.

- Mục đích: Khác kỹ sư dễ nhận biết `users:45` là thông tin người dùng có ID 45.

### 2.2. Sử Dụng Hàm Tạo Key

- **Mẹo**: Sử dụng hàm để tạo tên key, tránh lỗi thủ công.

### 2.3. Tách Thành Phần Bằng Dấu ':''

- Thực hành phổ biến: Dùng `:` để phân tách các phần của key.

- Ví dụ: `users:45`, `users:posts:901`, `items:19`, `posts:jqip25jnm`

### 2.4. Biến Thể Tối Ưu Tìm Kiếm

- **Biến thể**: Sử dụng `#` trước ID duy nhất để dễ tìm kiếm.

- Ví dụ: `users#45`, `users:posts#901`, `items#19`, `posts#jqip25jnm`

### 2.5. Ứng Dụng Thực Tế: Cache Trang

| **Key**                    | **Giá trị**         |
|----------------------------|---------------------|
| `pagecache#/about`         | `<html></html>`     |
| `pagecache#/privacy`       | `<html></html>`     |
| `pagecache#/auth/signin`   | `<html></html>`     |
| `pagecache#/auth/signup`   | `<html></html>`     |

---

## 📌 3. Tóm Tắt

✅ Key phải duy nhất và dễ hiểu cho mọi kỹ sư.

✅ Sử dụng hàm tạo key để tránh lỗi.

✅ Dùng `:` để tách phần, hoặc `#` trước ID để tối ưu tìm kiếm.

✅ **Use Case**: Quản lý dữ liệu người dùng, cache trang web.

---
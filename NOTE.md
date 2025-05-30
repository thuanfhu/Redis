# 📝 Basic Commands

---

## 🔑 1. Lệnh Cơ Bản Với Kiểu String

Redis hỗ trợ kiểu dữ liệu String với các lệnh phổ biến như **SET** và **GET**:

**SET:** Lưu giá trị vào key

```shell
SET message "Hi there!"
```
-> Redis trả về: `OK`

**GET:** Truy xuất giá trị từ key

```shell
GET message
```
-> Redis trả về: `"Hi there!"`

---

## 📌 2. Tóm Tắt Quan Trọng

✅ SET lưu giá trị vào key, trả về OK.

✅ GET truy xuất giá trị từ key.

---

### 🚀 Dùng String cho dữ liệu đơn giản như chuỗi hoặc số!
# 🗃️ Storing and Retrieving Hashes

## 📝 1. Tổng Quan Về Hash Trong Redis

Redis sử dụng Hash để lưu trữ các cặp key-value (field-value) trong một key duy nhất, phù hợp cho việc quản lý dữ liệu có cấu trúc như thông tin công ty. Các lệnh `HSET`, `HGET`, và `HGETALL` hỗ trợ lưu và truy xuất dữ liệu hiệu quả.

| **Lệnh**   | **Mô Tả**                  |
|------------|-----------------------------|
| `HSET`     | Lưu cặp field-value vào hash|
| `HGET`     | Lấy một field từ hash      |
| `HGETALL`  | Lấy tất cả field-value     |

---

## ⚙️ 2. Cú Pháp và Cách Sử Dụng

### 2.1. Lệnh `HSET` - Lưu Hash

- Cú pháp:

  ```sh
  HSET key field value [field value ...]
  ```

- Ví dụ (dựa trên ảnh):

  ```sh
  HSET company name "Company Co" age 1915
  ```

  -> Lưu hash `company` với cặp `name: "Company Co"` và `age: 1915`.

---

### 2.2. Lệnh `HGET` - Truy Xuất Một Field

- Cú pháp:

  ```sh
  HGET key field
  ```

- Ví dụ (dựa trên ảnh):

  ```sh
  HGET company name
  ```

  -> Kết quả: `"Company Co"`.

---

### 2.3. Lệnh `HGETALL` - Truy Xuất Tất Cả

- Cú pháp:

  ```sh
  HGETALL key
  ```

- Ví dụ (dựa trên ảnh):

  ```sh
  HGETALL company
  ```
  
  -> Kết quả: `[name, "Company Co", age, 1915]`.

---

## 📌 3. Tóm Tắt

✅ `HSET` tạo và lưu cặp field-value vào hash.

✅ `HGET` lấy giá trị của một field cụ thể.

✅ `HGETALL` lấy toàn bộ cặp field-value.

✅ **Use Case**: Quản lý thông tin có cấu trúc như công ty, người dùng.

---
# 🗑️ Deleting Hash Data

## 📝 1. Tổng Quan Về Xóa Dữ Liệu Hash

Redis cung cấp các lệnh `HEXISTS`, `DEL`, và `HDEL` để kiểm tra và xóa dữ liệu trong hash. `HEXISTS` kiểm tra sự tồn tại của field, `DEL` xóa toàn bộ hash, và `HDEL` xóa một cặp key-value cụ thể.

| **Lệnh**    | **Mô Tả**                  |
|-------------|-----------------------------|
| `HEXISTS`   | Kiểm tra field tồn tại     |
| `DEL`       | Xóa toàn bộ hash           |
| `HDEL`      | Xóa một cặp key-value      |

---

## ⚙️ 2. Cú Pháp và Cách Sử Dụng

### 2.1. Lệnh `HEXISTS` - Kiểm Tra Tồn Tại

- Cú pháp:

  ```sh
  HEXISTS key field
  ```

- Ví dụ (dựa trên ảnh):

  ```sh
  HEXISTS company age
  ```
  
  -> Kết quả: `1` (tồn tại), `0` (không tồn tại).

---

### 2.2. Lệnh `DEL` - Xóa Toàn Bộ Hash

- Cú pháp:

  ```sh
  DEL key
  ```

- Ví dụ (dựa trên ảnh):

  ```sh
  DEL company
  ```
  
  -> Xóa toàn bộ hash `company` (bao gồm `name` và `age`).

---

### 2.3. Lệnh `HDEL` - Xóa Một Cặp Key-Value

- Cú pháp:

  ```sh
  HDEL key field [field ...]
  ```

- Ví dụ (dựa trên ảnh):

  ```sh
  HDEL company age
  ```
  
  -> Xóa cặp `age: 1915` khỏi hash `company`.

---

## 📌 3. Tóm Tắt

✅ `HEXISTS` kiểm tra sự tồn tại của field (trả về `1` hoặc `0`).

✅ `DEL` xóa toàn bộ hash theo key.

✅ `HDEL` xóa một hoặc nhiều cặp key-value trong hash.

---
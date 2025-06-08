# 🔢 Numbers in Hashes

## 📝 1. Tổng Quan Về Số Trong Hash

Redis hỗ trợ các lệnh như `HINCRBY`, `HINCRBYFLOAT`, `HSTRLEN`, `HKEYS`, và `HVALS` để quản lý và thao tác với số trong hash. Các lệnh này cho phép tăng giá trị số, lấy độ dài chuỗi, hoặc liệt kê key và value.

| **Lệnh**         | **Mô Tả**                          |
|-------------------|------------------------------------|
| `HINCRBY`        | Tăng giá trị số nguyên             |
| `HINCRBYFLOAT`   | Tăng giá trị số thực               |
| `HSTRLEN`        | Lấy độ dài chuỗi trong field       |
| `HKEYS`          | Lấy tất cả key trong hash          |
| `HVALS`          | Lấy tất cả value trong hash        |

---

## ⚙️ 2. Cú Pháp và Cách Sử Dụng

### 2.1. Lệnh `HINCRBY` - Tăng Giá Trị Nguyên

- Cú pháp:

  ```sh
  HINCRBY key field increment
  ```

- Ví dụ:

  ```sh
  HINCRBY company age 10
  ```
  
  -> Tăng `age` từ `1915` lên `1925`. Nếu `age` không tồn tại, tạo và đặt là `10`.

- **Trick**: Truyền số âm để trừ (ví dụ: `HINCRBY company age -5` giảm `5`).

---

### 2.2. Lệnh `HINCRBYFLOAT` - Tăng Giá Trị Thực

- Cú pháp:

  ```sh
  HINCRBYFLOAT key field increment
  ```

- Ví dụ:

  ```sh
  HINCRBYFLOAT company age 1.004
  ```
  
  -> Tăng `age` từ `1915` lên `1916.004`. Nếu không tồn tại, tạo và đặt là `1.004`.

---

### 2.3. Lệnh `HSTRLEN` - Lấy Độ Dài Chuỗi

- Cú pháp:

  ```sh
  HSTRLEN key field
  ```

- Ví dụ:

  ```sh
  HSTRLEN company name
  ```
  
  -> Kết quả: `11` (độ dài của `"Company Co."`).

---

### 2.4. Lệnh `HKEYS` - Lấy Tất Cả Key

- Cú pháp:

  ```sh
  HKEYS key
  ```

- Ví dụ:

  ```sh
  HKEYS company
  ```
  
  -> Kết quả: `[name, age]`.

---

### 2.5. Lệnh `HVALS` - Lấy Tất Cả Value

- Cú pháp:

  ```sh
  HVALS key
  ```

- Ví dụ:

  ```sh
  HVALS company
  ```
  
  -> Kết quả: `["Company Co.", 1915]`.

---

## 📌 3. Tóm Tắt

✅ `HINCRBY` tăng giá trị nguyên, tạo nếu không tồn tại, hỗ trợ trừ bằng số âm.

✅ `HINCRBYFLOAT` tăng giá trị thực, tạo nếu không tồn tại.

✅ `HSTRLEN` trả về độ dài chuỗi hoặc `0` nếu không có.

✅ `HKEYS` và `HVALS` liệt kê tất cả key và value trong hash.

---
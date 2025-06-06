# 🔢 Dealing with Numbers

## 📝 1. Tổng Quan Về Xử Lý Số Trong Redis

Redis hỗ trợ `các lệnh để làm việc với số`, như tăng, giảm hoặc truy xuất giá trị số, mặc dù Redis lưu trữ số dưới dạng chuỗi (string). Ví dụ: `SET age 22` sẽ lưu giá trị `"22"`, và `GET age` sẽ trả về `"22"`. Các lệnh số sẽ tự động chuyển đổi chuỗi này thành số để xử lý, nhưng nếu key không chứa giá trị số hợp lệ, lệnh sẽ báo lỗi.

| **Lệnh**      | **Ý Nghĩa**                                |
|---------------|--------------------------------------------|
| `INCR`        | Tăng giá trị số của key lên 1              |
| `DECR`        | Giảm giá trị số của key xuống 1            |
| `INCRBY`      | Tăng giá trị số của key lên một số nguyên  |
| `DECRBY`      | Giảm giá trị số của key xuống một số nguyên|
| `INCRBYFLOAT` | Tăng giá trị số của key lên một số thập phân|

⚠️ **Lưu ý**: Sử dụng các lệnh số trên key chứa giá trị không phải số (ví dụ: chuỗi chữ) sẽ gây lỗi.

---

## ⚙️ 2. Cú Pháp và Cách Sử Dụng

### 2.1. Lệnh `INCR`

Cú pháp:
```sh
INCR key
```

-> Mô tả: Tăng giá trị số của key lên 1. Nếu key không tồn tại, Redis khởi tạo giá trị là `0` rồi tăng lên `1`.

Ví dụ:
```sh
INCR age
```

-> Giả sử `age` có giá trị `"10"`, kết quả trả về: `11` (lưu dưới dạng `"11"`).

---

### 2.2. Lệnh `DECR`

Cú pháp:
```sh
DECR key
```

-> Mô tả: Giảm giá trị số của key xuống 1. Nếu key không tồn tại, Redis khởi tạo giá trị là `0` rồi giảm xuống `-1`.

Ví dụ:
```sh
DECR age
```

-> Giả sử `age` có giá trị `"10"`, kết quả trả về: `9` (lưu dưới dạng `"9"`).

---

### 2.3. Lệnh `INCRBY`

Cú pháp:
```sh
INCRBY key increment
```

-> Mô tả: Tăng giá trị số của key lên một số nguyên `increment`. Nếu key không tồn tại, Redis khởi tạo giá trị là `0` rồi tăng.

Ví dụ:
```sh
INCRBY age 10
```

-> Giả sử `age` có giá trị `"10"`, kết quả trả về: `20` (lưu dưới dạng `"20"`).

---

### 2.4. Lệnh `DECRBY`

Cú pháp:
```sh
DECRBY key decrement
```

-> Mô tả: Giảm giá trị số của key xuống một số nguyên `decrement`. Nếu key không tồn tại, Redis khởi tạo giá trị là `0` rồi giảm.

Ví dụ:
```sh
DECRBY age 12
```

-> Giả sử `age` có giá trị `"20"`, kết quả trả về: `8` (lưu dưới dạng `"8"`).

---

### 2.5. Lệnh `INCRBYFLOAT`

Cú pháp:
```sh
INCRBYFLOAT key increment
```

-> Mô tả: Tăng giá trị số của key lên một số thập phân `increment`. Nếu key không tồn tại, Redis khởi tạo giá trị là `0` rồi tăng.

Ví dụ:
```sh
INCRBYFLOAT age 6.400145
```

-> Giả sử `age` có giá trị `"10"`, kết quả trả về: `16.400145` (lưu dưới dạng `"16.400145"`).

---

## 💡 3. Use Case Thực Tế

- Đếm số lượt truy cập:
  ```sh
  INCR visits
  ```

- Giảm số lượng hàng tồn kho:
  ```sh
  DECRBY stock 5
  ```

- Tính điểm số với số thập phân:
  ```sh
  INCRBYFLOAT score 2.5
  ```

---

## 📌 4. Tóm Tắt

✅ `INCR`: Tăng giá trị số lên 1.

✅ `DECR`: Giảm giá trị số xuống 1.

✅ `INCRBY`: Tăng giá trị số lên một số nguyên.

✅ `DECRBY`: Giảm giá trị số xuống một số nguyên.

✅ `INCRBYFLOAT`: Tăng giá trị số lên một số thập phân.

✅ **Lưu ý**: Số được lưu dưới dạng chuỗi, lỗi nếu key không chứa giá trị số hợp lệ.

✅ **Use Case**: Đếm lượt truy cập, quản lý kho, tính điểm số.

---
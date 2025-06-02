# 🔎 GET and MGET

## 📝 1. Tổng Quan Về Lệnh Lấy Giá Trị

Redis cung cấp các lệnh `GET` và `MGET` để lấy giá trị từ một hoặc nhiều key. Đây là các lệnh cơ bản để truy xuất dữ liệu trong Redis.

| **Lệnh** | **Ý Nghĩa**                        |
|----------|------------------------------------|
| `GET`    | Lấy giá trị của một key duy nhất   |
| `MGET`   | Lấy giá trị của nhiều key cùng lúc |

---

## ⚙️ 2. Cú Pháp và Cách Sử Dụng

### 2.1. Lệnh `GET`

Cú pháp:
```sh
GET key
```
-> Mô tả: Lấy giá trị của key được chỉ định. Nếu key không tồn tại, trả về `nil`.

Ví dụ:
```sh
GET color
```
-> Giả sử `color` có giá trị `red`, kết quả trả về: `red`.

---

### 2.2. Lệnh `MGET`

Cú pháp:
```sh
MGET key1 key2 ... keyN
```
-> Mô tả: Lấy giá trị của nhiều key cùng lúc. Nếu key không tồn tại, trả về `nil` cho key đó.

Ví dụ:
```sh
MGET color model
```
-> Giả sử `color` có giá trị `red` và `model` có giá trị `toyota`, kết quả trả về: `red toyota`. Nếu `model` không tồn tại, kết quả sẽ là: `red nil`.

---

## 💡 3. Use Case Thực Tế

Truy xuất thông tin người dùng:
```sh
MGET user:name user:age
```
-> Lấy tên và tuổi của người dùng cùng lúc.

Kiểm tra trạng thái với `GET`:
```sh
GET status
```
-> Kiểm tra trạng thái hệ thống (ví dụ: `online` hoặc `offline`).

---

## 📌 4. Tóm Tắt

✅ `GET`: Lấy giá trị của một key, trả về `nil` nếu key không tồn tại.

✅ `MGET`: Lấy giá trị của nhiều key cùng lúc, trả về `nil` cho key không tồn tại.

✅ **Use Case**: Truy xuất thông tin người dùng, kiểm tra trạng thái.

---
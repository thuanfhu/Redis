# 🔄 Atomic Incrementation with INCR

## 📝 1. Tổng Quan Về Tính Nguyên Tử Với INCR

Redis là `hệ thống luồng đơn (single-threaded), xử lý tất cả lệnh một cách đồng bộ, chỉ thực hiện một lệnh tại một thời điểm`. Lệnh `INCR` cung cấp cách tăng giá trị số nguyên tử (atomic increment)

Ví dụ: Khi cập nhật số lượng upvote cho bài post. So với phương pháp thủ công (GET, tăng giá trị, SET), `INCR` đảm bảo độ chính xác trong môi trường đa người dùng.

| **Phương Pháp** | **Ý Nghĩa**                          |
|-----------------|--------------------------------------|
| `INCR`          | Tăng giá trị số nguyên tử lên 1      |
| `GET + SET`     | Lấy, tăng thủ công, và đặt lại giá trị |

⚠️ **Lưu ý**: Sử dụng `GET + SET` trong trường hợp đồng thời có thể dẫn đến sai lệch dữ liệu.

---

## ⚙️ 2. Cú Pháp và Cách Sử Dụng

### 2.1. Lệnh `INCR`

Cú pháp:
```sh
INCR key
```

-> Mô tả: Tăng giá trị số của key lên 1 một cách nguyên tử. Nếu key không tồn tại, Redis khởi tạo giá trị là `0` rồi tăng lên `1`.

Ví dụ:
```sh
INCR upvotes
```

-> Giả sử `upvotes` có giá trị `"20"`, kết quả trả về: `21` (lưu dưới dạng `"21"`).

---

### 2.2. So Sánh Với `GET + SET`

Cú pháp thủ công:
```sh
GET upvotes
SET upvotes <new_value>
```

-> Mô tả: Lấy giá trị hiện tại (ví dụ: `"20"`), tăng thủ công lên `21`, rồi đặt lại. Nếu hai yêu cầu đồng thời, cả hai sẽ đọc `"20"`, tăng lên `21`, và ghi đè, dẫn đến kết quả sai (`21` thay vì `22`).

---

## 💡 3. Use Case Thực Tế

Cập nhật số upvote bài post:
  ```sh
  INCR upvotes
  ```

-> Với `upvotes` ban đầu là `"20"`, hai yêu cầu đồng thời sẽ tăng đúng lên `22` nhờ tính nguyên tử.

---

## 📌 4. Tóm Tắt

✅ `INCR`: Tăng giá trị số nguyên tử lên 1, đảm bảo chính xác trong môi trường đồng thời.

✅ `GET + SET`: Phương pháp thủ công, dễ sai lệch khi nhiều người dùng đồng thời.

✅ **Use Case**: Cập nhật số lượng upvote, đếm lượt truy cập.

✅ **Lợi ích**: Tận dụng luồng đơn và tính đồng bộ của Redis.

---
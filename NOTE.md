# 🧩 String Ranges

## 📝 1. Tổng Quan Về String Ranges

Redis cung cấp các lệnh `GETRANGE`, `SETRANGE`, và `DEL` để thao tác với chuỗi (string) bằng cách trích xuất, cập nhật, hoặc xóa key chứa chuỗi. Đây là các lệnh hữu ích khi làm việc với dữ liệu dạng chuỗi.

| **Lệnh**    | **Ý Nghĩa**                              |
|-------------|------------------------------------------|
| `GETRANGE`  | Trích xuất một đoạn chuỗi từ key         |
| `SETRANGE`  | Cập nhật một phần của chuỗi trong key    |
| `DEL`       | Xóa một hoặc nhiều key hoàn toàn         |

---

## ⚙️ 2. Cú Pháp và Cách Sử Dụng

**GETRANGE**

Cú pháp:
```sh
GETRANGE key start end
```

-> Mô tả: Trích xuất một đoạn chuỗi từ key, với `start` và `end` là chỉ số (index) dựa trên 0. Chỉ số âm tính tính từ cuối chuỗi.

Ví dụ:
```sh
GETRANGE color 0 3
```

-> Giả sử `color` có giá trị `redblue`, kết quả trả về: `redb`.

---

**SETRANGE**

Cú pháp:
```sh
SETRANGE key offset value
```

-> Mô tả: Thay thế hoặc mở rộng chuỗi tại vị trí `offset` bằng `value`. Nếu chuỗi ngắn hơn `offset`, sẽ được padding bằng ký tự null (`\x00`).

Ví dụ:
```sh
SETRANGE color 2 blue
```

-> Giả sử `color` có giá trị `red`, kết quả sẽ là `reblue` (thay thế từ vị trí 2).

---

**DEL**

Cú pháp:
```sh
DEL key1 [key2 ... keyN]
```

-> Mô tả: Xóa một hoặc nhiều key, bao gồm cả key chứa chuỗi, cùng với giá trị của chúng. Trả về số key đã xóa thành công.

Ví dụ:
```sh
DEL color
```

-> Xóa key `color` cùng giá trị của nó, trả về `1` nếu xóa thành công, `0` nếu key không tồn tại.

---

## 💡 3. Use Case Thực Tế

Trích xuất thông tin:
```sh
GETRANGE user_data 0 5
```

-> Lấy 6 ký tự đầu của dữ liệu người dùng.

Cập nhật một phần:
```sh
SETRANGE status 0 active
```

-> Cập nhật trạng thái từ vị trí 0.

Xóa dữ liệu không cần thiết:
```sh
DEL temp_key
```

-> Xóa key tạm thời khi không còn sử dụng.

---

## 📌 4. Tóm Tắt

✅ `GETRANGE`: Trích xuất đoạn chuỗi từ `start` đến `end`.

✅ `SETRANGE`: Cập nhật chuỗi tại `offset` với `value`.

✅ `DEL`: Xóa một hoặc nhiều key hoàn toàn.

✅ **Use Case**: Trích xuất thông tin, cập nhật một phần, xóa dữ liệu.

---
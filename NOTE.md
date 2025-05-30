# 📝 Variations of SET

Các tùy chọn của lệnh `SET` trong Redis. **Tra cứu chi tiết tại:** [https://redis.io/docs/latest/commands/set/](https://redis.io/docs/latest/commands/set/)

---

## 1. Các Tùy Chọn Của Lệnh SET

**GET Option**: Lấy giá trị cũ trước khi đặt mới

| Ví dụ                   | Trả về                   |
| ----------------------- | ------------------------ |
| `SET color "red"`       | `"OK"`                   |
| `SET color "blue" GET`  | `"red"` (giá trị cũ)     |

**XX Option**: Chỉ đặt giá trị nếu key đã tồn tại

| Ví dụ                           | Trả về          |
| ------------------------------- | --------------- |
| `SET notExistedKey "yellow" XX` | `null`    |
| `SET color "yellow" XX`         | `"OK"`          |

**NX Option**: Chỉ đặt giá trị nếu key không tồn tại

| Ví dụ                   | Trả về          |
| ----------------------- | --------------- |
| `SET notExistedKey "orange" NX` | `"OK"`       |
| `GET notExistedKey`     | `"orange"`      |
| `SET color "orange" NX` | `null`    |

---

## 2. Tóm Tắt Quan Trọng

✅ **GET Option**: Trả về giá trị cũ nếu có, không có giá trị cũ thì trả `null`.

✅ **XX Option**: Chỉ cập nhật key đã tồn tại, không tạo key mới.

✅ **NX**: Chỉ tạo key mới, không ghi đè key đã tồn tại.
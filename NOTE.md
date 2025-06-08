# 🗃️ Hashes in Redis

## 📝 1. Tổng Quan Về Hashes

Redis hỗ trợ kiểu dữ liệu `Hash để lưu trữ các cặp field-value trong một key duy nhất`, phù hợp để quản lý thông tin như người dùng hoặc bài đăng. Mỗi hash chứa các trường (fields) và giá trị, không hỗ trợ lồng nhau (nested).

| **Đặc Điểm**      | **Mô Tả**                       |
|--------------------|---------------------------------|
| Cấu trúc           | Key → {field1: value1, ...}    |
| Không lồng nhau    | Không hỗ trợ nested hash       |
| Ví dụ đúng         | `user#3` với `name: alex`      |

⚠️ **Lưu ý**: Nested JSON (như `{"industry": [{"primary": "materials"}, {"secondary": "concrete"}]}`) không được hỗ trợ; chỉ dùng cấu trúc phẳng.

---

## ⚙️ 2. Cú Pháp và Cách Sử Dụng

### 2.1. Tạo và Truy Xuất Hash

- Cú pháp:
  ```sh
  HSET key field value
  HGET key field
  ```

- Ví dụ đúng (`user#3` từ ảnh):
  ```sh
  HSET user#3 name alex
  HSET user#3 password alskjdjf3414
  HGET user#3 name
  ```
  -> Kết quả: `alex`

- Ví dụ đúng (`post#9` từ ảnh):
  ```sh
  HSET post#9 title "A Blog Post"
  HSET post#9 content "Everything about.."
  HGET post#9 title
  ```
  -> Kết quả: `A Blog Post`

---

## 💡 3. Use Case Thực Tế

- Quản lý thông tin người dùng:
  ```sh
  HSET user#3 name alex password alskjdjf3414
  ```

- Lưu trữ bài đăng:
  ```sh
  HSET post#9 title "A Blog Post" content "Everything about.."
  ```

---

## 📌 4. Tóm Tắt

✅ Hash lưu trữ các cặp field-value trong một key duy nhất.

✅ Không hỗ trợ cấu trúc lồng nhau; chỉ dùng cấu trúc phẳng.

✅ **Use Case**: Quản lý thông tin người dùng, bài đăng.

---
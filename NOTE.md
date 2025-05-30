# 📝 Documentation on Commands

Các lệnh Redis cho kiểu dữ liệu **String**, chia theo nhóm "Getters" (truy xuất) và "Setters" (thiết lập).

📌 **Tra cứu thêm commands tại:** [https://redis.io/docs/latest/commands/](https://redis.io/docs/latest/commands/)

---

## 1. 🔍 Getters – Lệnh Truy Xuất Giá Trị

| **Lệnh**      | **Chức năng**                                 | **Ví dụ**                        |
|---------------|-----------------------------------------------|----------------------------------|
| **MGET**      | Lấy giá trị của nhiều key cùng lúc            | `MGET key1 key2`                 |
| **GET**       | Lấy giá trị của một key                       | `GET message`                    |
| **GETDEL**    | Lấy giá trị và xóa key ngay sau đó            | `GETDEL message`                 |
| **GETEX**     | Lấy giá trị và đặt thời gian sống (TTL)       | `GETEX message EX 60`            |
| **SUBSTR**    | Lấy một đoạn chuỗi từ String                  | `SUBSTR message 0 2`             |
| **GETRANGE**  | Lấy một đoạn chuỗi từ String (tương tự SUBSTR)| `GETRANGE message 0 2`           |
| **LCS**       | Tìm chuỗi con chung dài nhất giữa hai String  | `LCS key1 key2`                  |

---

## 2. 🛠️ Setters – Lệnh Thiết Lập Giá Trị

| **Lệnh**      | **Chức năng**                                 | **Ví dụ**                        |
|---------------|-----------------------------------------------|----------------------------------|
| **GETSET**    | Lấy giá trị cũ và đặt giá trị mới             | `GETSET message "New"`           |
| **DEL**       | Xóa key và giá trị của nó                     | `DEL message`                    |
| **STRLEN**    | Lấy độ dài của String                         | `STRLEN message`                 |
| **SET**       | Đặt giá trị cho key                           | `SET message "Hi"`               |
| **SETNX**     | Đặt giá trị nếu key chưa tồn tại              | `SETNX message "Hi"`             |
| **SETEX**     | Đặt giá trị và thời gian sống (TTL)           | `SETEX message 60 "Hi"`          |
| **MSET**      | Đặt giá trị cho nhiều key cùng lúc            | `MSET key1 "A" key2 "B"`         |
| **MSETNX**    | Đặt nhiều key nếu chưa key nào tồn tại        | `MSETNX key1 "A" key2 "B"`       |
| **APPEND**    | Thêm giá trị vào cuối String                  | `APPEND message " there!"`       |
| **SETRANGE**  | Thay thế một đoạn chuỗi từ vị trí chỉ định    | `SETRANGE message 3 "llo"`       |

---

## 3. 💡 Ghi Chú Quan Trọng

**"Kind of do the same thing":**  

- `GET`, `GETDEL`, `GETEX` đều truy xuất giá trị, khác nhau ở thao tác bổ sung (xóa hoặc đặt TTL).  

- `SET`, `SETNX`, `SETEX` đều đặt giá trị, khác nhau ở điều kiện tồn tại và TTL.  

- `MSET`, `MSETNX` đều đặt nhiều key, khác nhau ở điều kiện tồn tại.  

**"Not super obvious usecases":**  

- `SUBSTR`, `GETRANGE`, `LCS`, `APPEND`, `SETRANGE` có ứng dụng đặc thù như xử lý chuỗi con hoặc nối chuỗi.

---

## 4. 📌 Tóm Tắt Quan Trọng

✅ **Getters**: Truy xuất giá trị (`GET`, `MGET`, `GETDEL`, `GETEX`).  

✅ **Setters**: Thiết lập giá trị (`SET`, `MSET`, `SETNX`, `SETEX`).  

✅ Các lệnh đặc thù: `SUBSTR`, `APPEND`, `LCS` dùng cho xử lý chuỗi.  

🚀 Tra cứu thêm tại [redis.io](https://redis.io/docs/latest/commands/)!
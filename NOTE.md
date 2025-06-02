# 🗝️ Setting Multiple Keys

## 📝 1. Tổng Quan Về Lệnh Đặt Nhiều Key

Redis cung cấp các lệnh như `MSET`, `MSETNX`, `SETNX`, và `SETEX` để đặt giá trị cho nhiều key, hoặc đặt key với điều kiện, bao gồm cả thời gian hết hạn. Các lệnh này rất hữu ích khi cần thao tác đồng thời trên nhiều key.

| **Lệnh**   | **Ý Nghĩa**                                         |
|------------|-----------------------------------------------------|
| `MSET`     | Đặt giá trị cho nhiều key cùng lúc                  |
| `MSETNX`   | Đặt nhiều key chỉ khi **tất cả key chưa tồn tại**   |
| `SETNX`    | Đặt giá trị cho một key chỉ khi **key chưa tồn tại**|
| `SETEX`    | Đặt giá trị cho một key với thời gian hết hạn (giây)|

---

## ⚙️ 2. Cú Pháp và Cách Sử Dụng

**2.1. Lệnh `MSET`**

Cú pháp:
```sh
MSET key1 value1 key2 value2 ... keyN valueN
```

-> Mô tả: Đặt giá trị cho nhiều key cùng lúc, ghi đè nếu key đã tồn tại.

Ví dụ:
```sh
MSET color red car toyota
```

-> Kết quả: Key `color` có giá trị `red`, key `car` có giá trị `toyota`.

---

**2.2. Lệnh `MSETNX`**

Cú pháp:
```sh
MSETNX key1 value1 key2 value2 ... keyN valueN
```

-> Mô tả: Chỉ đặt giá trị nếu **tất cả key đều chưa tồn tại**. Nếu một key đã tồn tại, không key nào được đặt.

Ví dụ:
```sh
MSETNX color red car toyota
```

-> Nếu `color` hoặc `car` đã tồn tại, lệnh sẽ không thực hiện.

---

**2.3. Lệnh `SETNX`**

Cú pháp:
```sh
SETNX key value
```

-> Mô tả: Tương đương `SET key value NX`, chỉ đặt nếu key chưa tồn tại.

Ví dụ:
```sh
SETNX color red
```

Tương đương:
```sh
SET color red NX
```

-> Nếu `color` đã tồn tại, lệnh sẽ không thay đổi giá trị.

---

**2.4. Lệnh `SETEX`**

Cú pháp:
```sh
SETEX key seconds value
```

-> Mô tả: Tương đương `SET key value EX seconds`, đặt giá trị cho key và tự động hết hạn sau số giây chỉ định.

Ví dụ:
```sh
SETEX color 2 red
```

Tương đương:
```sh
SET color red EX 2
```

-> Key `color` sẽ có giá trị `red` và tự động hết hạn sau 2 giây.

---

## 💡 3. Use Case Thực Tế

- Lưu trữ thông tin cấu hình:
  ```sh
  MSET app_version 1.0.0 app_name myapp
  ```

- Khóa phân phối (Distributed Lock) với `SETNX`:
  ```sh
  SETNX lock_key 1
  ```
  -> Chỉ thành công nếu `lock_key` chưa tồn tại.

- Lưu trữ tạm thời với `SETEX`:
  ```sh
  SETEX session_key 1800 session_data
  ```
  -> Lưu phiên người dùng với thời gian sống 30 phút.

---

## 📌 4. Tóm Tắt

✅ `MSET`: Đặt nhiều key cùng lúc, ghi đè nếu key đã tồn tại.

✅ `MSETNX`: Đặt nhiều key chỉ khi tất cả chưa tồn tại.

✅ `SETNX`: Đặt một key chỉ khi chưa tồn tại, tương đương `SET ... NX`.

✅ `SETEX`: Đặt một key với thời gian hết hạn, tương đương `SET ... EX`.

✅ **Use Case**: Cấu hình, khóa phân phối, lưu trữ tạm thời.

---
# ⏳ Use Case of Expiration Options

## 📝 1. Tổng Quan Về Tùy Chọn Hết Hạn (Expiration Options)

Tùy chọn hết hạn trong Redis (như `EX`, `PX`, `EXAT`, `PXAT`, `KEEPTTL`) cho phép đặt thời gian sống (TTL) cho một key, rất hữu ích trong các trường hợp cần tự động xóa dữ liệu sau một khoảng thời gian.

| **Tùy Chọn** | **Ý Nghĩa**                          | **Ví Dụ Lệnh**                        |
|--------------|--------------------------------------|---------------------------------------|
| `EX`         | Hết hạn sau số giây                  | `SET key value EX 3600`               |
| `PX`         | Hết hạn sau số mili giây             | `SET key value PX 3600000`            |
| `EXAT`       | Hết hạn tại timestamp (giây)         | `SET key value EXAT 1625097600`       |
| `PXAT`       | Hết hạn tại timestamp (mili giây)    | `SET key value PXAT 1625097600000`    |
| `KEEPTTL`    | Giữ TTL hiện tại nếu key đã có       | `SET key value KEEPTTL`               |

---

## 💡 2. Use Case Thực Tế Của Expiration Options

**2.1. Quản Lý Cache Tạm Thời**

- Mục đích: Lưu trữ dữ liệu cache với thời gian sống giới hạn.

- Ví dụ: Lưu kết quả truy vấn API trong 1 giờ.
  ```sh
  SET cache_key api_result EX 3600
  ```

- Lợi ích: Tự động xóa cache khi hết hạn, đảm bảo dữ liệu luôn cập nhật.

---

**2.2. Xử Lý Token Tạm Thời**

- Mục đích: Tạo token hết hạn cho xác thực (authentication).

- Ví dụ: Đặt token hết hạn sau 15 phút.
  ```sh
  SET user_token token_value PX 900000
  ```

- Lợi ích: Tăng bảo mật bằng cách tự động xóa token không còn hiệu lực.

---

**2.3. Quản Lý Phiên Tạm Thời (Session Management)**

- Mục đích: Lưu trữ phiên người dùng với thời gian sống nhất định.

- Ví dụ: Đặt phiên hết hạn sau 30 phút.
  ```sh
  SET session_id session_data EX 1800
  ```

- Lợi ích: Giảm tải tài nguyên bằng cách tự động dọn dẹp phiên cũ.

---

## ⚠️ 3. Lưu Ý Quan Trọng

- Không có `EX`/`PX`: Key sẽ tồn tại vô thời hạn trừ khi thủ công xóa (`DEL`).

- Kết hợp `NX`: Chỉ đặt key nếu chưa tồn tại, hữu ích cho khóa phân phối (distributed locks).
  ```sh
  SET lock_key value EX 10 NX
  ```

- Kiểm tra TTL: Dùng `TTL key` để xem thời gian sống còn lại (giây).

---

## 📌 4. Tóm Tắt

✅ **Expiration Options** (`EX`, `PX`, `EXAT`, `PXAT`, `KEEPTTL`) giúp tự động xóa key sau thời gian quy định.

✅ **Use Case**: Cache tạm thời, token, quản lý phiên.

✅ **Lưu ý**: Kết hợp `NX` cho khóa phân phối, kiểm tra TTL bằng `TTL`.

---
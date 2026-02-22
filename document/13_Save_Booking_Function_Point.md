# SAVE BOOKING FUNCTION POINT
## The Wandering Rose - Villa Booking System

---

## 1. TỔNG QUAN

| Thông tin | Chi tiết |
|-----------|----------|
| **Chức năng** | Save Booking (Lưu đặt phòng) |
| **Phương pháp** | Function Point Analysis (FPA) |
| **Tiêu chuẩn** | IFPUG CPM 4.3.1 |

---

## 2. INTERNAL LOGICAL FILE (ILF)

### 2.1 Định nghĩa
ILF là nhóm dữ liệu được duy trì bên trong hệ thống, do người dùng xác định và được lưu trữ trong database.

### 2.2 Bảng booking_customer_info

**DETs (Data Element Types): 17 fields**

| No | Field Name | Mô tả |
|----|------------|-------|
| 1 | room_id | ID phòng đặt |
| 2 | customer_identification_number | Số CMND/CCCD |
| 3 | customer_gender | Giới tính |
| 4 | customer_dob | Ngày sinh |
| 5 | customer_country | Quốc gia |
| 6 | customer_full_name | Họ tên đầy đủ |
| 7 | customer_email | Email |
| 8 | customer_phone_number | Số điện thoại |
| 9 | final_price | Tổng giá tiền |
| 10 | number_of_booked_rooms | Số phòng đặt |
| 11 | number_of_adults | Số người lớn |
| 12 | number_of_children | Số trẻ em |
| 13 | additional_request | Yêu cầu thêm |
| 14 | booking_from_date | Ngày check-in |
| 15 | booking_to_date | Ngày check-out |
| 16 | payment_status | Trạng thái thanh toán |
| 17 | booked_at | Thời gian đặt |

**RETs (Record Element Types): 1** (one logical group)

### 2.3 Complexity Matrix - ILF

| RETs | 1 - 19 DETs | 20 - 50 DETs | 51+ DETs |
|:----:|:-----------:|:------------:|:--------:|
| **1** | 🟢 **Low** | 🟢 Low | 🟡 Average |
| **2-5** | 🟢 Low | 🟡 Average | 🔴 High |
| **6+** | 🟡 Average | 🔴 High | 🔴 High |

### 2.4 Tính ILF Function Points

```
DETs = 17 fields
RETs = 1 (one logical group)

Tra bảng: RETs = 1, DETs = 17 (trong khoảng 1-19)
=> Complexity: LOW
```

**ILF Weights:**
| Complexity | Function Points |
|:----------:|:---------------:|
| Low | 7 |
| Average | 10 |
| High | 15 |

**Kết quả: ILF = 7 Function Points**

---

## 3. EXTERNAL INPUT (EI)

### 3.1 Định nghĩa
EI là quá trình xử lý dữ liệu đầu vào từ bên ngoài hệ thống, thường là thêm/sửa/xóa dữ liệu trong ILF.

### 3.2 Chức năng "Save Booking"

**Input Fields: 17 DETs**

| No | Field Name | Mô tả |
|----|------------|-------|
| 1 | room_id | ID phòng đặt |
| 2 | customer_identification_number | Số CMND/CCCD |
| 3 | customer_gender | Giới tính |
| 4 | customer_dob | Ngày sinh |
| 5 | customer_country | Quốc gia |
| 6 | customer_full_name | Họ tên đầy đủ |
| 7 | customer_email | Email |
| 8 | customer_phone_number | Số điện thoại |
| 9 | final_price | Tổng giá tiền |
| 10 | number_of_booked_rooms | Số phòng đặt |
| 11 | number_of_adults | Số người lớn |
| 12 | number_of_children | Số trẻ em |
| 13 | additional_request | Yêu cầu thêm |
| 14 | booking_from_date | Ngày check-in |
| 15 | booking_to_date | Ngày check-out |
| 16 | payment_status | Trạng thái thanh toán |

**+ Output DET: 1** (Booking confirmation message)

**=> Total DETs: 17**

**FTRs (File Types Referenced): 1 table** (booking_customer_info)

### 3.3 Complexity Matrix - EI

| FTRs | 1 - 4 DETs | 5 - 15 DETs | 16+ DETs |
|:----:|:----------:|:-----------:|:--------:|
| **0-1** | 🟢 Low | 🟢 Low | 🟡 **Average** |
| **2** | 🟢 Low | 🟡 Average | 🔴 High |
| **3+** | 🟡 Average | 🔴 High | 🔴 High |

### 3.4 Tính EI Function Points

```
DETs = 17 fields (16 input + 1 output)
FTRs = 1 table

Tra bảng: FTRs = 1, DETs = 17 (>= 16)
=> Complexity: AVERAGE
```

**EI Weights:**
| Complexity | Function Points |
|:----------:|:---------------:|
| Low | 3 |
| Average | 4 |
| High | 6 |

**Kết quả: EI = 4 Function Points**

---

## 4. TỔNG KẾT SAVE BOOKING FUNCTION POINT

| Type | Component Name | Complexity | POINT |
|:----:|----------------|:----------:|:-----:|
| **ILF** | booking_customer_info table | Low | **7** |
| **EI** | "Save booking" function | Average | **4** |
| **TOTAL** | **Total Function Points** | - | **11** |

---

## 5. CHI TIẾT TÍNH TOÁN

### 5.1 ILF Calculation

```
┌─────────────────────────────────────────────────────────┐
│                 INTERNAL LOGICAL FILE                   │
├─────────────────────────────────────────────────────────┤
│  Table: booking_customer_info                           │
│  DETs: 17 fields                                        │
│  RETs: 1 (single logical group)                         │
├─────────────────────────────────────────────────────────┤
│  Complexity Lookup:                                     │
│  RETs = 1, DETs = 17 → 1-19 range → LOW                │
├─────────────────────────────────────────────────────────┤
│  Low ILF = 7 FP                                         │
└─────────────────────────────────────────────────────────┘
```

### 5.2 EI Calculation

```
┌─────────────────────────────────────────────────────────┐
│                   EXTERNAL INPUT                        │
├─────────────────────────────────────────────────────────┤
│  Function: Save Booking                                 │
│  Input DETs: 16 fields                                  │
│  Output DETs: 1 (confirmation)                          │
│  Total DETs: 17                                         │
│  FTRs: 1 table (booking_customer_info)                  │
├─────────────────────────────────────────────────────────┤
│  Complexity Lookup:                                     │
│  FTRs = 1, DETs = 17 → 16+ range → AVERAGE             │
├─────────────────────────────────────────────────────────┤
│  Average EI = 4 FP                                      │
└─────────────────────────────────────────────────────────┘
```

### 5.3 Total Calculation

```
┌─────────────────────────────────────────────────────────┐
│              SAVE BOOKING - TOTAL UFP                   │
├─────────────────────────────────────────────────────────┤
│  ILF (booking_customer_info)  =  7 FP                   │
│  EI  (Save booking function)  =  4 FP                   │
├─────────────────────────────────────────────────────────┤
│  TOTAL FUNCTION POINTS        = 11 FP                   │
└─────────────────────────────────────────────────────────┘
```

---

## 6. COMPLEXITY MATRICES REFERENCE

### 6.1 ILF/EIF Complexity Matrix

```
┌─────────┬─────────────┬─────────────┬─────────────┐
│  RETs   │ 1-19 DETs   │ 20-50 DETs  │  51+ DETs   │
├─────────┼─────────────┼─────────────┼─────────────┤
│    1    │    LOW      │    LOW      │  AVERAGE    │
├─────────┼─────────────┼─────────────┼─────────────┤
│   2-5   │    LOW      │  AVERAGE    │    HIGH     │
├─────────┼─────────────┼─────────────┼─────────────┤
│   6+    │  AVERAGE    │    HIGH     │    HIGH     │
└─────────┴─────────────┴─────────────┴─────────────┘

Weights: Low = 7, Average = 10, High = 15 (ILF)
         Low = 5, Average = 7,  High = 10 (EIF)
```

### 6.2 EI Complexity Matrix

```
┌─────────┬─────────────┬─────────────┬─────────────┐
│  FTRs   │ 1-4 DETs    │ 5-15 DETs   │  16+ DETs   │
├─────────┼─────────────┼─────────────┼─────────────┤
│   0-1   │    LOW      │    LOW      │  AVERAGE    │
├─────────┼─────────────┼─────────────┼─────────────┤
│    2    │    LOW      │  AVERAGE    │    HIGH     │
├─────────┼─────────────┼─────────────┼─────────────┤
│   3+    │  AVERAGE    │    HIGH     │    HIGH     │
└─────────┴─────────────┴─────────────┴─────────────┘

Weights: Low = 3, Average = 4, High = 6
```

### 6.3 EO Complexity Matrix

```
┌─────────┬─────────────┬─────────────┬─────────────┐
│  FTRs   │ 1-5 DETs    │ 6-19 DETs   │  20+ DETs   │
├─────────┼─────────────┼─────────────┼─────────────┤
│   0-1   │    LOW      │    LOW      │  AVERAGE    │
├─────────┼─────────────┼─────────────┼─────────────┤
│   2-3   │    LOW      │  AVERAGE    │    HIGH     │
├─────────┼─────────────┼─────────────┼─────────────┤
│   4+    │  AVERAGE    │    HIGH     │    HIGH     │
└─────────┴─────────────┴─────────────┴─────────────┘

Weights: Low = 4, Average = 5, High = 7
```

### 6.4 EQ Complexity Matrix

```
┌─────────┬─────────────┬─────────────┬─────────────┐
│  FTRs   │ 1-5 DETs    │ 6-19 DETs   │  20+ DETs   │
├─────────┼─────────────┼─────────────┼─────────────┤
│   0-1   │    LOW      │    LOW      │  AVERAGE    │
├─────────┼─────────────┼─────────────┼─────────────┤
│   2-3   │    LOW      │  AVERAGE    │    HIGH     │
├─────────┼─────────────┼─────────────┼─────────────┤
│   4+    │  AVERAGE    │    HIGH     │    HIGH     │
└─────────┴─────────────┴─────────────┴─────────────┘

Weights: Low = 3, Average = 4, High = 6
```

---

*Phiên bản: 1.0 | Ngày tạo: 08/01/2026*
*Người lập: Nguyễn Xuân Hiếu (BA)*


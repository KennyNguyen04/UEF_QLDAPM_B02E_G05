import React from 'react';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

/**
 * Fallback image placeholder khi ảnh không load được
 */
export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800';

/**
 * Handler cho sự kiện error của img - sử dụng ảnh fallback
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.currentTarget;
  if (target.src !== FALLBACK_IMAGE) {
    target.src = FALLBACK_IMAGE;
  }
};

/**
 * Đếm số đêm cuối tuần (Thứ 7, Chủ nhật) trong khoảng thời gian đặt phòng
 * Đêm cuối tuần được tính dựa trên ngày check-in của đêm đó
 * @param checkIn Ngày nhận phòng
 * @param checkOut Ngày trả phòng
 * @returns Số đêm cuối tuần
 */
export const countWeekendNights = (checkIn: Date, checkOut: Date): number => {
  let weekendNights = 0;
  const current = new Date(checkIn);
  current.setHours(0, 0, 0, 0);
  
  const end = new Date(checkOut);
  end.setHours(0, 0, 0, 0);
  
  while (current < end) {
    const day = current.getDay();
    // 0 = Sunday, 6 = Saturday
    if (day === 0 || day === 6) {
      weekendNights++;
    }
    current.setDate(current.getDate() + 1);
  }
  return weekendNights;
};

/**
 * Tính phụ thu cuối tuần
 * @param roomPricePerNight Giá phòng mỗi đêm
 * @param weekendNights Số đêm cuối tuần
 * @param surchargeRate Tỷ lệ phụ thu (0-100)
 * @returns Số tiền phụ thu
 */
export const calculateWeekendSurcharge = (
  roomPricePerNight: number,
  weekendNights: number,
  surchargeRate: number
): number => {
  return roomPricePerNight * weekendNights * (surchargeRate / 100);
};

/**
 * Lấy tên ngày trong tuần bằng tiếng Việt
 */
export const getDayNameVi = (date: Date): string => {
  const days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  return days[date.getDay()];
};

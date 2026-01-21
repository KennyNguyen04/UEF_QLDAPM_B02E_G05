import { BookingRequest, EventBookingRequest, TourBookingRequest, ContactRequest } from '../types';

// CONTROLLER LAYER
// Naming Convention: Controller should use singular names (e.g. BookingController)

class BookingControllerService {
  /**
   * Validates and processes a room booking request.
   */
  public validateAndBook(data: BookingRequest): { success: boolean; message: string } {
    if (!data.checkIn || !data.checkOut) {
      return { success: false, message: 'Vui lòng chọn ngày đến và ngày đi.' };
    }

    const checkInDate = new Date(data.checkIn);
    const checkOutDate = new Date(data.checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Validation Logic
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return { success: false, message: 'Định dạng ngày không hợp lệ.' };
    }

    if (checkInDate < today) {
        return { success: false, message: 'Ngày nhận phòng không thể ở quá khứ.' };
    }

    if (checkOutDate <= checkInDate) {
      return { success: false, message: 'Ngày trả phòng phải sau ngày nhận phòng.' };
    }

    // Simulate DB save
    console.log("Saving Room Booking to SQL Server (Mock):", data);
    return { success: true, message: 'Kiểm tra tình trạng phòng thành công!' };
  }

  /**
   * Validates and processes an event booking request.
   * Rules: Validate required fields, email format.
   */
  public validateAndBookEvent(data: EventBookingRequest): { success: boolean; message: string } {
    // 1. Sanitize (Mock) - Trim strings
    const sanitizedData = {
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      eventType: data.eventType,
      message: data.message.trim()
    };

    // 2. Validate Required Fields
    if (!sanitizedData.fullName || !sanitizedData.email || !sanitizedData.phone || !sanitizedData.eventType) {
      return { success: false, message: 'Vui lòng điền đầy đủ các trường bắt buộc (*).' };
    }

    // 3. Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return { success: false, message: 'Địa chỉ email không hợp lệ.' };
    }

    // 4. Validate Phone (Simple check)
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(sanitizedData.phone)) {
      return { success: false, message: 'Số điện thoại không hợp lệ (10-11 số).' };
    }

    // Simulate DB save
    console.log("Saving Event Booking to SQL Server (Mock):", sanitizedData);
    return { success: true, message: 'Yêu cầu đặt lịch sự kiện của bạn đã được gửi thành công!' };
  }

   /**
   * Validates and processes a tour booking request.
   */
  public validateAndBookTour(data: TourBookingRequest): { success: boolean; message: string } {
    // 1. Sanitize
    const sanitizedData = {
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      tourName: data.tourName,
      message: data.message.trim()
    };

    // 2. Validate Required
    if (!sanitizedData.fullName || !sanitizedData.email || !sanitizedData.phone || !sanitizedData.tourName) {
      return { success: false, message: 'Vui lòng điền đầy đủ các trường bắt buộc (*).' };
    }

    // 3. Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return { success: false, message: 'Địa chỉ email không hợp lệ.' };
    }

    // 4. Validate Phone
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(sanitizedData.phone)) {
       return { success: false, message: 'Số điện thoại không hợp lệ.' };
    }

    // Simulate DB save
    console.log("Saving Tour Booking to SQL Server (Mock):", sanitizedData);
    return { success: true, message: 'Yêu cầu đặt tour của bạn đã được gửi thành công!' };
  }

  /**
   * Validates and processes contact form submission.
   */
  public validateAndContact(data: ContactRequest): { success: boolean; message: string } {
    // 1. Sanitize
    const sanitizedData = {
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      subject: data.subject.trim(),
      message: data.message.trim()
    };

    // 2. Validate Required
    if (!sanitizedData.fullName || !sanitizedData.email || !sanitizedData.phone || !sanitizedData.subject) {
      return { success: false, message: 'Vui lòng điền đầy đủ các trường bắt buộc (*).' };
    }

     // 3. Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return { success: false, message: 'Địa chỉ email không hợp lệ.' };
    }

    // 4. Validate Phone
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(sanitizedData.phone)) {
       return { success: false, message: 'Số điện thoại không hợp lệ.' };
    }

    // Simulate DB save
    console.log("Saving Contact Request to SQL Server (Mock):", sanitizedData);
    return { success: true, message: 'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất!' };
  }
}

export const bookingController = new BookingControllerService();
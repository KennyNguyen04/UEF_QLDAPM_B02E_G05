import React, { useState, useEffect } from 'react';
import { ChevronLeft, Save, AlertCircle, CheckCircle, Settings, Percent } from 'lucide-react';

interface AdminConfigViewProps {
  onBack: () => void;
}

export const AdminConfigView: React.FC<AdminConfigViewProps> = ({ onBack }) => {
  const [weekendSurchargeRate, setWeekendSurchargeRate] = useState<string>('10');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [originalRate, setOriginalRate] = useState<string>('10');

  // Fetch current rate on mount
  useEffect(() => {
    const fetchCurrentRate = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/config/weekend-surcharge');
        const data = await response.json();
        if (data.success && data.data) {
          const rate = data.data.rate.toString();
          setWeekendSurchargeRate(rate);
          setOriginalRate(rate);
        }
      } catch (error) {
        console.error('Failed to fetch surcharge rate:', error);
        setMessage({ type: 'error', text: 'Không thể tải cấu hình. Vui lòng thử lại.' });
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentRate();
  }, []);

  const handleRateChange = (value: string) => {
    // Only allow numbers and one decimal point
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value) || value === '') {
      setWeekendSurchargeRate(value);
      setMessage(null);
    }
  };

  const validateRate = (): boolean => {
    const rate = parseFloat(weekendSurchargeRate);
    if (isNaN(rate)) {
      setMessage({ type: 'error', text: 'Vui lòng nhập một số hợp lệ.' });
      return false;
    }
    if (rate < 0 || rate > 100) {
      setMessage({ type: 'error', text: 'Tỷ lệ phụ thu phải từ 0% đến 100%.' });
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateRate()) return;

    try {
      setIsSaving(true);
      setMessage(null);

      const response = await fetch('/api/config/weekend-surcharge', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ configValue: weekendSurchargeRate }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Cập nhật tỷ lệ phụ thu thành công!' });
        setOriginalRate(weekendSurchargeRate);
      } else {
        setMessage({ type: 'error', text: data.message || 'Có lỗi xảy ra. Vui lòng thử lại.' });
      }
    } catch (error) {
      console.error('Failed to save surcharge rate:', error);
      setMessage({ type: 'error', text: 'Không thể lưu cấu hình. Vui lòng thử lại.' });
    } finally {
      setIsSaving(false);
    }
  };

  const hasChanges = weekendSurchargeRate !== originalRate;

  return (
    <div className="bg-[#F9F9F9] min-h-screen pt-[140px] pb-24 font-sans text-[#4A4A4A]">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-8">
        <button 
          onClick={onBack} 
          className="flex items-center text-xs text-gray-500 hover:text-[#A68A64] mb-6"
        >
          <ChevronLeft size={14} /> TRỞ VỀ
        </button>
        
        <div className="flex items-center gap-3 mb-2">
          <Settings size={28} className="text-[#A68A64]" />
          <h1 className="text-3xl md:text-4xl font-serif text-[#C4A484]">Cấu hình hệ thống</h1>
        </div>
        <p className="text-sm text-gray-500">Quản lý các thiết lập hệ thống đặt phòng</p>
      </div>

      <div className="container mx-auto px-6 max-w-2xl">
        
        {/* Weekend Surcharge Config Card */}
        <div className="bg-white p-8 rounded-sm shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Percent size={24} className="text-[#A68A64]" />
            <h2 className="text-xl font-serif text-[#A68A64]">Phụ thu cuối tuần</h2>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">
              Tỷ lệ phụ thu áp dụng cho các đêm nghỉ rơi vào <strong>Thứ 7</strong> và <strong>Chủ nhật</strong>. 
              Đêm cuối tuần được tính dựa trên ngày check-in của đêm đó.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-sm border border-gray-100 mb-6">
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Công thức tính:</h4>
              <p className="text-sm text-gray-600">
                <code className="bg-gray-200 px-2 py-1 rounded text-xs">
                  Phụ thu = Giá phòng × Số đêm cuối tuần × Tỷ lệ %
                </code>
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="mb-6">
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">
              Tỷ lệ phụ thu (%)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={weekendSurchargeRate}
                onChange={(e) => handleRateChange(e.target.value)}
                disabled={isLoading}
                className={`w-32 border px-4 py-3 text-lg font-bold outline-none rounded-sm text-center transition-colors ${
                  isLoading 
                    ? 'bg-gray-100 text-gray-400 border-gray-200' 
                    : 'border-gray-200 focus:border-[#C4A484]'
                }`}
                placeholder="10"
              />
              <span className="text-2xl text-gray-400">%</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Nhập giá trị từ 0 đến 100. Giá trị mặc định là 10%.
            </p>
          </div>

          {/* Message */}
          {message && (
            <div className={`flex items-center gap-2 p-4 rounded-sm mb-6 ${
              message.type === 'success' 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle size={18} className="text-green-600" />
              ) : (
                <AlertCircle size={18} className="text-red-600" />
              )}
              <span className={`text-sm ${
                message.type === 'success' ? 'text-green-700' : 'text-red-700'
              }`}>
                {message.text}
              </span>
            </div>
          )}

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={isLoading || isSaving || !hasChanges}
            className={`flex items-center justify-center gap-2 w-full py-3 text-sm font-bold uppercase tracking-widest transition-colors rounded-sm ${
              isLoading || isSaving || !hasChanges
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#A68A64] text-white hover:bg-[#8e7655] shadow-lg'
            }`}
          >
            {isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Đang lưu...
              </>
            ) : (
              <>
                <Save size={16} />
                Lưu thay đổi
              </>
            )}
          </button>

          {/* Info Note */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-sm">
            <p className="text-xs text-blue-700">
              <strong>Lưu ý:</strong> Thay đổi tỷ lệ phụ thu chỉ áp dụng cho các đơn đặt phòng <strong>mới</strong>. 
              Các đơn đã xác nhận trước đó sẽ giữ nguyên tỷ lệ tại thời điểm đặt.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    phone: '',
    needs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setFormData({ name: '', company: '', position: '', phone: '', needs: '' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateInput = () => {
    // Simple regex to check for basic injection attempts (very basic frontend check)
    const dangerousPattern = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    const values = Object.values(formData);
    for (const val of values) {
        if (dangerousPattern.test(val as string)) {
            toast.error("输入包含非法字符");
            return false;
        }
    }
    if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
        toast.error("请输入有效的手机号码");
        return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateInput()) return;

    setIsSubmitting(true);

    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("提交成功，我们会尽快联系您！");
    
    // Close after delay
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-ding-600 to-ding-500 p-6 text-white flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">免费咨询</h3>
            <p className="text-ding-100 mt-1 text-sm">填写您的信息，专业顾问将在24小时内联系您</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-10">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">提交成功</h4>
              <p className="text-slate-500">感谢您的信任，我们已收到您的咨询请求。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">姓名 <span className="text-red-500">*</span></label>
                  <input
                    required
                    type="text"
                    placeholder="您的称呼"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-ding-500 focus:ring-2 focus:ring-ding-100 outline-none transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">手机号 <span className="text-red-500">*</span></label>
                  <input
                    required
                    type="tel"
                    placeholder="联系电话"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-ding-500 focus:ring-2 focus:ring-ding-100 outline-none transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">公司名称</label>
                <input
                  type="text"
                  placeholder="您所在的企业"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-ding-500 focus:ring-2 focus:ring-ding-100 outline-none transition-all"
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">职务</label>
                <input
                  type="text"
                  placeholder="您的职位"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-ding-500 focus:ring-2 focus:ring-ding-100 outline-none transition-all"
                  value={formData.position}
                  onChange={e => setFormData({...formData, position: e.target.value})}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">咨询需求</label>
                <textarea
                  rows={3}
                  placeholder="请简要描述您的业务痛点或需求..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-ding-500 focus:ring-2 focus:ring-ding-100 outline-none transition-all resize-none"
                  value={formData.needs}
                  onChange={e => setFormData({...formData, needs: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-ding-600 hover:bg-ding-700 text-white font-semibold rounded-lg shadow-lg shadow-ding-500/30 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                    <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>提交中...</span>
                    </>
                ) : '立即提交'}
              </button>
              
              <p className="text-xs text-center text-slate-400 mt-4">
                您的信息将严格保密，仅用于业务联系。
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
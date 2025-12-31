
import React from 'react';

const AccountSection: React.FC = () => {
  return (
    <div className="flex justify-between items-end">
      <div>
        <div className="text-sm font-medium mb-2">My Account</div>
        <div className="flex items-baseline">
          <span className="text-xs mr-1 opacity-90">USDT</span>
          <span className="text-4xl font-bold">13814</span>
        </div>
      </div>

      <div className="flex gap-6">
        <button className="flex flex-col items-center">
          <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-1">
             <i className="fa-solid fa-wallet text-[#3177f1] text-2xl"></i>
          </div>
          <span className="text-xs text-white/90">Deposit</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-1">
             <i className="fa-solid fa-credit-card text-[#3177f1] text-2xl"></i>
          </div>
          <span className="text-xs text-white/90">Withdrawal</span>
        </button>
      </div>
    </div>
  );
};

export default AccountSection;

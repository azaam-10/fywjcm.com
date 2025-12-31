import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="relative flex items-center mb-6">
      {/* Circular Avatar */}
      <div className="w-20 h-20 rounded-full border-2 border-white/20 overflow-hidden bg-white flex items-center justify-center">
        {/* Simplified Geometric Logo to match screenshot */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 0 L100 35 L80 95 L20 95 L0 35 Z" fill="#4CAF50" />
          <path d="M50 0 L100 35 L50 50 Z" fill="#F44336" />
          <path d="M0 35 L50 0 L50 50 Z" fill="#FFEB3B" />
          <path d="M100 35 L80 95 L50 50 Z" fill="#2196F3" />
          <path d="M20 95 L0 35 L50 50 Z" fill="#FF9800" />
          <path d="M80 95 L20 95 L50 50 Z" fill="#9C27B0" />
        </svg>
      </div>

      {/* User Info */}
      <div className="ml-4 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl font-bold">Mahmoud9639</span>
          <span className="vip-badge px-1.5 py-0.5 rounded text-[10px] font-bold italic bg-[#e9b81b]">VIP 0</span>
        </div>
        <div className="text-white/80 text-sm">
          Invitation code: 244529
        </div>
      </div>

      {/* Support Icon */}
      <div className="absolute top-0 right-0">
        <div className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full">
          <i className="fa-regular fa-comment-dots text-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
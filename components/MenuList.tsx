
import React from 'react';

const MenuList: React.FC = () => {
  const menuItems = [
    { label: 'Profile', icon: 'fa-address-card', color: '#aab2bd' },
    { label: 'Deposit records', icon: 'fa-clipboard-list', color: '#aab2bd' },
    { label: 'Withdrawal records', icon: 'fa-rectangle-list', color: '#aab2bd' },
    { label: 'Setting', icon: 'fa-gear', color: '#aab2bd' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {menuItems.map((item, idx) => (
        <div 
          key={idx} 
          className={`flex items-center justify-between px-4 py-4 ${idx !== menuItems.length - 1 ? 'border-b border-gray-50' : ''} active:bg-gray-50 cursor-pointer`}
        >
          <div className="flex items-center">
            <i className={`fa-solid ${item.icon} w-8 text-lg`} style={{ color: item.color }}></i>
            <span className="text-sm text-gray-700 ml-1">{item.label}</span>
          </div>
          <i className="fa-solid fa-chevron-right text-xs text-gray-300"></i>
        </div>
      ))}
    </div>
  );
};

export default MenuList;

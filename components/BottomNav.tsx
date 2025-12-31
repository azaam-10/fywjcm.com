
import React from 'react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { label: 'Home', icon: 'fa-house' },
    { label: 'Service', icon: 'fa-headset' },
    { label: 'Menu', icon: 'fa-bag-shopping' },
    { label: 'Record', icon: 'fa-calendar-days' },
    { label: 'Mine', icon: 'fa-user' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-100 flex justify-between px-2 py-2 bottom-nav-shadow z-50">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onTabChange(tab.label)}
          className={`flex flex-col items-center w-1/5 py-1 transition-colors ${
            activeTab === tab.label ? 'text-gray-800' : 'text-gray-400'
          }`}
        >
          <i className={`fa-solid ${tab.icon} text-xl mb-1`}></i>
          <span className="text-[10px] font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;

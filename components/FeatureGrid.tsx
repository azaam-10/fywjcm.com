
import React from 'react';

const FeatureGrid: React.FC = () => {
  const features = [
    { label: 'Teams', icon: 'fa-user-group', color: '#ff9800' },
    { label: 'Record', icon: 'fa-file-lines', color: '#4caf50' },
    { label: 'Wallet management', icon: 'fa-chart-line', color: '#f44336' },
    { label: 'Invite friends', icon: 'fa-envelope', color: '#2196f3' },
  ];

  return (
    <div className="flex justify-between px-4">
      {features.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center w-1/4">
          <div className="mb-2 h-10 flex items-center">
            <i className={`fa-solid ${item.icon} text-3xl`} style={{ color: item.color }}></i>
          </div>
          <span className="text-[11px] text-gray-600 text-center leading-tight whitespace-pre-wrap px-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;

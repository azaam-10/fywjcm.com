
import React, { useState } from 'react';
import Header from './components/Header';
import AccountSection from './components/AccountSection';
import FeatureGrid from './components/FeatureGrid';
import MenuList from './components/MenuList';
import BottomNav from './components/BottomNav';
import TaskModal from './components/TaskModal';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen max-w-[430px] mx-auto bg-[#f8f8f8] relative">
      {/* Main Content with conditional blur - reduced intensity to 2px */}
      <div className={`flex flex-col flex-1 pb-20 transition-all duration-300 ${isModalOpen ? 'blur-[2px] pointer-events-none' : ''}`}>
        {/* Top Profile & Account Section */}
        <div className="custom-gradient text-white px-5 pt-12 pb-6">
          <Header />
          <AccountSection />
        </div>

        {/* Feature Icons Row */}
        <div className="bg-white py-6 mb-4">
          <FeatureGrid />
        </div>

        {/* Menu Options */}
        <div className="px-4">
          <MenuList />
        </div>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Task Multi-step Modal */}
      {isModalOpen && <TaskModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;

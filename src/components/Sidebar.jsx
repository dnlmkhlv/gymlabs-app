import React from 'react';
import { X, Dumbbell, Utensils, Moon, Calculator, Settings, User } from 'lucide-react';
import logo from '../assets/logo/logo.svg';

const SidebarItem = ({ icon: Icon, text }) => (
  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
    <Icon className="mr-3 h-6 w-6" />
    <span>{text}</span>
  </a>
);

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`bg-white h-screen fixed md:relative w-64 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      <div className="flex items-center justify-between p-4 border-b">
      <img src={logo} alt="GymLabs Logo" className="w-[48px] sm:w-[48px] md:w-[56px] lg:w-[32px] max-w-full h-auto" />
        <button onClick={() => setIsOpen(false)} className="md:hidden">
          <X size={24} />
        </button>
      </div>
      
      <nav className="mt-8">
        <SidebarItem icon={Dumbbell} text="Workout Plans" />
        <SidebarItem icon={Utensils} text="Nutrition Plans" />
        <SidebarItem icon={Moon} text="Sleep Guidance" />
        <SidebarItem icon={Calculator} text="Strength Calculator" />
      </nav>
      
      <div className="absolute bottom-0 w-full border-t p-4">
        <SidebarItem icon={Settings} text="Settings" />
        <SidebarItem icon={User} text="Profile" />
      </div>
    </div>
  );
};

export default Sidebar;
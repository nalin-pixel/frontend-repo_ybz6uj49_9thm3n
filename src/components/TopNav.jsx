import React from 'react';
import { Home, BookOpen, Users } from 'lucide-react';

const TopNav = ({ currentView, onSelect }) => {
  const nav = [
    { key: 'public', label: 'Discover', icon: Home },
    { key: 'course', label: 'Course', icon: BookOpen },
    { key: 'dashboards', label: 'Dashboards', icon: Users },
  ];

  return (
    <div className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md flex items-center justify-center font-black text-white" style={{ backgroundColor: '#00AEEF' }}>T</div>
          <div className="leading-4">
            <div className="font-extrabold tracking-tight text-xl" style={{ color: '#00AEEF' }}>TIME</div>
            <div className="text-[10px] font-semibold" style={{ color: '#333333' }}>LANGUAGE CENTRE</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                currentView === key ? 'text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              style={currentView === key ? { backgroundColor: '#00AEEF' } : {}}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-md text-sm font-medium border hidden sm:inline-flex" style={{ borderColor: '#00AEEF', color: '#00AEEF' }}>Log in</button>
          <button className="px-4 py-2 rounded-md text-sm font-semibold text-white" style={{ backgroundColor: '#00AEEF' }}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

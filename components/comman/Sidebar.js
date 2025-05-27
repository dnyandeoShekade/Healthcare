
import React from 'react';
import { navItems } from '../data/navItems';
import * as LucideIcons from 'lucide-react';

const Sidebar = () => {
  const categories = navItems.reduce((acc, item) => {
    const category = item.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  return (
<aside className="w-56 bg-[#F6FAFF] min-h-screen py-6 px-4">
      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb- px-3">
            {category}
          </h3>
          <nav className="space-y-1">
            {items.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${
                    item.id === 'dashboard'
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <span className={`mr-3 ${item.id === 'dashboard' ? 'text-indigo-600' : 'text-gray-400'}`}>
                  {getIcon(item.icon)}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
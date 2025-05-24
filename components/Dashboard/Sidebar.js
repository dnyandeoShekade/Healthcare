// import {
//   LayoutDashboard,
//   History,
//   Calendar,
//   Clock,
//   BarChart3,
//   TestTube,
//   MessageCircle,
//   HelpCircle,
//   Settings,
// } from "lucide-react"

// const navigationItems = [
//   { icon: LayoutDashboard, label: "Dashboard", active: true },
//   { icon: History, label: "History" },
//   { icon: Calendar, label: "Calendar" },
//   { icon: Clock, label: "Appointments" },
//   { icon: BarChart3, label: "Statistics" },
//   { icon: TestTube, label: "Tests" },
//   { icon: MessageCircle, label: "Chat" },
//   { icon: HelpCircle, label: "Support" },
//   { icon: Settings, label: "Setting" },
// ]

// export function Sidebar() {
//   return (
//     <aside className="w-64  bg-white border-r  p-2">
//       <div className="mb-2">
//         <h2 className="text-sm font-medium text-gray-500   text-center">General</h2>
//       </div>

//       <nav className="space-y-2 justify-center text-center">
//         {navigationItems.map((item) => (
//           <a
//             key={item.label}
//             href="#"
//             className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
//               item.active ? " text-[#3734A9]" : "text-gray-600  font-medium"
//             }`}
//           >
//             <item.icon className="h-5 w-5 "/>
//             <span>{item.label}</span>
//           </a>
//         ))}
//       </nav>
//     </aside>
//   )
// }

import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarClock,
  BarChart2,
  MessageSquare,
  LifeBuoy,
  Settings
} from 'lucide-react';

const menuItems = {
  general: [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'history', label: 'History', icon: History },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'appointments', label: 'Appointments', icon: CalendarClock },
    { id: 'statistics', label: 'Statistics', icon: BarChart2 }
  ],
  tools: [
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'support', label: 'Support', icon: LifeBuoy }
  ]
};

export default function Sidebar() {
  // Static active item (would come from server props in a real app)
  const activeItem = 'dashboard';

  return (
  <aside className="max-w-md  bg-[#F6FAFF] border-r  p-2">      {/* Sidebar */}
      <div className=" px-10 py-6 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {/* General Section */}
          <div className="mb-6">
            <h3 className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              General
            </h3>
            {menuItems.general.map(item => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center w-full px-4 py-2.5 text-sm ${
                    isActive
                      ? ' text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`mr-3 h-[18px] w-[18px] ${
                    isActive ? 'text-blue-700' : 'text-gray-400'
                  }`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Tools Section */}
          <div className="mb-6">
            <h3 className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Tools
            </h3>
            {menuItems.tools.map(item => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center w-full px-4 py-2.5 text-sm ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`mr-3 h-[18px] w-[18px] ${
                    isActive ? 'text-blue-700' : 'text-gray-400'
                  }`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Settings */}
        <a
          href="#settings"
          className={`pt-6  mt-9 flex items-center w-full px-4 py-2.5 text-sm ${
            activeItem === 'settings'
              ? 'bg-blue-50 text-blue-700 font-medium'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Settings className={`mr-3 h-[18px] w-[18px] ${
            activeItem === 'settings' ? 'text-blue-700' : 'text-gray-400'
          }`} />
          <span>Settings</span>
        </a>
      </div>

      {/* Main Content */}
     
    </aside>
  );
}
// const navigationItems = [
//   { icon: "dashboard", label: "Dashboard", active: true },
//   { icon: "history", label: "History" },
//   { icon: "calendar", label: "Calendar" },
//   { icon: "clock", label: "Appointments" },
//   { icon: "chart", label: "Statistics" },
//   { icon: "test", label: "Tests" },
//   { icon: "chat", label: "Chat" },
//   { icon: "support", label: "Support" },
//   { icon: "settings", label: "Setting" },
// ]

// const IconComponent = ({ type }) => {
//   const icons = {
//     dashboard: (
//       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
//         />
//       </svg>
//     ),
//     history: (
//       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//     ),
//     calendar: (
//       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//         />
//       </svg>
//     ),
//     clock: (
//       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//     ),
//     chart: (
//       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//         />
//       </svg>
//     ),
//     test: (
//       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
//         />
//       </svg>
//     ),
//     chat: (
//       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//         />
//       </svg>
//     ),
//     support: (
//       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//     ),
//     settings: (
//       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//         />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//       </svg>
//     ),
//   }

//   return icons[type] || icons.dashboard
// }

// export function Sidebar() {
//   return (
//     <aside className="w-64 bg-white border-r border-gray-200 p-6">
//       <div className="mb-8">
//         <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">General</h2>
//       </div>

//       <nav className="space-y-2">
//         {navigationItems.map((item) => (
//           <a
//             key={item.label}
//             href="#"
//             className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
//               item.active ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//             }`}
//           >
//             <IconComponent type={item.icon} />
//             <span>{item.label}</span>
//           </a>
//         ))}
//       </nav>
//     </aside>
//   )
// }

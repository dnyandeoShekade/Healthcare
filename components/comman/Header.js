import React from "react";
import { Bell, Plus, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-6  bg-[#F6FAFF]">
      <div className="flex items-center">
       
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
          Health<span className="text-cyan-500">care.</span>
        </h1>
        <div className="relative ml-[200px] w-[460px] max-w-lg ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Bell className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="bg-white border border-gray-100 text-gray-900 text-sm rounded-lg block w-full pl-10 pr-10 p-2.5 focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>

     
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 p-1 bg-cyan-50 rounded-lg">
          <div className="w-8 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-white font-medium border border-cyan-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-9 h-8 rounded-xl bg-cyan-400 p-1"
            >
              <circle cx="32" cy="32" r="30" fill="#FFD93B" />
              <circle cx="22" cy="24" r="4" fill="#3E4347" />
              <circle cx="42" cy="24" r="4" fill="#3E4347" />
              <path
                d="M22 42c3 4 9 5 12 5s9-1 12-5"
                stroke="#3E4347"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <button className="flex items-center space-x-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;

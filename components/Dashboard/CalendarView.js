

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { Activity } from "lucide-react";
function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
     

      <div className="font-sans max-w-[700px] w-full mx-auto bg-[#f8f9fe] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold text-[#3733AB]">
            October 2021
          </h2>
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#5454e2]">
              &lt;
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#5454e2]">
              &gt;
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-7 text-center mb-0">
            <div className="text-sm font-semibold text-[#3733AB] py-2">Mon</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2 ">Tues</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Wed</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Thurs</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Fri</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Sat</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Sun</div>
          </div>

          <div className="grid grid-cols-7 text-center">
            <div className="h-10 flex justify-center items-center">
              <div className="w-8 h-8 flex justify-center items-center font-semibold text-base text-[#3733AB]">25</div>
            </div>
            <div className="h-10 flex justify-center items-center">
              <div className="w-8 h-8 flex justify-center items-center font-semibold text-base text-[#3733AB] ">26</div>
            </div>
            <div className="h-10 flex justify-center items-center">
              <div className="w-8 h-8 flex justify-center items-center font-semibold text-base text-[#3733AB]">27</div>
            </div>
            <div className="h-10 flex justify-center items-center">
              <div className="w-8 h-8 flex justify-center items-center font-semibold text-base text-[#3733AB]">28</div>
            </div>
            <div className="h-10 flex justify-center items-center">
              <div className="w-8 h-8 flex justify-center items-center font-semibold text-base text-[#3733AB]">29</div>
            </div>
            <div className="h-10 flex justify-center items-center">
              <div className="w-8 h-8 flex justify-center items-center font-semibold text-base text-[#3733AB]">30</div>
            </div>
            <div className="h-10 flex justify-center items-center">
              <div className="w-8 h-8 flex justify-center items-center font-semibold text-base text-[#3733AB]">31</div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mt-2">
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium text-[#5454e2]">10:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">11:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">12:00</div>
            </div>
            
            <div className="flex flex-col gap-2 items-center " >
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">08:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#3733AB] text-white">09:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">10:00</div>
            </div>
            
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">12:00</div>
              <div className="h-8 flex items-center text-gray-400 text-base">—</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">13:00 </div>
            </div>
            
            <div className="flex flex-col gap-2 items-center ">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">10:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#3733AB] text-white">11:00</div>
              <div className="h-8 flex items-center text-gray-400 text-base">—</div>
            </div>
            
            <div className="flex flex-col gap-2 items-center">
              <div className="h-8 flex items-center text-gray-400 text-base">—</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">14:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">16:00</div>
            </div>
            
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#3733AB] text-white">12:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">14:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">15:00</div>
            </div>
            
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#3733AB] text-white">09:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">10:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">11:00</div>
            </div>
          </div>
        </div>
        
      </div>
       <div className="flex gap-4 p-6 bg-gray-50  items-start">
      <div className="bg-indigo-600 text-white p-6 rounded-2xl w-64 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Dentist</h3>
            <p className="text-indigo-100 text-sm">09:00-11:00</p>
            <p className="text-indigo-100 text-sm">Dr. Cameron Williamson</p>
          </div>
          <div className="bg-white/20 p-2 rounded-lg">
            <FontAwesomeIcon icon={faTooth} className="w-5 h-5 text-white" />
     
   </div>
        </div>
      </div>

      <div className="bg-purple-100 text-gray-800 p-6 rounded-2xl w-80 ">
        <div className="flex items-start justify-between ">
          <div>
            <h3 className="text-lg font-semibold mb-1">Physiotherapy Appointment</h3>
            <p className="text-gray-600 text-sm">11:00-12:00</p>
            <p className="text-gray-600 text-sm">Dr. Kevin Djones</p>
          </div>
          <div className="bg-orange-200 p-2 rounded-lg">
            <span className="text-2xl">💪</span>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
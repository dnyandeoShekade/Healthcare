// import { Card } from "@/components/ui/card"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const calendarData = [
//   { day: 25, appointments: ["10:00", "11:00", "12:00"] },
//   { day: 26, appointments: ["08:00", "09:00", "10:00", "13:00"] },
//   { day: 27, appointments: ["12:00"] },
//   { day: 28, appointments: ["10:00", "11:00"] },
//   { day: 29, appointments: ["14:00", "15:00"] },
//   { day: 30, appointments: ["12:00", "14:00"] },
//   { day: 31, appointments: ["09:00", "10:00", "11:00"] },
// ]

// export function CalendarView() {
//   return (
//     <Card className="p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-bold text-gray-900">October 2021</h2>
//         <div className="flex items-center space-x-2">
//           <Button variant="ghost" size="icon">
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <Button variant="ghost" size="icon">
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-7 gap-1 mb-4">
//         {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
//           <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
//             {day}
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-7 gap-1 mb-6">
//         {calendarData.map((date) => (
//           <div key={date.day} className="text-center">
//             <div className="text-lg font-semibold text-gray-900 mb-1">{date.day}</div>
//             <div className="space-y-1">
//               {date.appointments.slice(0, 3).map((time, index) => (
//                 <div key={index} className="text-xs bg-blue-100 text-blue-700 px-1 py-0.5 rounded">
//                   {time}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <Card className="p-4 bg-blue-600 text-white">
//           <h3 className="font-semibold mb-1">Dentist</h3>
//           <p className="text-sm opacity-90">09:00-11:00</p>
//           <p className="text-sm opacity-90">Dr. Cameron Williamson</p>
//         </Card>

//         <Card className="p-4 bg-gray-100">
//           <h3 className="font-semibold mb-1 text-gray-900">Physiotherapy Appointment</h3>
//           <p className="text-sm text-gray-600">11:00-12:00</p>
//           <p className="text-sm text-gray-600">Dr. Kevin Djones</p>
//         </Card>
//       </div>
//     </Card>
//   )
// }
// const calendarData = [
//   { day: 25, appointments: ["10:00", "11:00", "12:00"] },
//   { day: 26, appointments: ["08:00", "09:00", "10:00", "13:00"] },
//   { day: 27, appointments: ["12:00"] },
//   { day: 28, appointments: ["10:00", "11:00"] },
//   { day: 29, appointments: ["14:00", "15:00"] },
//   { day: 30, appointments: ["12:00", "14:00"] },
//   { day: 31, appointments: ["09:00", "10:00", "11:00"] },
// ]

// export function CalendarView() {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-bold text-gray-900">October 2021</h2>
//         <div className="flex items-center space-x-2">
//           <button className="p-1 hover:bg-gray-100 rounded">
//             <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button className="p-1 hover:bg-gray-100 rounded">
//             <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-7 gap-1 mb-4">
//         {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
//           <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
//             {day}
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-7 gap-1 mb-6">
//         {calendarData.map((date) => (
//           <div key={date.day} className="text-center">
//             <div className="text-lg font-semibold text-gray-900 mb-1">{date.day}</div>
//             <div className="space-y-1">
//               {date.appointments.slice(0, 3).map((time, index) => (
//                 <div key={index} className="text-xs bg-blue-100 text-blue-700 px-1 py-0.5 rounded">
//                   {time}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-blue-600 text-white rounded-lg shadow-sm border border-gray-200 p-4">
//           <h3 className="font-semibold mb-1">Dentist</h3>
//           <p className="text-sm opacity-90">09:00-11:00</p>
//           <p className="text-sm opacity-90">Dr. Cameron Williamson</p>
//         </div>

//         <div className="bg-gray-100 rounded-lg shadow-sm border border-gray-200 p-4">
//           <h3 className="font-semibold mb-1 text-gray-900">Physiotherapy Appointment</h3>
//           <p className="text-sm text-gray-600">11:00-12:00</p>
//           <p className="text-sm text-gray-600">Dr. Kevin Djones</p>
//         </div>
//       </div>
//     </div>
//   )
// }
// import React from 'react';

// export default function CalendarView() {
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
//       <div style={{ fontSize: '1.5em', marginBottom: '15px', fontWeight: 'bold' }}>October 2021</div>
      
//       {/* Weekday headers */}
//       <div style={{ 
//         display: 'grid',
//         gridTemplateColumns: 'repeat(7, 1fr)',
//         textAlign: 'center',
//         marginBottom: '10px',
//         fontWeight: 'bold'
//       }}>
//         <div>Mon</div>
//         <div>Tue/s</div>
//         <div>Wed</div>
//         <div>Thurs</div>
//         <div>Fri</div>
//         <div>Sat</div>
//         <div>Sun</div>
//       </div>
      
//       {/* Dates */}
//       <div style={{ 
//         display: 'grid',
//         gridTemplateColumns: 'repeat(7, 1fr)',
//         textAlign: 'center',
//         marginBottom: '20px'
//       }}>
//         <div>25</div>
//         <div>26</div>
//         <div>27</div>
//         <div>28</div>
//         <div>29</div>
//         <div>30</div>
//         <div>31</div>
//       </div>
      
//       {/* Time slots */}
//       <div style={{ 
//         display: 'grid',
//         gridTemplateColumns: 'repeat(7, 1fr)',
//         textAlign: 'center',
//         gap: '10px 0'
//       }}>
//         {/* Row 1 */}
//         <div style={{ padding: '5px' }}>10:00</div>
//         <div style={{ padding: '5px' }}>08:00</div>
//         <div style={{ padding: '5px' }}>12:00</div>
//         <div style={{ padding: '5px' }}>10:00</div>
//         <div style={{ padding: '5px', color: '#999' }}>—</div>
//         <div style={{ padding: '5px' }}>18:00</div>
//         <div style={{ padding: '5px' }}>09:00</div>
        
//         {/* Row 2 */}
//         <div style={{ padding: '5px' }}>11:00</div>
//         <div style={{ padding: '5px' }}>09:00</div>
//         <div style={{ padding: '5px', color: '#999' }}>—</div>
//         <div style={{ padding: '5px' }}>15:00</div>
//         <div style={{ padding: '5px' }}>14:00</div>
//         <div style={{ padding: '5px' }}>14:00</div>
//         <div style={{ padding: '5px' }}>10:00</div>
        
//         {/* Row 3 */}
//         <div style={{ padding: '5px' }}>12:00</div>
//         <div style={{ padding: '5px' }}>10:00</div>
//         <div style={{ padding: '5px' }}>13:00</div>
//         <div style={{ padding: '5px', color: '#999' }}>—</div>
//         <div style={{ padding: '5px' }}>16:00</div>
//         <div style={{ padding: '5px' }}>15:00</div>
//         <div style={{ padding: '5px' }}>11:00</div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Bluetooth as Tooth, Stethoscope } from 'lucide-react';

function App() {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center  gap-4">
      {/* Appointment Cards */}
      {/* <div className="flex gap-4 w-full max-w-[700px]">
        <div className="flex items-center gap-3 bg-[#5454e2] text-white p-4 rounded-xl flex-1">
          <Tooth className="w-6 h-6" />
          <div>
            <div className="text-sm font-medium">Dentist</div>
            <div className="text-xs opacity-90">09:00-11:00</div>
            <div className="text-xs opacity-90">Dr. Cameron Williamson</div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-[#ebeeff] text-[#3d3d5c] p-4 rounded-xl flex-1">
          <Stethoscope className="w-6 h-6" />
          <div>
            <div className="text-sm font-medium">Physiotherapy Appointment</div>
            <div className="text-xs opacity-75">11:00-12:00</div>
            <div className="text-xs opacity-75">Dr. Kevin Djones</div>
          </div>
        </div>
      </div> */}

      {/* Calendar Container */}
      <div className="font-sans max-w-[700px] w-full mx-auto bg-[#f8f9fe] rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
        {/* Calendar Header */}
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

        {/* Calendar Grid */}
        <div className="flex flex-col">
          {/* Days Header */}
          <div className="grid grid-cols-7 text-center mb-0">
            <div className="text-sm font-semibold text-[#3733AB] py-2">Mon</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2 ">Tues</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Wed</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Thurs</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Fri</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Sat</div>
            <div className="text-sm font-semibold text-[#3733AB] py-2">Sun</div>
          </div>

          {/* Dates */}
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

          {/* Time Slots */}
          <div className="grid grid-cols-7 gap-2 mt-2">
            {/* Monday */}
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium text-[#5454e2]">10:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">11:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">12:00</div>
            </div>
            
            {/* Tuesday */}
            <div className="flex flex-col gap-2 items-center " >
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">08:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#3733AB] text-white">09:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">10:00</div>
            </div>
            
            {/* Wednesday */}
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">12:00</div>
              <div className="h-8 flex items-center text-gray-400 text-base">—</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">13:00 </div>
            </div>
            
            {/* Thursday */}
            <div className="flex flex-col gap-2 items-center ">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium  text-[#5454e2]">10:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#3733AB] text-white">11:00</div>
              <div className="h-8 flex items-center text-gray-400 text-base">—</div>
            </div>
            
            {/* Friday */}
            <div className="flex flex-col gap-2 items-center">
              <div className="h-8 flex items-center text-gray-400 text-base">—</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">14:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">16:00</div>
            </div>
            
            {/* Saturday */}
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#3733AB] text-white">12:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">14:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">15:00</div>
            </div>
            
            {/* Sunday */}
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#3733AB] text-white">09:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">10:00</div>
              <div className="w-[80%] text-center py-1.5 px-2 rounded-md text-xs font-medium bg-[#ebeeff] text-[#5454e2]">11:00</div>
            </div>
          </div>
        </div>
        
      </div>
       <div className="flex gap-4 w-full  ">
        <div className="flex items-center gap-3 bg-[#3733AB] text-white p-5 rounded-3xl flex-1 max-w-[200px] ">
          <Tooth className="w-6 h-6" />
              {/* <FontAwesomeIcon icon="fa-solid fa-tooth" />           */}
             <div> 
            <div className="text-sm font-medium">Dentist</div>
            <div className="text-xs opacity-90">09:00-11:00</div>
            <div className="text-xs opacity-90">Dr. Cameron Williamson</div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-[#DDE2F9] text-[#3d3d5c] p-4 rounded-xl flex-1 max-w-[700px]">
          <Stethoscope className="w-6 h-6" />
          <div>
            <div className="text-sm font-medium">Physiotherapy Appointment</div>
            <div className="text-xs opacity-75">11:00-12:00</div>
            <div className="text-xs opacity-75">Dr. Kevin Djones</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { Card } from "@/components/ui/card"

// export function ActivityFeed() {
//   const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
//   const barHeights = [60, 80, 40, 90, 70, 50, 85] // Percentage heights for bars

//   return (
//     <Card className="p-6">
//       <h2 className="text-xl font-bold text-gray-900 mb-2">Activity</h2>
//       <p className="text-sm text-gray-500 mb-6">3 appointments on this week</p>

//       <div className="flex items-end justify-between h-32 space-x-2">
//         {days.map((day, index) => (
//           <div key={day} className="flex flex-col items-center flex-1">
//             <div className="w-full flex flex-col items-center space-y-1 mb-2">
//               <div className="w-6 bg-cyan-400 rounded-t" style={{ height: `${barHeights[index]}%` }}></div>
//               <div className="w-6 bg-blue-600 rounded-b" style={{ height: `${100 - barHeights[index]}%` }}></div>
//             </div>
//             <span className="text-xs text-gray-500">{day}</span>
//           </div>
//         ))}
//       </div>
//     </Card>
//   )
// }
export function ActivityFeed() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
  const barHeights = [60, 80, 40, 90, 70, 50, 85] // Percentage heights for bars

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Activity</h2>
      <p className="text-sm text-gray-500 mb-6">3 appointments on this week</p>

      <div className="flex items-end justify-between h-32 space-x-2">
        {days.map((day, index) => (
          <div key={day} className="flex flex-col items-center flex-1">
            <div className="w-full flex flex-col items-center space-y-1 mb-2">
              <div className="w-6 bg-cyan-400 rounded-t" style={{ height: `${barHeights[index]}%` }}></div>
              <div className="w-6 bg-blue-600 rounded-b" style={{ height: `${100 - barHeights[index]}%` }}></div>
            </div>
            <span className="text-xs text-gray-500">{day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

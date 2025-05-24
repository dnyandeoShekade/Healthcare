// import { Card } from "@/components/ui/card"

// const healthData = [
//   {
//     organ: "Lungs",
//     date: "Mon, 25 Oct 2021",
//     status: "healthy",
//     color: "bg-blue-100 text-blue-700",
//   },
//   {
//     organ: "Teeth",
//     date: "Mon, 25 Oct 2021",
//     status: "healthy",
//     color: "bg-green-100 text-green-700",
//   },
//   {
//     organ: "Bone",
//     date: "Mon, 26 Oct 2021",
//     status: "issue",
//     color: "bg-orange-100 text-orange-700",
//   },
// ]

// export function HealthStatusCards() {
//   return (
//     <div className="space-y-4 flex-1">
//       {healthData.map((item) => (
//         <Card key={item.organ} className="p-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-semibold text-gray-900">{item.organ}</h3>
//               <p className="text-sm text-gray-500">{item.date}</p>
//             </div>
//             <div className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
//               {item.status === "healthy" ? "●" : "●"}
//             </div>
//           </div>
//           <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
//             <div
//               className={`h-2 rounded-full ${item.status === "healthy" ? "bg-green-500" : "bg-orange-500"}`}
//               style={{ width: item.status === "healthy" ? "85%" : "60%" }}
//             ></div>
//           </div>
//         </Card>
//       ))}
//     </div>
//   )
// }
// const healthData = [
//   {
//     organ: "Lungs",
//     date: "Mon, 25 Oct 2021",
//     status: "healthy",
//     color: "bg-blue-100 text-blue-700",
//   },
//   {
//     organ: "Teeth",
//     date: "Mon, 25 Oct 2021",
//     status: "healthy",
//     color: "bg-green-100 text-green-700",
//   },
//   {
//     organ: "Bone",
//     date: "Mon, 26 Oct 2021",
//     status: "issue",
//     color: "bg-orange-100 text-orange-700",
//   },
// ]

// export function HealthStatusCards() {
//   return (
//     <div className="space-y-4 flex-1">
//       {healthData.map((item) => (
//         <div key={item.organ} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-semibold text-gray-900">{item.organ}</h3>
//               <p className="text-sm text-gray-500">{item.date}</p>
//             </div>
//             <div className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
//               {item.status === "healthy" ? "●" : "●"}
//             </div>
//           </div>
//           <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
//             <div
//               className={`h-2 rounded-full ${item.status === "healthy" ? "bg-green-500" : "bg-orange-500"}`}
//               style={{ width: item.status === "healthy" ? "85%" : "60%" }}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
export function HealthStatusCards() {
  const healthData = [
    {
      organ: "Lungs",
      date: "Mon, 25 Oct 2021",
      color: "bg-blue-100 text-blue-700",
      icon: "fa-lungs",
    },
    {
      organ: "Teeth",
      date: "Mon, 25 Oct 2021",
      color: "bg-green-100 text-green-700",
      icon: "fa-tooth",
    },
    {
      organ: "Bone",
      date: "Mon, 26 Oct 2021",
      color: "bg-orange-100 text-orange-700",
      icon: "fa-bone",
    },
  ];

  return (
    <div className="space-y-4 flex-1">
      {/* Add this if you don't have Font Awesome in your project already */}
      
      {healthData.map((item) => (
        <div key={item.organ} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <i className={`fa-solid ${item.icon} text-lg text-gray-500`}></i>
              <div>
                <h3 className="font-semibold text-gray-900">{item.organ}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

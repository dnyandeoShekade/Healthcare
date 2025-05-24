// import { Card } from "@/components/ui/card"

// interface SimpleAppointmentCardProps {
//   title: string
//   time: string
//   icon: string
// }

// export function SimpleAppointmentCard({ title, time, icon }: SimpleAppointmentCardProps) {
//   return (
//     <Card className="p-4 bg-blue-50 border-blue-200">
//       <div className="flex items-start justify-between">
//         <div className="flex-1">
//           <h4 className="font-medium text-gray-900 text-sm mb-1">{title}</h4>
//           <p className="text-xs text-gray-600">{time}</p>
//         </div>
//         <span className="text-lg">{icon}</span>
//       </div>
//     </Card>
//   )
// }

export function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg shadow-sm p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 text-sm mb-1">{title}</h4>
          <p className="text-xs text-gray-600">{time}</p>
        </div>
        <span className="text-lg">{icon}</span>
      </div>
    </div>
  )
}

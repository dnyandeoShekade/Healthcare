

// import { HealthStatusCards } from "../../components/Dashboard/HealthStatusCards";

// export function AnatomySection() {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       <div className="flex items-start space-x-6">
//         <div className="relative flex-shrink-0">
//           {/* Human body illustration placeholder */}
//           <div className="w-48 h-80 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full relative">
//             {/* Healthy Heart indicator */}
//             <div className="absolute top-16 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
//               <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
//               Healthy Heart
//             </div>

//             {/* Healthy Leg indicator */}
//             <div className="absolute bottom-20 left-4 bg-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium">
//               Healthy Leg
//             </div>
//           </div>
//         </div>

//         <HealthStatusCards />
//       </div>
//     </div>
//   )
// }


import Image from "next/image";

import { Heart, Activity, Search } from "lucide-react"
import { HealthStatusCards } from "../../components/Dashboard/HealthStatusCards";


const anatomyPoints = [
    {
      id: "heart",
      label: "Healthy Heart",
      icon: <Heart className="w-4 h-4 text-white" />,
      position: { x: 52, y: 25 },
      color: "bg-red-500",
    },
    {
      id: "leg",
      label: "Healthy Leg",
      icon: <Activity className="w-4 h-4 text-white" />,
      position: { x: 15, y: 70 },
      color: "bg-cyan-500",
    },
  ]

export function AnatomySection() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start space-x-6">
        <div className="relative flex-shrink-0">
          {/* Human body illustration placeholder */}
          {/* <div className="w-48 h-80 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full relative">
            <div className="absolute top-16 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              Healthy Heart
            </div>

            <div className="absolute bottom-20 left-4 bg-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium">
              Healthy Leg
            </div>
          </div> */}
           {/* <div className="relative bg-white rounded-xl shadow-lg p-8 mb-6"> */}
          <div className="relative mx-auto" style={{ width: "300px", height: "430px" }}>
            {/* Anatomy model image */}
            <Image
              src="/anatomy.png"
              alt="3D Human Anatomy Model"
              width={220}
              height={70}
              className="object-contain overflow-hidden "
            />

            {/* Anatomy points */}
            {anatomyPoints.map((point) => (
              <div key={point.id}>
                {/* Point marker */}
                <div
                  className={`absolute w-8 h-8 ${point.color} rounded-full flex items-center justify-center shadow-lg z-10`}
                  style={{
                    left: `${point.position.x}%`,
                    top: `${point.position.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {point.icon}
                </div>

                {/* Callout label */}
                <div
                  className={`absolute px-3 py-2 bg-white rounded-lg shadow-lg`}
                  style={{
                    left: `${point.position.x + 8}%`,
                    top: `${point.position.y - 5}%`,
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 ${point.color} rounded-full flex items-center justify-center`}>
                      {point.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{point.label}</span>
                  </div>
                </div>

                {/* Connection line */}
                <div
                  className={`absolute w-px h-8 ${point.color} opacity-60`}
                  style={{
                    left: `${point.position.x + 4}%`,
                    top: `${point.position.y}%`,
                    transform: "translateX(-50%)",
                  }}
                />
              </div>
            ))}
          </div>
        {/* </div> */}

        </div>

        <HealthStatusCards />
      </div>
    </div>
  )
}

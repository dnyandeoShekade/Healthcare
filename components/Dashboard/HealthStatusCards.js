import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLungs, faTooth, faBone } from "@fortawesome/free-solid-svg-icons";
import { ArrowRight } from "lucide-react";

export default function HealthStatusCards() {
  const healthData = [
    {
      icon: faLungs,
      iconColor: "text-red-500",
      title: "Lungs",
      date: "Thurs, 24 Oct 2021",
      statusColor: "bg-red-500",
      progress: 75,
    },
    {
      icon: faTooth,
      iconColor: "text-gray-200",
      title: "Teeth",
      date: "Suns, 26 Oct 2021",
      statusColor: "bg-white",
      progress: 85,
    },
    {
      icon: faBone,
      iconColor: "text-gray-400",
      title: "Bone",
      date: "Mons, 26 Oct 2021",
      statusColor: "bg-orange-500",
      progress: 60,
    },
  ];

  return (
    <div className="w-39 space-y-5 p-2">
      {healthData.map((item, index) => (
        <div
          key={index}
          className="rounded-xl p-5 bg-[#F6FAFF] border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-2 ">
            <FontAwesomeIcon
              icon={item.icon}
              className={`text-xl w-9 ${item.iconColor}`}
            />
            <h3 className="text-sm font-medium text-gray-700">{item.title}</h3>
          </div>

          <p className="text-xs text-gray-400 mb-3 ml-8">{item.date}</p>

          <div className="ml-8">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full ${item.statusColor}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-end mt-4">
        <button className="text-xs text-blue-500 hover:text-blue-600 font-medium flex items-center gap-1">
          Details
          <ArrowRight className="w-4 h-4 text-blue-500" />
        </button>
      </div>
    </div>
  );
}

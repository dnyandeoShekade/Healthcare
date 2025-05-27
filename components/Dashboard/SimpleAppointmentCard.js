
import { CheckCircle, Eye, Heart, Brain } from "lucide-react"

const iconMap = {
  check: CheckCircle,
  eye: Eye,
  heart: Heart,
  brain: Brain,
}

export function SimpleAppointmentCard({ title, time, icon, iconColor, bgColor }) {
  const Icon = iconMap[icon]

  return (
    <div className={`p-4 ${bgColor} rounded-xl flex items-center justify-between`}>
      <div>
        <h5 className="font-medium text-gray-800 text-sm">{title}</h5>
        <p className="text-xs text-gray-600">{time}</p>
      </div>
      <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
    </div>
  )
}

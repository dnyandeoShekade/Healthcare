
import { SimpleAppointmentCard } from "../../components/Dashboard/SimpleAppointmentCard"


export function UpcomingSchedule() {
  const scheduleData = [
    {
      day: "On Thursday",
      appointments: [
        {
          title: "Health checkup complete",
          time: "11:00 AM",
          icon: "check",
          iconColor: "text-green-600",
          bgColor: "bg-green-50",
        },
        {
          title: "Ophthalmologist",
          time: "14:00 PM",
          icon: "eye",
          iconColor: "text-blue-600",
          bgColor: "bg-blue-50",
        },
      ],
    },
    {
      day: "On Saturday",
      appointments: [
        {
          title: "Cardiologist",
          time: "12:00 AM",
          icon: "heart",
          iconColor: "text-red-500",
          bgColor: "bg-red-50",
        },
        {
          title: "Neurologist",
          time: "16:00 PM",
          icon: "brain",
          iconColor: "text-purple-600",
          bgColor: "bg-purple-50",
        },
      ],
    },
  ]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-6">The Upcoming Schedule</h3>

      {scheduleData.map((daySchedule, dayIndex) => (
        <div key={dayIndex} className="mb-6">
          <h4 className="text-sm font-medium text-gray-600 mb-4">{daySchedule.day}</h4>
          <div className="grid grid-cols-2 gap-3">
            {daySchedule.appointments.map((appointment, appointmentIndex) => (
              <SimpleAppointmentCard
                key={appointmentIndex}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
                iconColor={appointment.iconColor}
                bgColor={appointment.bgColor}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

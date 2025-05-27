

export default function ActivityFeed() {
  const totalAppointments = 3;
  const timeframe = "this week";
  
  const activityData = [
    {
      name: 'Mon',
      bars: [
        { height: 60, type: 'primary' },
        { height: 40, type: 'secondary' }
      ]
    },
    {
      name: 'Tues',
      bars: [
        { height: 30, type: 'primary' },
        { height: 50, type: 'secondary' },
        { height: 20, type: 'primary' }
      ]
    },
    {
      name: 'Wed',
      bars: [
        { height: 40, type: 'primary' },
        { height: 60, type: 'secondary' },
        { height: 25, type: 'primary' }
      ]
    },
    {
      name: 'Thurs',
      bars: [
        { height: 70, type: 'primary' },
        { height: 35, type: 'secondary' },
        { height: 50, type: 'primary' }
      ]
    },
    {
      name: 'Fri',
      bars: [
        { height: 55, type: 'secondary' },
        { height: 75, type: 'primary' },
        { height: 30, type: 'secondary' }
      ]
    },
    {
      name: 'Sat',
      bars: [
        { height: 60, type: 'primary' },
        { height: 40, type: 'secondary' }
      ]
    },
    {
      name: 'Sun',
      bars: [
        { height: 30, type: 'secondary' },
        { height: 50, type: 'primary' }
      ]
    }
  ];

  return (
    <div className="  flex items-center justify-center mt-6 p-2">
      <div className="w-full max-w-1xl bg-[#F6FAFF] rounded-lg shadow-sm p-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
          <span className="text-sm text-gray-500">
            {totalAppointments} appointment{totalAppointments !== 1 ? 's' : ''} on {timeframe}
          </span>
        </div>
        
        <div className="w-full h-40 flex items-end justify-between px-1">
          {activityData.map((day, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex justify-center items-end h-32 mb-1 relative">
                {day.bars.map((bar, barIndex) => (
                  <div
                    key={`${index}-${barIndex}`}
                    className={`w-1.5 mx-0.5 rounded-t-sm ${
                      bar.type === 'primary' ? 'bg-teal-400' : 'bg-indigo-500'
                    } animate-grow-up`}
                    style={{
                      '--height': `${bar.height}%`,
                      height: `${bar.height}%`,
                      animationDelay: `${(index * 0.1) + (barIndex * 0.05)}s`
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400">{day.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


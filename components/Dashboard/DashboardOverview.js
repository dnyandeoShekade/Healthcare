import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import { AnatomySection } from "./AnatomySection";
import { UpcomingSchedule } from "../../app/dashboard/UpcomingSchedule";
import { ChevronDown } from "lucide-react";

export function DashboardOverview() {
  return (
    <div className="space-y-6 ml-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h1 className="text-xl  font-bold text-gray-900">Dashboard</h1>
            <div className="text-sm text-gray-500 flex items-center gap-1 mr-9">
              This Week
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          <AnatomySection />
          <ActivityFeed />
        </div>

        <div className="space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}

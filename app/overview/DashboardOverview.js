// import { AnatomySection } from "@/components/anatomy-section"
// import { CalendarView } from "@/components/calendar-view"
// import { UpcomingSchedule } from "@/components/upcoming-schedule"
// import { ActivityFeed } from "@/components/activity-feed"

import { ActivityFeed } from "../../components/Dashboard/ActivityFeed";
import CalendarView from "../../components/Dashboard/CalendarView";
// import { AnatomySection } from "../dashboard/AnatomySection";
import { AnatomySection } from "../dashboard/AnatomySection";
import { UpcomingSchedule } from "../dashboard/UpcomingSchedule";


export function DashboardOverview() {
  return (
    <div className="space-y-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">This Week</div>
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

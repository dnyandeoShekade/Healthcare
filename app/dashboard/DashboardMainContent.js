
import { DashboardOverview } from "../../components/Dashboard/DashboardOverview";

export function DashboardMainContent() {
  return (
    <main className="flex-1 p-6 overflow-auto">
      <DashboardOverview />
    </main>
  );
}

import Image from "next/image";

import CalendarView from "../components/Dashboard/CalendarView";
import { DashboardMainContent } from "./dashboard/DashboardMainContent";
// import { Sidebar } from "../components/Dashboard/Sidebar";
import { Header } from "../components/Header";
import Sidebar from "../components/Dashboard/Sidebar";

export default function Home() {
  return (
    <div className="border">
      <Header />

      <div className=" bg-gray-50 flex ">
        <Sidebar />
        <div className="flex-1 flex flex-col ">
          {/* <Header /> */}
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

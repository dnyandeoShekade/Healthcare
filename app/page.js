import Image from "next/image";

import Sidebar from "../components/comman/Sidebar";
import { DashboardMainContent } from "./dashboard/DashboardMainContent";
import Header from "../components/comman/Header";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

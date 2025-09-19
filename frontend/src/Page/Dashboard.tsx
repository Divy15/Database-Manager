import { DashboardSubNavbar } from "@/Component/DashboardSubNavbar";
import { DashboardProvider } from "../Context/DashboardDatabaseInfoContext";
import { DashboardDatabaseInfoContent } from "@/Component/DasboardDatabaseInfoContent";


export const Dashboard = () => {

  return (
    <>
    <DashboardProvider>
      <DashboardSubNavbar />
      <DashboardDatabaseInfoContent />
    </DashboardProvider>
    </>
  )
};

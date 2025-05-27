import AppSidebar from "@/components/layouts/sidebar/AppSidebar";
import DashboardHeader from "@/components/layouts/dashboard/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <DashboardHeader />
        {children}
      </main>
    </SidebarProvider>
  );
};
export default DashboardLayout;

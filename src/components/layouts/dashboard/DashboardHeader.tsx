import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <SidebarTrigger />

      <UserButton />
    </header>
  );
};
export default DashboardHeader;

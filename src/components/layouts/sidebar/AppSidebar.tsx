"use client";

import { usePathname } from "next/navigation";
import DashboardSidebar from "./DashboardSidebar";
import TeacherSidebar from "./TeacherSidebar";
import StudentSidebar from "./StudentSidebar";

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/dashboard/teacher") && <TeacherSidebar />}
      {pathname.startsWith("/dashboard/student") && <StudentSidebar />}
      {pathname.startsWith("/dashboard") &&
        !pathname.startsWith("/dashboard/teacher") &&
        !pathname.startsWith("/dashboard/student") && <DashboardSidebar />}
    </>
  );
};
export default AppSidebar;

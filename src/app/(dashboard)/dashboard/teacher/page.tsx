import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";

const DashboardTeacherPage = async () => {
  const isTeacher = await checkRole("teacher");

  if (!isTeacher) {
    redirect("/");
  }

  return <div>DashboardTeacherPage</div>;
};
export default DashboardTeacherPage;

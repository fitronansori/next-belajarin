import Title from "@/components/common/Title";
import CourseCard from "@/components/layouts/Courses/CourseCard";
import CourseFilter from "@/components/layouts/Courses/CourseFilter";
import CoursePagination from "@/components/layouts/Courses/CoursePagination";
import SearchCourse from "@/components/layouts/Header/SearchCourse";

const AllCoursePage = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container space-y-4">
        <div className="space-y-4">
          <Title
            title="Semua Kelas"
            description="Temukan berbagai kelas yang tersedia untuk meningkatkan keterampilan dan pengetahuan Anda."
            className="space-y-0"
            classNameTitle="md:text-3xl"
            classNameDescription="text-sm"
          />

          <SearchCourse />

          <CourseFilter />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Hasil Pencarian</h3>

          <div className="grid grid-cols-1 gap-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>

        <CoursePagination />
      </div>
    </section>
  );
};
export default AllCoursePage;

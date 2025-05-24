import Title from "@/components/common/Title";
import PopularCourseCard from "./PopularCourseCard";

const PopularCourse = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container space-y-4">
        <Title title="🌟 Kelas Populer" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <PopularCourseCard />
          <PopularCourseCard />
          <PopularCourseCard />
          <PopularCourseCard />
        </div>
      </div>
    </section>
  );
};
export default PopularCourse;

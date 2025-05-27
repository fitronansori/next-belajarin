import Title from "@/components/common/Title";
import MentorPagination from "@/components/layouts/mentors/MentorPagination";
import MentorProfile from "@/components/layouts/mentors/MentorProfile";
import SearchMentor from "@/components/layouts/mentors/SearchMentor";

const AllMentorPage = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container space-y-4">
        <div className="space-y-4">
          <Title
            title="Semua Mentor"
            description="Temukan berbagai mentor yang siap membantu Anda dalam perjalanan belajar Anda."
            className="space-y-0"
            classNameTitle="md:text-3xl"
            classNameDescription="text-sm"
          />

          <SearchMentor />
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MentorProfile />
            <MentorProfile />
            <MentorProfile />
            <MentorProfile />
            <MentorProfile />
            <MentorProfile />
            <MentorProfile />
            <MentorProfile />
          </div>
        </div>

        <MentorPagination />
      </div>
    </section>
  );
};
export default AllMentorPage;

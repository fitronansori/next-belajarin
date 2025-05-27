import Title from "@/components/common/Title";

const MentorDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <section className="py-10 md:py-14">
      <div className="container space-y-4">
        <Title
          title={`Course By ${params.id}`}
          description="Temukan berbagai kelas yang tersedia untuk meningkatkan keterampilan dan pengetahuan Anda."
          className="space-y-0"
          classNameTitle="md:text-3xl"
          classNameDescription="text-sm"
        />
      </div>
    </section>
  );
};
export default MentorDetailPage;

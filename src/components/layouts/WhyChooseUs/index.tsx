import Title from "@/components/common/Title";
import ChooseUsCard from "./ChooseUsCard";
import { BadgePercentIcon, BookMarkedIcon, UsersIcon } from "lucide-react";

const choose_us_data = [
  {
    icon: <BadgePercentIcon className="size-5 text-white" />,
    title: "Harga Terjangkau",
    description:
      "Belajar tanpa khawatir biaya mahal, akses materi premium dengan harga ramah di kantong.",
  },
  {
    icon: <UsersIcon className="size-5 text-white" />,
    title: "Mentor Berpengalaman",
    description:
      "Dibimbing langsung oleh mentor profesional dan berpengalaman di bidangnya.",
  },
  {
    icon: <BookMarkedIcon className="size-5 text-white" />,
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat resmi setelah menyelesaikan kelas, buktikan keahlianmu.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container space-y-4">
        <Title
          title="🤷‍♀️ Kenapa Memilih Kami?"
          description="Platform kami menawarkan berbagai kelas yang diajarkan oleh para ahli industri."
          classNameDescription="text-sm"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {choose_us_data.map((item, idx) => (
            <ChooseUsCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;

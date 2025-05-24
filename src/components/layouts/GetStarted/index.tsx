import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container flex flex-col items-center justify-center gap-4">
        <Title
          title="Siap Mulai Belajar?"
          description="Bergabunglah dengan ribuan pembelajar dan maksimalkan potensimu bersama Belajarin."
          className="flex flex-col items-center justify-center text-center"
          classNameTitle="text-2xl md:text-4xl text-black"
          classNameDescription="text-sm"
        />

        <div>
          <Button size={"lg"} asChild>
            <Link href="/courses">Mulai Belajar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;

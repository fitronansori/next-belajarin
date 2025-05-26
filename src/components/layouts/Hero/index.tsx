import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-4">
      <div className="container h-[calc(100vh-96px)] flex items-center justify-center">
        <div className="relative w-full h-full lg:h-[480px]">
          <Image
            src={"/assets/images/hero.jpg"}
            alt=""
            fill
            className="size-full object-cover brightness-50 rounded-xl"
          />

          <div className="absolute bottom-0 left-0 flex flex-col items-start justify-end gap-y-4 text-background text-left p-8">
            <h1 className="text-xl md:text-5xl font-black">
              Tingkatkan potensimu bersama belajarin
            </h1>

            <p className="text-sm md:text-base max-w-[550px]">
              Jelajahi berbagai kelas yang diajarkan oleh para ahli industri.
              Belajar sesuai kemampuanmu dan capai tujuanmu.
            </p>

            <Button size={"lg"} asChild>
              <Link href={"/courses"}>Jelajahi kelas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

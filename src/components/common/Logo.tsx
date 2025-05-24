import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/assets/icon/logo.svg"}
        alt="belajarin-logo"
        width={35}
        height={35}
        className="size-auto"
      />

      <h1 className="text-2xl font-bold">
        Belajarin<span className="text-primary">.</span>
      </h1>
    </Link>
  );
};
export default Logo;

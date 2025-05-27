import Image from "next/image";
import Link from "next/link";

const MentorProfile = () => {
  return (
    <Link
      href={"/mentors/1"}
      className="p-2 flex flex-col items-center justify-center text-center"
    >
      <Image
        src={"/assets/images/profile.jpg"}
        alt=""
        width={100}
        height={100}
        className="size-auto rounded-full object-cover"
      />

      <h3 className="text-lg font-semibold">Ansori Dev</h3>
      <p className="text-sm text-muted-foreground">Expert in Web Development</p>
    </Link>
  );
};
export default MentorProfile;

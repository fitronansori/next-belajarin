import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <Image src={"/assets/icon/logo.svg"} alt="logo" width={30} height={30} />
      <Button>Testing</Button>
    </div>
  );
};
export default HomePage;

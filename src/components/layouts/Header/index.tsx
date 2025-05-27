import Logo from "@/components/common/Logo";
import NavLinks from "./NavLinks";
import SearchCourse from "./SearchCourse";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserAvatar from "./UserAvatar";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="border-b">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />

          <NavLinks className="hidden lg:block" />
        </div>

        <div className="flex items-center gap-4">
          <SearchCourse className="hidden lg:block" />

          {user ? (
            <UserAvatar
              name={`${user.firstName} ${user.lastName}`}
              image={user.imageUrl}
            />
          ) : (
            <Button asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
          )}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;

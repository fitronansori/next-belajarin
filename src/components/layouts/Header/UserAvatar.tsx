import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { LayoutDashboard, LogOut } from "lucide-react";

type UserAvatarProps = {
  name?: string;
  image?: string;
  role?: string;
};

const UserAvatar = ({ name, image, role }: UserAvatarProps) => {
  const avatarFallback = name ? name.charAt(0).toUpperCase() : "U";

  let dashboardLink = "/dashboard";

  if (role === "teacher") dashboardLink = "/dashboard/teacher";
  if (role !== "teacher" && role !== "admin")
    dashboardLink = "/dashboard/student";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={image || "https://github.com/shadcn.png"}
            alt={`${name || "User"}'s avatar`}
          />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Belajarin</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href={dashboardLink} passHref>
            <LayoutDashboard /> Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-500" asChild>
          <SignOutButton>
            <div className="w-full">
              <LogOut className="text-red-500" /> Keluar
            </div>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserAvatar;

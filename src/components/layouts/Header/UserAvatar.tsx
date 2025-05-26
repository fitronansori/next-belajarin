import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserAvatarProps = {
  name?: string;
  image?: string;
};

const UserAvatar = ({ name, image }: UserAvatarProps) => {
  const avatarFallback = name ? name.charAt(0).toUpperCase() : "U";

  return (
    <Avatar>
      <AvatarImage
        src={image || "https://github.com/shadcn.png"}
        alt={`${name || "User"}'s avatar`}
      />
      <AvatarFallback>{avatarFallback}</AvatarFallback>
    </Avatar>
  );
};
export default UserAvatar;

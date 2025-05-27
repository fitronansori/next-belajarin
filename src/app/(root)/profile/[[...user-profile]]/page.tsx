import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <section className="py-10 lg:py-14 flex items-center justify-center">
      <UserProfile />
    </section>
  );
};
export default UserProfilePage;

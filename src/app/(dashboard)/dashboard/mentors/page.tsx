import Title from "@/components/common/Title";
import UserTable from "@/components/layouts/dashboard/UserTable";
import { clerkClient } from "@clerk/nextjs/server";

const AllMentorPage = async () => {
  const client = await clerkClient();

  const users = (await client.users.getUserList()).data.map((user) => ({
    id: user.id,
    first_name: user.firstName,
    last_name: user.lastName,
    email_addresses: user.emailAddresses.map((e) => ({
      id: e.id,
      email_address: e.emailAddress,
    })),
    primary_email_address_id: user.primaryEmailAddressId || undefined,
    public_metadata: user.publicMetadata || {},
  }));

  const teachers = users.filter((u) => u.public_metadata.role === "teacher");

  return (
    <div className="p-4 space-y-4">
      <Title
        title="Semua Mentor"
        description="Daftar semua mentor yang terdaftar di platform ini."
        className="space-y-0"
        classNameDescription="text-sm"
      />
      {teachers.length === 0 ? (
        <div className="text-center text-muted-foreground py-8">
          Daftar Mentor masih kosong.
        </div>
      ) : (
        <UserTable users={teachers} />
      )}
    </div>
  );
};
export default AllMentorPage;

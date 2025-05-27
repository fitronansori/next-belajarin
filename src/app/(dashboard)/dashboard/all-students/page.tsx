import { clerkClient } from "@clerk/nextjs/server";
import Title from "@/components/common/Title";
import UserTable from "@/components/layouts/dashboard/UserTable";

const AllStudentPage = async () => {
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

  return (
    <div className="p-4 space-y-4">
      <Title
        title="Semua Siswa"
        description="Daftar semua siswa yang terdaftar di platform ini."
        className="space-y-0"
        classNameDescription="text-sm"
      />
      {users.length === 0 ? (
        <div className="text-center text-muted-foreground py-8">
          Daftar Siswa masih kosong.
        </div>
      ) : (
        <UserTable users={users} />
      )}
    </div>
  );
};
export default AllStudentPage;

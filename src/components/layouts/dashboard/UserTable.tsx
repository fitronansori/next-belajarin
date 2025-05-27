"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { removeRole, setRole } from "@/actions/role-actions";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface ClerkUser {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  email_addresses: Array<{ id: string; email_address: string }>;
  primary_email_address_id?: string;
  public_metadata: { role?: string };
}

type UserTableProps = {
  users: ClerkUser[];
};

const PAGE_SIZE = 10;

const UserTable = ({ users }: UserTableProps) => {
  const [page, setPage] = useState(1);
  const pathname = usePathname();
  const totalPages = Math.ceil(users.length / PAGE_SIZE);
  const paginatedUsers = users.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <div className="w-full">
      <div className="w-full border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">No</TableHead>
              <TableHead>Nama Siswa</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedUsers.map((user, idx) => (
              <TableRow key={user.id} className="odd:bg-muted/50">
                <TableCell className="pl-4">
                  {(page - 1) * PAGE_SIZE + idx + 1}
                </TableCell>

                <TableCell className="font-medium">
                  {user.first_name || "Anonim"} {user.last_name || ""}
                </TableCell>

                <TableCell>
                  {user.email_addresses.find(
                    (email: { id: string; email_address: string }) =>
                      email.id === user.primary_email_address_id
                  )?.email_address || "-"}
                </TableCell>

                <TableCell>{user.public_metadata.role || "siswa"}</TableCell>

                <TableCell className="flex items-center gap-2">
                  {pathname.includes("mentors") ? null : (
                    <>
                      <form action={setRole}>
                        <input type="hidden" name="id" value={user.id} />
                        <input type="hidden" name="role" value="admin" />
                        <Button
                          variant={"link"}
                          type="submit"
                          className="text-blue-600 cursor-pointer"
                        >
                          Admin
                        </Button>
                      </form>
                      <form action={setRole}>
                        <input type="hidden" name="id" value={user.id} />
                        <input type="hidden" name="role" value="teacher" />
                        <Button
                          variant={"link"}
                          type="submit"
                          className="text-green-600 cursor-pointer"
                        >
                          Teacher
                        </Button>
                      </form>
                    </>
                  )}
                  <form action={removeRole}>
                    <input type="hidden" name="id" value={user.id} />
                    <Button
                      variant={"link"}
                      type="submit"
                      className="text-red-600 cursor-pointer"
                    >
                      Remove Role
                    </Button>
                  </form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(page - 1)}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={page === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default UserTable;

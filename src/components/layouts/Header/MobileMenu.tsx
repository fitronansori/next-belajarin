import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustify className="size-7" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="hidden">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <NavLinks
          className="w-full h-screen flex flex-col justify-center pl-4 gap-4"
          classNameLink="w-full text-2xl"
        />
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;

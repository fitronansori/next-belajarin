import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

type SearchCourseProps = {
  className?: string;
};

const SearchCourse = ({ className }: SearchCourseProps) => {
  return (
    <form className={cn("", className)}>
      <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Cari kursus..."
          className="border-0 focus-visible:ring-0 shadow-none"
        />
      </div>
    </form>
  );
};
export default SearchCourse;

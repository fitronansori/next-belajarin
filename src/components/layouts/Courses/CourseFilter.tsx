import SelectFilter from "./SelectFilter";
import { filter_options } from "@/constants/data";

const CourseFilter = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <SelectFilter label="Kategori" options={filter_options.category} />
      <SelectFilter label="Level" options={filter_options.level} />
      <SelectFilter label="Harga" options={filter_options.price} />
    </div>
  );
};
export default CourseFilter;

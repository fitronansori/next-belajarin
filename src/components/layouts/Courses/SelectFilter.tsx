import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface Option {
  _value: string;
  _label: string;
}

type SelectFilterProps = {
  label: string;
  options: Option[];
};

const SelectFilter = ({ label, options }: SelectFilterProps) => {
  return (
    <div>
      <Select defaultValue={options[0]._value}>
        <SelectTrigger className="rounded-full">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((opt) => (
              <SelectItem key={opt._value} value={opt._value}>
                {opt._label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default SelectFilter;

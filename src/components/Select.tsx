import {
  Select as SelectUI,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

export const Select = ({
  options,
  value,
  onValueChange,
  disabled,
}: {
  options: string[];
  value?: string;
  onValueChange: (value?: string) => void;
  disabled?: boolean;
}) => {
  return (
    <SelectUI value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      {!disabled && (
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      )}
    </SelectUI>
  );
};

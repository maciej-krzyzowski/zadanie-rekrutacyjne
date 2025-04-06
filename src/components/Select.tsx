import {
  Select as SelectUI,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type OptionObjectType = {
  number: string | number;
  name: string;
};

export const Select = ({
  options,
  value,
  onValueChange,
  disabled,
}: {
  options: OptionObjectType[] | string[];
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
          {options.map((option) => {
            if (typeof option === "string") {
              return (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              );
            }

            return (
              <SelectItem key={option.number} value={String(option.number)}>
                {option.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      )}
    </SelectUI>
  );
};

import { ScheduleFormValues, ScheduleSection } from "@/types/global";
import { clsx, type ClassValue } from "clsx";
import { UseFormReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseInitialPattern = (
  initialPattern: string,
  form: UseFormReturn<ScheduleFormValues>,
) => {
  const parts = initialPattern.split(" ");

  if (parts.length !== 5) return;

  const sections: ScheduleSection[] = [
    "minute",
    "hour",
    "day",
    "month",
    "weekday",
  ];

  sections.forEach((section, index) => {
    const value = parts[index];

    if (value === "*") {
      form.setValue(`${section}.type`, "every");
    } else if (
      (section === "minute" || section === "hour") &&
      value.includes("*/")
    ) {
      const interval = value.split("/")[1];
      form.setValue(`${section}.type`, "interval");
      form.setValue(`${section}.interval`, interval);
    } else if (
      (section === "minute" || section === "hour") &&
      value.includes("-")
    ) {
      const [from, to] = value.split("-");
      form.setValue(`${section}.type`, "between");
      form.setValue(`${section}.from`, from);
      form.setValue(`${section}.to`, to);
    } else {
      form.setValue(`${section}.type`, "specific");
      form.setValue(`${section}.specific`, value);
    }
  });
};

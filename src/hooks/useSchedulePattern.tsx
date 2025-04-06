import { useForm, UseFormReturn } from "react-hook-form";
import { useState, useEffect } from "react";
import { ScheduleFormValues, ScheduleSection } from "@/types/global";
import { parseInitialPattern } from "@/lib/utils";

export const useScheduleForm = (
  initialPattern: string = "* * * * *",
): UseFormReturn<ScheduleFormValues> & {
  pattern: string;
  formValues: ScheduleFormValues;
} => {
  const [pattern, setPattern] = useState(initialPattern);

  const form = useForm<ScheduleFormValues>({
    defaultValues: {
      minute: { type: "every" },
      hour: { type: "every" },
      day: { type: "every" },
      month: { type: "every" },
      weekday: { type: "every" },
    },
  });

  const { watch } = form;
  const formValues = watch();

  useEffect(() => {
    if (initialPattern !== "* * * * *") {
      parseInitialPattern(initialPattern, form);
    }
  }, []);

  useEffect(() => {
    const parts = ["minute", "hour", "day", "month", "weekday"].map(
      (section) => {
        const sectionValues = formValues[section as ScheduleSection];
        switch (sectionValues.type) {
          case "every":
            return "*";
          case "between":
            return `${sectionValues?.from ?? "*"}-${sectionValues?.to ?? "*"}`;
          case "interval":
            return `*/${sectionValues?.interval ?? "*"}`;
          case "specific":
            return sectionValues?.specific ?? "*";
          default:
            return "*";
        }
      },
    );

    setPattern(parts.join(" "));
  }, [formValues]);

  return { ...form, pattern, formValues };
};

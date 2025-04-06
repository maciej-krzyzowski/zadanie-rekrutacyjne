export type ScheduleSection = "minute" | "hour" | "day" | "month" | "weekday";
export type ScheduleType = "every" | "between" | "interval" | "specific";
export type ScheduleSimpleType = "every" | "specific";

export type ScheduleFormValues = {
  minute: {
    type: ScheduleType;
    from?: string;
    to?: string;
    interval?: string;
    specific?: string;
  };
  hour: {
    type: ScheduleType;
    from?: string;
    to?: string;
    interval?: string;
    specific?: string;
  };
  day: { type: ScheduleSimpleType; specific?: string };
  month: { type: ScheduleSimpleType; specific?: string };
  weekday: { type: ScheduleSimpleType; specific?: string };
};

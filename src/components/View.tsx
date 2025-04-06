import { Header } from "@/components/Header";
import { ScheduleCard } from "@/components/ScheduleCard";

export const View = () => {
  return (
    <div className="container mx-auto max-w-[960px] px-6">
      <Header title="Cron" />
      <ScheduleCard />
    </div>
  );
};

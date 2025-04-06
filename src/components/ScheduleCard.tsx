import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { ScheduleModal } from "@/components/ScheduleModal";
import { ScheduleCardHeader } from "@/components/ScheduleCardHeader";
import { ScheduleCardContent } from "@/components/ScheduleCardContent";

export type ScheduleFormType = {
  name: string;
  command: string;
  schedule: string;
};

export const ScheduleCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm<ScheduleFormType>({
    defaultValues: {
      name: "Harmonogram_1",
      command: "app:remove:cronjob:run",
      schedule: "* * * * *",
    },
  });

  const onSubmit = (data: ScheduleFormType) => {
    console.log("Formularz wysłany:", data);
  };

  const handleScheduleSet = (cronPattern: string) => {
    form.setValue("schedule", cronPattern);
    setModalOpen(false);
  };

  const handleCloseForm = () => {
    console.log("work in progress");
  };

  return (
    <Card className="w-full gap-0 p-6">
      <ScheduleCardHeader
        title="Harmonogram"
        handleClose={handleCloseForm}
        handleSave={form.handleSubmit(onSubmit)}
      />

      <ScheduleCardContent
        form={form}
        handleOpenModal={() => setModalOpen(true)}
      />

      {modalOpen && (
        <ScheduleModal
          initialValue={form.getValues("schedule")}
          handleSave={handleScheduleSet}
          handleClose={() => setModalOpen(false)}
        />
      )}
    </Card>
  );
};

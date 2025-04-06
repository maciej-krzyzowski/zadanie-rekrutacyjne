import { CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Plus, GripVertical } from "lucide-react";

export const ScheduleCardHeader = ({
  title,
  handleClose,
  handleSave,
}: {
  title: string;
  handleClose: () => void;
  handleSave: () => void;
}) => {
  return (
    <CardHeader className="flex flex-row items-center justify-between px-0 pb-6">
      <CardTitle className="flex items-center gap-2 text-base">
        <GripVertical size={16} color="#343330" />
        {title}
      </CardTitle>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="lg" onClick={handleClose}>
          <X size={16} />
          Zamknij
        </Button>

        <Button size="lg" onClick={handleSave}>
          <Plus size={16} />
          Zapisz
        </Button>
      </div>
    </CardHeader>
  );
};

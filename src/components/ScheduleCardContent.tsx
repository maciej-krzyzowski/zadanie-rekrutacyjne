import { UseFormReturn } from "react-hook-form";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { ScheduleFormType } from "@/components/ScheduleCard";

export const ScheduleCardContent = ({
  form,
  handleOpenModal,
}: {
  form: UseFormReturn<ScheduleFormType, any, ScheduleFormType>;
  handleOpenModal: () => void;
}) => {
  "  relative z-10 -mb-1.5 ml-2.5 w-min items-center gap-2 bg-white px-1 text-[11px] leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50";

  return (
    <CardContent className="border-t px-0 pt-6">
      <Form {...form}>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label className="relative z-10 -mb-1.5 ml-2.5 w-min">
                Nazwa
              </Label>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} readOnly />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Label className="relative z-10 -mb-1.5 ml-2.5 w-min">
                Komenda
              </Label>
              <FormField
                control={form.control}
                name="command"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} readOnly />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <Label className="relative z-10 -mb-1.5 ml-2.5 w-min">
              Harmonogram
            </Label>
            <FormField
              control={form.control}
              name="schedule"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className="font-mono" readOnly />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="mt-7">
              <Button
                type="button"
                variant="outline"
                onClick={handleOpenModal}
                className="text-sm"
              >
                Ustaw harmonogram
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </CardContent>
  );
};

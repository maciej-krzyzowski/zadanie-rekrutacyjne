import { useCallback, useMemo } from "react";
import { Controller } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/Select";
import { useScheduleForm } from "@/hooks/useSchedulePattern";

export const ScheduleModal = ({
  initialValue,
  handleSave,
  handleClose,
}: {
  initialValue: string;
  handleSave: (pattern: string) => void;
  handleClose: () => void;
}) => {
  const { control, handleSubmit, pattern, formValues } =
    useScheduleForm(initialValue);

  const onSubmit = useCallback(() => {
    handleSave(pattern);
    handleClose();
  }, [pattern]);

  const options = useMemo(
    () => ({
      minute: Array.from({ length: 60 }, (_, i) => i.toString()),
      hour: Array.from({ length: 24 }, (_, i) => i.toString()),
      day: Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
      month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      weekday: ["1", "2", "3", "4", "5", "6", "7"],
    }),
    [],
  );

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent className="p-14" aria-describedby={undefined}>
        <DialogHeader className="border-b pb-8">
          <DialogTitle>
            Harmonogram
            <p className="mt-2">{pattern}</p>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-x-4 gap-y-10 py-8">
            <div className="col-span-3">
              <h3>Minuta</h3>
              <Controller
                name="minute.type"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    className="mt-2 space-y-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="every" id="minute-every" />
                      <Label className="pl-2" htmlFor="minute-every">
                        Każda minuta
                      </Label>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <RadioGroupItem value="between" id="minute-between" />
                        <Label className="pl-2" htmlFor="minute-between">
                          Co minutę między
                        </Label>
                      </div>
                      <div className="mt-3 flex items-center gap-4">
                        <Controller
                          name="minute.from"
                          control={control}
                          render={({ field }) => (
                            <Select
                              options={options.minute}
                              value={field.value}
                              onValueChange={field.onChange}
                              disabled={formValues.minute.type !== "between"}
                            />
                          )}
                        />
                        <span>-</span>
                        <Controller
                          name="minute.to"
                          control={control}
                          render={({ field }) => (
                            <Select
                              options={options.minute}
                              value={field.value}
                              onValueChange={field.onChange}
                              disabled={formValues.minute.type !== "between"}
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <RadioGroupItem value="interval" id="minute-interval" />
                        <Label className="pl-2" htmlFor="minute-interval">
                          Co */X minut
                        </Label>
                      </div>
                      <div className="mt-3">
                        <Controller
                          name="minute.interval"
                          control={control}
                          render={({ field }) => (
                            <Select
                              options={options.minute}
                              value={field.value}
                              onValueChange={field.onChange}
                              disabled={formValues.minute.type !== "interval"}
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <RadioGroupItem value="specific" id="minute-specific" />
                        <Label className="pl-2" htmlFor="minute-specific">
                          Określona minuta (wybierz jedną lub więcej)
                        </Label>
                      </div>
                      <div className="mt-3">
                        <Controller
                          name="minute.specific"
                          control={control}
                          render={({ field }) => (
                            <Select
                              options={options.minute}
                              value={field.value}
                              onValueChange={field.onChange}
                              disabled={formValues.minute.type !== "specific"}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            <div className="col-span-3">
              <h3>Godzina</h3>
              <Controller
                name="hour.type"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    className="mt-2 space-y-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="every" id="hour-every" />
                      <Label className="pl-2" htmlFor="hour-every">
                        Każda godzina
                      </Label>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <RadioGroupItem value="between" id="hour-between" />
                        <Label className="pl-2" htmlFor="hour-between">
                          Co godzinę między
                        </Label>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center gap-4">
                          <Controller
                            name="hour.from"
                            control={control}
                            render={({ field }) => (
                              <Select
                                options={options.hour}
                                value={field.value}
                                disabled={formValues.hour.type !== "between"}
                                onValueChange={field.onChange}
                              />
                            )}
                          />
                          <span>-</span>
                          <Controller
                            name="hour.to"
                            control={control}
                            render={({ field }) => (
                              <Select
                                options={options.hour}
                                value={field.value}
                                disabled={formValues.hour.type !== "between"}
                                onValueChange={field.onChange}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <RadioGroupItem value="interval" id="hour-interval" />
                        <Label className="pl-2" htmlFor="hour-interval">
                          Co */X godzin
                        </Label>
                      </div>
                      <div className="mt-3">
                        <Controller
                          name="hour.interval"
                          control={control}
                          render={({ field }) => (
                            <Select
                              options={options.hour}
                              value={field.value}
                              disabled={formValues.hour.type !== "interval"}
                              onValueChange={field.onChange}
                            />
                          )}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <RadioGroupItem value="specific" id="hour-specific" />
                        <Label className="pl-2" htmlFor="hour-specific">
                          Określona godzina (wybierz jedną lub więcej)
                        </Label>
                      </div>
                      <div className="mt-3">
                        <Controller
                          name="hour.specific"
                          control={control}
                          render={({ field }) => (
                            <Select
                              options={options.hour}
                              value={field.value}
                              disabled={formValues.hour.type !== "specific"}
                              onValueChange={field.onChange}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            <div className="col-span-2">
              <h3 className="text-lg font-medium">Dzień miesiąca</h3>
              <Controller
                name="day.type"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    className="mt-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="every" id="day-every" />
                      <Label className="pl-2" htmlFor="day-every">
                        Każdy dzień miesiąca
                      </Label>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <RadioGroupItem value="specific" id="day-specific" />
                        <Label className="pl-2" htmlFor="day-specific">
                          Określony dzien miesiaca (wybierz jeden lub wiecej)
                        </Label>
                      </div>
                      <div className="mt-3">
                        <Controller
                          name="day.specific"
                          control={control}
                          render={({ field }) => (
                            <Select
                              options={options.day}
                              value={field.value}
                              disabled={formValues.day.type !== "specific"}
                              onValueChange={field.onChange}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            <div className="col-span-2">
              <h3 className="text-lg font-medium">Miesiąc roku</h3>
              <Controller
                name="month.type"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    className="mt-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="every" id="month-every" />
                      <Label className="pl-2" htmlFor="month-every">
                        Każdy miesiąc roku
                      </Label>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <RadioGroupItem value="specific" id="month-specific" />
                        <Label className="pl-2" htmlFor="month-specific">
                          Określony miesiąc tygodnia (wybierz jeden lub wiecej)
                        </Label>
                      </div>
                      <div className="mt-3">
                        <Controller
                          name="month.specific"
                          control={control}
                          render={({ field }) => (
                            <Select
                              options={options.month}
                              value={field.value}
                              disabled={formValues.month.type !== "specific"}
                              onValueChange={field.onChange}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            <div className="col-span-2">
              <h3 className="text-lg font-medium">Dzień tygodnia</h3>
              <Controller
                name="weekday.type"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    className="mt-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center">
                      <RadioGroupItem value="every" id="weekday-every" />
                      <Label className="pl-2" htmlFor="weekday-every">
                        Każdy dzień tygodnia
                      </Label>
                    </div>

                    <div>
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="specific"
                          id="weekday-specific"
                        />
                        <Label className="pl-2" htmlFor="weekday-specific">
                          Określony dzien tygodnia (wybierz jeden lub wiecej)
                        </Label>
                      </div>
                      <div className="mt-3">
                        <Controller
                          name="weekday.specific"
                          control={control}
                          render={({ field }) => (
                            <Select
                              options={options.weekday}
                              value={field.value}
                              disabled={formValues.weekday.type !== "specific"}
                              onValueChange={field.onChange}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>
          </div>

          <DialogFooter className="border-t pt-8">
            <Button variant="outline" onClick={handleClose} type="button">
              Zamknij
            </Button>
            <Button type="submit">Ustaw</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

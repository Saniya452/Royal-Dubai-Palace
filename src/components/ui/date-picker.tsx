import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DatePickerProps {
  date?: Date;
  onSelect?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DatePicker({
  date,
  onSelect,
  placeholder = "Pick a date",
  disabled,
  className
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal bg-gradient-card border-accent/20 hover:border-accent/40 hover:bg-gradient-card transition-all duration-300",
            !date && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-accent" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-gradient-card border-accent/20" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onSelect}
          initialFocus
          className={cn("p-3 pointer-events-auto")}
          classNames={{
            day_selected: "bg-accent text-accent-foreground hover:bg-accent/90",
            day_today: "bg-primary/20 text-primary font-semibold",
            nav_button: cn(
              "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 hover:bg-accent/20 transition-all duration-200"
            ),
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

interface TimePickerProps {
  time?: string;
  onSelect?: (time: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function TimePicker({
  time,
  onSelect,
  placeholder = "Select time",
  disabled,
  className
}: TimePickerProps) {
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal bg-gradient-card border-accent/20 hover:border-accent/40 hover:bg-gradient-card transition-all duration-300",
            !time && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-accent" />
          {time || placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 bg-gradient-card border-accent/20" align="start">
        <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto">
          {timeSlots.map((slot) => (
            <Button
              key={slot}
              variant={time === slot ? "default" : "ghost"}
              size="sm"
              className={cn(
                "h-8 text-xs transition-all duration-200",
                time === slot 
                  ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                  : "hover:bg-accent/20 hover:text-accent"
              )}
              onClick={() => onSelect?.(slot)}
            >
              {slot}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface DayCardProps {
  dayNumber: number;
  title: string;
  children: ReactNode;
}

export default function DayCard({ dayNumber, title, children }: DayCardProps) {
  return (
    <Card className="p-6 mb-6" data-testid={`card-day-${dayNumber}`}>
      <div className="flex gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-2xl font-bold" data-testid={`text-day-number-${dayNumber}`}>
              {dayNumber}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif font-bold text-foreground" data-testid={`text-day-title-${dayNumber}`}>
            {title}
          </h3>
        </div>
      </div>
      <div className="space-y-4 pl-20">
        {children}
      </div>
    </Card>
  );
}

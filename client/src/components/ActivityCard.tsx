import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ActivityCardProps {
  time: string;
  title: string;
  icon: LucideIcon;
  description: string;
  status?: "booked" | "pending" | "optional";
  cost?: string;
}

export default function ActivityCard({ 
  time, 
  title, 
  icon: Icon, 
  description, 
  status,
  cost 
}: ActivityCardProps) {
  const statusConfig = {
    booked: { label: "✅ Booked", variant: "default" as const, className: "bg-green-600 text-white" },
    pending: { label: "⚠️ To Book", variant: "secondary" as const, className: "bg-amber-600 text-white" },
    optional: { label: "Optional", variant: "outline" as const, className: "" },
  };

  return (
    <Card className="p-4 hover-elevate" data-testid={`card-activity-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-muted-foreground mb-1" data-testid="text-activity-time">
                {time}
              </p>
              <h4 className="text-lg font-semibold text-foreground" data-testid="text-activity-title">
                {title}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {status && (
                <Badge 
                  variant={statusConfig[status].variant}
                  className={statusConfig[status].className}
                  data-testid="badge-activity-status"
                >
                  {statusConfig[status].label}
                </Badge>
              )}
              {cost && (
                <Badge variant="outline" data-testid="badge-activity-cost">
                  {cost}
                </Badge>
              )}
            </div>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed" data-testid="text-activity-description">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}

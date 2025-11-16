import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { ReactNode } from "react";

interface InfoBoxProps {
  variant: "info" | "success" | "warning" | "danger";
  title: string;
  children: ReactNode;
}

export default function InfoBox({ variant, title, children }: InfoBoxProps) {
  const config = {
    info: {
      icon: Info,
      className: "border-accent bg-accent/10 text-accent-foreground",
    },
    success: {
      icon: CheckCircle,
      className: "border-green-600 bg-green-50 dark:bg-green-950/20 text-green-900 dark:text-green-100",
    },
    warning: {
      icon: AlertTriangle,
      className: "border-amber-600 bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-100",
    },
    danger: {
      icon: XCircle,
      className: "border-destructive bg-destructive/10 text-destructive-foreground",
    },
  };

  const { icon: Icon, className } = config[variant];

  return (
    <Alert className={className} data-testid={`alert-${variant}`}>
      <Icon className="h-5 w-5" />
      <AlertTitle className="font-semibold text-lg" data-testid="text-alert-title">
        {title}
      </AlertTitle>
      <AlertDescription className="text-sm leading-relaxed" data-testid="text-alert-description">
        {children}
      </AlertDescription>
    </Alert>
  );
}

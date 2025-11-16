import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <Button
                key={tab.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => onTabChange(tab.id)}
                className={`flex-shrink-0 gap-2 ${isActive ? 'bg-primary text-primary-foreground' : ''}`}
                data-testid={`button-tab-${tab.id}`}
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

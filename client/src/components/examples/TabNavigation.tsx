import { useState } from 'react';
import TabNavigation from '../TabNavigation';
import { Home, DollarSign, Building2, Mountain, Waves, AlertTriangle, Package, Utensils } from 'lucide-react';

export default function TabNavigationExample() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'costs', label: 'Costs', icon: DollarSign },
    { id: 'bangkok', label: 'Bangkok', icon: Building2 },
    { id: 'chiangmai', label: 'Chiang Mai', icon: Mountain },
    { id: 'phuket', label: 'Phuket', icon: Waves },
    { id: 'hotels', label: 'Hotels', icon: Building2 },
    { id: 'precautions', label: 'Tips', icon: AlertTriangle },
    { id: 'packing', label: 'Packing', icon: Package },
    { id: 'restaurants', label: 'Dining', icon: Utensils },
  ];

  return (
    <div>
      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="p-8">
        <p className="text-muted-foreground">Active tab: {activeTab}</p>
      </div>
    </div>
  );
}

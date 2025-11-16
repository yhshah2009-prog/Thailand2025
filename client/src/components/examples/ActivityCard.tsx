import ActivityCard from '../ActivityCard';
import { Plane, Utensils, Landmark } from 'lucide-react';

export default function ActivityCardExample() {
  return (
    <div className="p-8 space-y-4 bg-background max-w-3xl">
      <ActivityCard
        time="11:30 AM - 12:30 PM"
        title="Bangkok → Chiang Mai Flight"
        icon={Plane}
        description="DMK to CNX, 1 hour flight"
        status="booked"
        cost="₹35,211"
      />
      <ActivityCard
        time="8:00 AM - 5:00 PM"
        title="Elephant Nature Park"
        icon={Landmark}
        description="Feed elephants, bath elephants, observe rescue elephants. NO RIDING - ethical sanctuary only"
        status="pending"
        cost="~₹21,000"
      />
      <ActivityCard
        time="Evening"
        title="Jain Dinner at Hotel"
        icon={Utensils}
        description="Spa for parents (optional). Dinner at hotel. Early sleep for Doi Inthanon tomorrow."
        status="optional"
      />
    </div>
  );
}

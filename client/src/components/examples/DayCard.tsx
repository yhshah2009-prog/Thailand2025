import DayCard from '../DayCard';
import ActivityCard from '../ActivityCard';
import { Plane, Hotel, UtensilsCrossed } from 'lucide-react';

export default function DayCardExample() {
  return (
    <div className="p-8 bg-background">
      <DayCard dayNumber={1} title="December 17 (Tuesday) - Arrival + Shopping">
        <ActivityCard
          time="00:45 AM - 06:30 AM"
          title="Mumbai → Bangkok Flight"
          icon={Plane}
          description="Red-eye flight. Arrive Suvarnabhumi Airport 06:30 AM. Immigration ~1 hour."
        />
        <ActivityCard
          time="11:00 AM"
          title="Check-in: The Narathiwas Hotel"
          icon={Hotel}
          description="Request early check-in. Rest essential after overnight flight."
          status="booked"
        />
        <ActivityCard
          time="5:30 PM"
          title="Early Jain Dinner"
          icon={UtensilsCrossed}
          description="Eat before sunset as per Jain principles at Maharani or Saras Veg Food"
        />
      </DayCard>
    </div>
  );
}

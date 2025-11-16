import InfoBox from '../InfoBox';

export default function InfoBoxExample() {
  return (
    <div className="p-8 space-y-4 bg-background max-w-3xl">
      <InfoBox variant="success" title="All Bookings Confirmed!">
        <p><strong>Total Cost Booked:</strong> ₹3,34,282 (Flights + Hotels + Activities)</p>
        <p className="mt-2"><strong>Grand Total:</strong> ₹4.84-5.34 Lakhs for 5 people</p>
      </InfoBox>

      <InfoBox variant="warning" title="Late Night Arrival - Special Arrangements!">
        <p><strong>Flight lands 23:25 (11:25 PM) on Dec 23</strong></p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>Pre-book airport pickup (₹800-1,000)</li>
          <li>Email hotel about late check-in</li>
          <li>Keep toddler entertained during evening flight</li>
        </ul>
      </InfoBox>

      <InfoBox variant="info" title="Bangkok Theme: Shopping + Culture">
        <p>Focus on family-friendly activities, shopping for everyone, Jain dining, and evening entertainment</p>
      </InfoBox>

      <InfoBox variant="danger" title="Critical Alerts">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Dec 20:</strong> Don Mueang (DMK) airport, NOT Suvarnabhumi!</li>
          <li><strong>Jain Food:</strong> Eat before sunset daily</li>
        </ul>
      </InfoBox>
    </div>
  );
}

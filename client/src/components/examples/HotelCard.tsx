import HotelCard from '../HotelCard';

export default function HotelCardExample() {
  return (
    <div className="p-8 bg-background max-w-3xl space-y-6">
      <HotelCard
        name="The Narathiwas Hotel & Residence"
        location="36 Narathiwas-Ratchanakarin Road, Sathorn, Bangkok 10120"
        dates="Dec 17-20"
        cost="₹21,800"
        nights={3}
        phone="+66 2 210 9000"
        facilities={["4 Restaurants", "Spa", "Pools", "Kids Pool", "Fitness", "WiFi", "Parking"]}
        notes={[
          "2 Bedroom Suite with Balcony",
          "Breakfast for 2 included",
          "Jain food confirmation received"
        ]}
        isPaid={true}
      />

      <HotelCard
        name="Siripanna Villa Resort & Spa"
        location="Chiang Mai, Northern Thailand"
        dates="Dec 20-23"
        cost="₹45,575"
        nights={3}
        facilities={["Swimming Pools", "Spa", "Restaurant", "Gardens", "Traditional Thai Architecture"]}
        notes={[
          "Email about Jain food requirements pending"
        ]}
        isPaid={true}
      />
    </div>
  );
}

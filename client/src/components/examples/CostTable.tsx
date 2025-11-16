import CostTable from '../CostTable';

export default function CostTableExample() {
  const bookedItems = [
    {
      item: "Mumbai → Bangkok Flight",
      cost: "46,070",
      status: "paid" as const,
      notes: "Dec 17, 00:45-06:30, 5 passengers"
    },
    {
      item: "Bangkok Hotel (The Narathiwas)",
      cost: "21,800",
      status: "paid" as const,
      notes: "3 nights, Dec 17-20, 2BR Suite"
    },
    {
      item: "Safari World & Marine Park",
      cost: "10,840",
      status: "paid" as const,
      notes: "Dec 18, Full day tickets for 5"
    },
    {
      item: "Elephant Nature Park",
      cost: "~21,000",
      status: "pending" as const,
      notes: "Book 30 days in advance"
    }
  ];

  return (
    <div className="p-8 bg-background">
      <h2 className="text-2xl font-serif font-bold mb-6">Cost Breakdown</h2>
      <CostTable
        items={bookedItems}
        total="₹99,710"
        totalLabel="SUBTOTAL"
      />
    </div>
  );
}

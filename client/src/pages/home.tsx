import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import TabNavigation from "@/components/TabNavigation";
import DayCard from "@/components/DayCard";
import ActivityCard from "@/components/ActivityCard";
import InfoBox from "@/components/InfoBox";
import CostTable, { CostItem } from "@/components/CostTable";
import HotelCard from "@/components/HotelCard";
import DestinationHeader from "@/components/DestinationHeader";
import { 
  Home as HomeIcon, 
  DollarSign, 
  Building2, 
  Mountain, 
  Waves, 
  AlertTriangle, 
  Package, 
  Utensils,
  Plane,
  Hotel,
  ShoppingBag,
  UtensilsCrossed,
  Landmark,
  Camera,
  Palmtree,
  Ship,
  Bus,
  TreePine
} from "lucide-react";

import heroImage from '@assets/generated_images/Thailand_destinations_hero_collage_ea19d164.png';
import bangkokImage from '@assets/generated_images/Bangkok_Grand_Palace_night_87cc0363.png';
import chiangmaiImage from '@assets/generated_images/Chiang_Mai_mountain_landscape_cb4c5cb0.png';
import phuketImage from '@assets/generated_images/Phuket_beach_sunset_scene_fb65e962.png';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: HomeIcon },
    { id: 'costs', label: 'Costs', icon: DollarSign },
    { id: 'bangkok', label: 'Bangkok', icon: Building2 },
    { id: 'chiangmai', label: 'Chiang Mai', icon: Mountain },
    { id: 'phuket', label: 'Phuket', icon: Waves },
    { id: 'hotels', label: 'Hotels', icon: Building2 },
    { id: 'precautions', label: 'Tips', icon: AlertTriangle },
    { id: 'packing', label: 'Packing', icon: Package },
    { id: 'restaurants', label: 'Dining', icon: Utensils },
  ];

  const handleViewItinerary = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const bookedCosts: CostItem[] = [
    {
      item: "Mumbai → Bangkok Flight",
      cost: "46,070",
      status: "paid",
      notes: "Dec 17, 00:45-06:30, 5 passengers"
    },
    {
      item: "Bangkok Hotel (The Narathiwas)",
      cost: "21,800",
      status: "paid",
      notes: "3 nights, Dec 17-20, 2BR Suite, Breakfast incl"
    },
    {
      item: "Safari World & Marine Park",
      cost: "10,840",
      status: "paid",
      notes: "Dec 18, Full day tickets for 5"
    },
    {
      item: "Bangkok → Chiang Mai Flight",
      cost: "35,211",
      status: "paid",
      notes: "Dec 20, 11:30-12:30, DMK to CNX, 5 passengers"
    },
    {
      item: "Chiang Mai Hotel (Siripanna Villa)",
      cost: "45,575",
      status: "paid",
      notes: "3 nights, Dec 20-23"
    },
    {
      item: "Chiang Mai → Phuket Flight",
      cost: "58,927",
      status: "paid",
      notes: "Dec 23, 21:25-23:25 (NIGHT FLIGHT!), 5 passengers"
    },
    {
      item: "Phuket Hotel (Areca Resort)",
      cost: "54,168",
      status: "paid",
      notes: "4 nights, Dec 23-27, Kids club, Jain food confirmed"
    },
    {
      item: "Carnival Magic Tickets",
      cost: "6,532",
      status: "paid",
      notes: "Phuket cultural show"
    },
    {
      item: "Phuket → Mumbai Return Flight",
      cost: "55,159",
      status: "paid",
      notes: "Dec 27, 5 passengers"
    }
  ];

  const estimatedCosts: CostItem[] = [
    {
      item: "Food & Dining",
      cost: "60,000 - 80,000",
      status: "estimated",
      notes: "Lunches, dinners, snacks (breakfasts mostly included)"
    },
    {
      item: "Local Transportation",
      cost: "20,000 - 25,000",
      status: "estimated",
      notes: "Grab/taxis, airport transfers, beach transport"
    },
    {
      item: "Activities & Tours",
      cost: "30,000 - 40,000",
      status: "estimated",
      notes: "Elephant Park, Doi Inthanon, island tours, water sports"
    },
    {
      item: "Shopping & Souvenirs",
      cost: "20,000 - 30,000",
      status: "estimated",
      notes: "Clothes, handicrafts, gifts"
    },
    {
      item: "Miscellaneous",
      cost: "20,000 - 25,000",
      status: "estimated",
      notes: "Tips, emergency, incidentals"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="Thailand Family Adventure 2024"
        subtitle="11 unforgettable days exploring Bangkok, Chiang Mai & Phuket with the whole family"
        imageUrl={heroImage}
        onViewItinerary={handleViewItinerary}
      />

      <div ref={contentRef}>
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="container mx-auto px-4 py-12 max-w-5xl">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground">Trip Overview & Summary</h2>
              
              <InfoBox variant="success" title="✅ All Bookings Confirmed!">
                <p><strong>Total Cost Booked:</strong> ₹3,34,282 (Flights + Hotels + Activities)</p>
                <p className="mt-2"><strong>Estimated Additional:</strong> ₹1.5-2.0L (Food, Transport, Shopping, Misc)</p>
                <p className="mt-2"><strong>Grand Total:</strong> ₹4.84-5.34 Lakhs for 5 people</p>
              </InfoBox>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-semibold">✈️ Flight Summary</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Dec 17:</strong> Mumbai → Bangkok (00:45-06:30) ✅</li>
                    <li><strong>Dec 20:</strong> Bangkok → Chiang Mai (11:30-12:30) ✅</li>
                    <li><strong>Dec 23:</strong> Chiang Mai → Phuket (21:25-23:25) ✅</li>
                    <li><strong>Dec 27:</strong> Phuket → Mumbai ✅</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-semibold">🏨 Accommodation Summary</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Bangkok (3N):</strong> The Narathiwas Hotel ✅</li>
                    <li><strong>Chiang Mai (3N):</strong> Siripanna Villa Resort ✅</li>
                    <li><strong>Phuket (4N):</strong> Areca Resort & Spa ✅</li>
                  </ul>
                </div>
              </div>

              <InfoBox variant="warning" title="⚠️ CRITICAL: Late Night Flight Dec 23!">
                <p><strong>Chiang Mai → Phuket flight arrives 23:25 (11:25 PM)</strong></p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Very late arrival at Areca Resort (~12:30 AM on Dec 24)</li>
                  <li>Pre-book airport pickup (₹800-1,000)</li>
                  <li>Inform hotel about late check-in</li>
                  <li>Keep toddler entertained during evening flight</li>
                  <li>Have dinner at Chiang Mai airport before flight</li>
                </ul>
              </InfoBox>

              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Quick Itinerary</h3>
                <div className="space-y-2 text-foreground">
                  <p><strong>Days 1-3 (Dec 17-19):</strong> Bangkok - Shopping, Safari World, Temples, Drone Show</p>
                  <p><strong>Days 4-6 (Dec 20-22):</strong> Chiang Mai - Elephants, Doi Inthanon, Night markets</p>
                  <p><strong>Days 7-10 (Dec 23-26):</strong> Phuket - Beach, Water sports, Island hopping, Carnival Magic</p>
                  <p><strong>Day 11 (Dec 27):</strong> Return to Mumbai</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'costs' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground">Complete Cost Breakdown</h2>
              
              <CostTable
                items={bookedCosts}
                total="₹3,34,282"
                totalLabel="TOTAL BOOKED & PAID"
              />

              <div className="mt-12">
                <h3 className="text-2xl font-serif font-semibold mb-6">Estimated Additional Expenses</h3>
                <CostTable
                  items={estimatedCosts}
                  total="₹1,50,000 - ₹2,00,000"
                  totalLabel="ESTIMATED ADDITIONAL"
                />
              </div>

              <InfoBox variant="success" title="💰 Grand Total Trip Cost">
                <p className="text-2xl font-bold my-4">₹4,84,282 - ₹5,34,282</p>
                <p>For 5 people, 10 nights, all-inclusive Thailand family vacation</p>
                <p className="mt-2"><strong>Per Person Cost:</strong> ₹96,856 - ₹1,06,856</p>
              </InfoBox>
            </div>
          )}

          {activeTab === 'bangkok' && (
            <div className="space-y-8">
              <DestinationHeader
                title="Bangkok: 3-Day Itinerary"
                subtitle="Shopping + Culture + Entertainment - December 17-19"
                imageUrl={bangkokImage}
              />

              <InfoBox variant="info" title="Bangkok Theme: Shopping + Culture + Entertainment">
                <p>Focus on family-friendly activities, shopping for everyone, Jain dining, and evening entertainment</p>
              </InfoBox>

              <DayCard dayNumber={1} title="December 17 (Tuesday) - Arrival + Shopping + Asiatique">
                <ActivityCard
                  time="00:45 AM - 06:30 AM"
                  title="Mumbai → Bangkok Flight"
                  icon={Plane}
                  description="Red-eye flight. Toddler should sleep. Arrive Suvarnabhumi Airport 06:30 AM. Immigration ~1 hour."
                />
                <ActivityCard
                  time="8:00 AM - 10:00 AM"
                  title="Central Village Outlet Mall"
                  icon={ShoppingBag}
                  description="Near Suvarnabhumi Airport. Outlet shopping, brands at discount, airconditioned rest after flight. Light breakfast at food court."
                />
                <ActivityCard
                  time="11:00 AM"
                  title="Check-in: The Narathiwas Hotel"
                  icon={Hotel}
                  description="Request early check-in. Rest essential after overnight flight. Toddler nap time. Light lunch at hotel."
                  status="booked"
                />
                <ActivityCard
                  time="3:00 PM - 6:00 PM"
                  title="Platinum Fashion Mall"
                  icon={ShoppingBag}
                  description="Pratunam area. Wholesale prices on clothes & accessories. Perfect for shopping for whole family, great deals."
                />
                <ActivityCard
                  time="5:30 PM"
                  title="Early Jain Dinner (before 6 PM)"
                  icon={UtensilsCrossed}
                  description="Option 1: Maharani (Indian Veg) | Option 2: Saras Veg Food (Pure Jain). Important: Eat before sunset."
                />
                <ActivityCard
                  time="7:00 PM - 9:00 PM"
                  title="Asiatique The Riverfront"
                  icon={Camera}
                  description="Riverside night market, Ferris wheel for toddler, shopping, street performances. 3km from hotel (10 min Grab)."
                />
              </DayCard>

              <DayCard dayNumber={2} title="December 18 (Wednesday) - Safari World + Digital Art">
                <ActivityCard
                  time="9:00 AM - 2:00 PM"
                  title="Safari World & Marine Park"
                  icon={Palmtree}
                  description="Drive-through safari, marine shows, bird shows. Pre-book taxi (₹840-1,120 one way, 45 mins). Toddler will LOVE the animals!"
                  status="booked"
                  cost="₹10,840"
                />
                <ActivityCard
                  time="3:00 PM - 5:00 PM"
                  title="Hotel Rest"
                  icon={Hotel}
                  description="Essential nap time for toddler. Parents rest. Young couples can explore nearby or hotel pool."
                />
                <ActivityCard
                  time="5:00 PM - 5:45 PM"
                  title="Early Jain Dinner"
                  icon={UtensilsCrossed}
                  description="Option 1: Chotivala (Pure Jain, Indra Square) | Option 2: Govinda's Vegetarian. Eat before sunset."
                />
                <ActivityCard
                  time="7:00 PM - 9:00 PM"
                  title="Space & Time Cube+ Digital Art Experience"
                  icon={Camera}
                  description="Seacon Bangkae Mall. Immersive digital art installations, perfect for family. Indoor, air-conditioned, toddler-safe!"
                />
              </DayCard>

              <DayCard dayNumber={3} title="December 19 (Thursday) - Temples + Shopping + Drone Show">
                <ActivityCard
                  time="8:00 AM - 11:00 AM"
                  title="Grand Palace & Wat Phra Kaew"
                  icon={Landmark}
                  description="Entry: ₹1,500 per adult. DRESS CODE: Cover shoulders and knees (MANDATORY). Start EARLY to avoid crowds and heat!"
                  cost="₹1,500/adult"
                />
                <ActivityCard
                  time="11:30 AM - 12:30 PM"
                  title="Wat Pho (Reclining Buddha)"
                  icon={Landmark}
                  description="Entry: ₹400 per adult. Walking distance from Grand Palace. 46-meter golden Buddha. Very toddler-friendly!"
                  cost="₹400/adult"
                />
                <ActivityCard
                  time="1:00 PM - 5:00 PM"
                  title="MBK Center Shopping"
                  icon={ShoppingBag}
                  description="8 floors of shopping! Electronics, clothes, souvenirs, local goods. Lunch at food court (vegetarian options)."
                />
                <ActivityCard
                  time="5:30 PM - 6:30 PM"
                  title="Early Dinner & Rest"
                  icon={UtensilsCrossed}
                  description="Jain dinner before sunset. Return to hotel for rest before drone show."
                />
                <ActivityCard
                  time="7:00 PM - 9:00 PM"
                  title="Drone Show at Chao Phraya River"
                  icon={Camera}
                  description="Vijit Chao Phraya / Riverside area. Arrive 60-90 minutes EARLY for good seating! Best Spot: Asiatique or riverside promenade. Spectacular light show!"
                />
              </DayCard>

              <InfoBox variant="warning" title="🛫 Next Day: Early Departure!">
                <p><strong>Dec 20:</strong> Flight at 11:30 AM from Don Mueang Airport</p>
                <p className="mt-1">Leave hotel by 8:30 AM. Pack tonight!</p>
              </InfoBox>
            </div>
          )}

          {activeTab === 'chiangmai' && (
            <div className="space-y-8">
              <DestinationHeader
                title="Chiang Mai: 3-Day Mountain Adventure"
                subtitle="Nature + Elephants + Mountain Experience - December 20-22"
                imageUrl={chiangmaiImage}
              />

              <InfoBox variant="info" title="Chiang Mai Theme: Nature + Elephants + Mountains">
                <p>Cooler weather (15-28°C), bring light jackets! Focus on ethical wildlife and natural beauty.</p>
              </InfoBox>

              <DayCard dayNumber={4} title="December 20 (Friday) - Bangkok → Chiang Mai">
                <ActivityCard
                  time="8:30 AM"
                  title="Transfer to Don Mueang Airport (DMK)"
                  icon={Bus}
                  description="⚠️ CRITICAL: Don Mueang (DMK), NOT Suvarnabhumi! Travel time: 45-60 mins. Cost: ₹500-700 Grab"
                />
                <ActivityCard
                  time="11:30 AM - 12:30 PM"
                  title="Bangkok → Chiang Mai Flight"
                  icon={Plane}
                  description="DMK to CNX, 1 hour flight"
                  status="booked"
                  cost="₹35,211"
                />
                <ActivityCard
                  time="1:00 PM"
                  title="Check-in: Siripanna Villa Resort & Spa"
                  icon={Hotel}
                  description="3 nights (Dec 20-23). Boutique villa resort with traditional Thai architecture. Swimming pools, spa, beautiful gardens"
                  status="booked"
                  cost="₹45,575"
                />
                <ActivityCard
                  time="Afternoon"
                  title="Resort Exploration & Rest"
                  icon={Hotel}
                  description="Lunch at hotel. Pool time. Toddler nap. Parents relax after morning travel."
                />
                <ActivityCard
                  time="Evening"
                  title="Chiang Mai Night Bazaar (Optional)"
                  icon={ShoppingBag}
                  description="Famous night market. Handicrafts, textiles, wood carvings. Dinner at hotel or nearby."
                  status="optional"
                />
              </DayCard>

              <DayCard dayNumber={5} title="December 21 (Saturday) - Elephant Nature Park">
                <ActivityCard
                  time="8:00 AM - 5:00 PM"
                  title="Elephant Nature Park - Ethical Sanctuary"
                  icon={TreePine}
                  description="Feed elephants, bath elephants, observe rescue elephants. NO RIDING - ethical sanctuary only. Includes hotel pickup, vegetarian lunch (request Jain), guide. Life-changing experience, toddler-safe, educational!"
                  status="pending"
                  cost="~₹21,000"
                />
                <ActivityCard
                  time="Evening"
                  title="Hotel Rest"
                  icon={Hotel}
                  description="Spa for parents (optional). Dinner at hotel. Early sleep for Doi Inthanon tomorrow."
                />
              </DayCard>

              <DayCard dayNumber={6} title="December 22 (Sunday) - Doi Inthanon National Park">
                <InfoBox variant="warning" title="🧥 BRING WARM CLOTHES!">
                  <p>Summit temperature: 10-15°C. Jackets, full pants, closed shoes for EVERYONE!</p>
                </InfoBox>

                <ActivityCard
                  time="7:30 AM - 5:00 PM"
                  title="Doi Inthanon - Roof of Thailand (2,565m)"
                  icon={Mountain}
                  description="Wachirathan Waterfall • Summit - highest point in Thailand • Ang Ka Luang Nature Trail • Twin Royal Pagodas • Hmong Hill Tribe Market. Lunch included (request Jain meal). Entry: 300 THB adult, 150 THB child"
                  status="pending"
                  cost="₹26K-34K"
                />
                <ActivityCard
                  time="Evening"
                  title="Pack for Phuket!"
                  icon={Package}
                  description="⚠️ NIGHT FLIGHT TOMORROW! Flight 21:25-23:25. Pack everything. Have dinner at hotel or airport."
                />
              </DayCard>
            </div>
          )}

          {activeTab === 'phuket' && (
            <div className="space-y-8">
              <DestinationHeader
                title="Phuket: 4-Day Beach Paradise"
                subtitle="Beach + Water Sports + Island Hopping - December 23-26"
                imageUrl={phuketImage}
              />

              <InfoBox variant="warning" title="⚠️ LATE NIGHT ARRIVAL - SPECIAL ARRANGEMENTS!">
                <p><strong>Flight lands 23:25 (11:25 PM) on Dec 23</strong></p>
                <p className="mt-1">Reach Areca Resort ~12:30 AM (after midnight!)</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Pre-book airport pickup (₹800-1,000)</li>
                  <li>Email hotel about late check-in</li>
                  <li>Have dinner at Chiang Mai airport (5:00-6:00 PM)</li>
                  <li>Keep toddler entertained/sleepy during evening flight</li>
                </ul>
              </InfoBox>

              <DayCard dayNumber={7} title="December 23 (Monday) - Chiang Mai → Phuket (NIGHT FLIGHT!)">
                <ActivityCard
                  time="Morning & Afternoon"
                  title="Leisurely Day in Chiang Mai"
                  icon={Hotel}
                  description="Late checkout possible. Pool time. Lunch at hotel. Rest before evening flight."
                />
                <ActivityCard
                  time="5:00 PM"
                  title="Early Dinner at Airport"
                  icon={UtensilsCrossed}
                  description="Arrive Chiang Mai airport by 5:00 PM. Have proper dinner at airport restaurants before flight."
                />
                <ActivityCard
                  time="21:25 - 23:25"
                  title="Chiang Mai → Phuket NIGHT FLIGHT"
                  icon={Plane}
                  description="2-hour flight. Keep toddler entertained. Bring snacks, toys, iPad."
                  status="booked"
                  cost="₹58,927"
                />
                <ActivityCard
                  time="~12:30 AM (Dec 24)"
                  title="Late Night Check-in: Areca Resort & Spa"
                  icon={Hotel}
                  description="Very late arrival! Pre-arranged pickup essential. Quick check-in and sleep!"
                  status="booked"
                  cost="₹54,168"
                />
              </DayCard>

              <DayCard dayNumber={8} title="December 24 (Tuesday) - Beach & Water Sports Day">
                <ActivityCard
                  time="Morning - Sleep In!"
                  title="Late Start After Midnight Arrival"
                  icon={Hotel}
                  description="Everyone needs extra sleep! Leisurely breakfast. Pool time at resort."
                />
                <ActivityCard
                  time="Afternoon"
                  title="Split Activities: Water Sports & Resort Relaxation"
                  icon={Waves}
                  description="Young Couples: Taxi to Kata Beach for water sports (Jet skiing, parasailing, snorkeling). Parents + Toddler: Resort activities, kids club, pools, spa treatments."
                />
                <ActivityCard
                  time="Evening"
                  title="Kata Viewpoint Sunset"
                  icon={Camera}
                  description="Family together. 10-min drive. Spectacular views. Return for dinner at resort."
                />
              </DayCard>

              <DayCard dayNumber={9} title="December 25 (Wednesday) - Christmas Day Island Hopping">
                <ActivityCard
                  time="9:00 AM - 2:00 PM"
                  title="Khai Islands Half-Day Tour"
                  icon={Ship}
                  description="Only 30 mins by boat. Calm shallow waters (toddler-safe!). Young couples can snorkel. Parents supervise toddler on beach. Includes boat, snorkel equipment, lunch (request Jain)."
                  status="pending"
                  cost="~₹14,000"
                />
                <ActivityCard
                  time="Afternoon"
                  title="Christmas Celebration at Resort"
                  icon={Hotel}
                  description="Pool time. Special Christmas dinner. Toddler gifts. Family celebration!"
                />
              </DayCard>

              <DayCard dayNumber={10} title="December 26 (Thursday) - Phuket Old Town & Carnival Magic">
                <ActivityCard
                  time="Morning"
                  title="Final Resort Morning"
                  icon={Hotel}
                  description="Last pool time. Kids club. Spa for parents. Relaxation before afternoon activities."
                />
                <ActivityCard
                  time="2:00 PM - 5:00 PM"
                  title="Phuket Old Town"
                  icon={Camera}
                  description="Colorful Sino-Portuguese architecture. Thalang Road (stroller-friendly). Photo ops. Souvenir shopping."
                />
                <ActivityCard
                  time="Evening"
                  title="Carnival Magic Show"
                  icon={Camera}
                  description="Thai cultural carnival show. Spectacular performances. Family-friendly entertainment!"
                  status="booked"
                  cost="₹6,532"
                />
              </DayCard>

              <DayCard dayNumber={11} title="December 27 (Friday) - Return to Mumbai">
                <ActivityCard
                  time="Morning"
                  title="Checkout & Optional Big Buddha"
                  icon={Hotel}
                  description="Final breakfast. Pack everything. Optional: Big Buddha visit (20 mins, free entry, 30-40 mins)"
                  status="optional"
                />
                <ActivityCard
                  time="Afternoon/Evening"
                  title="Phuket → Mumbai Return Flight"
                  icon={Plane}
                  description="Transfer to airport 1.5 hours before flight. End of amazing trip!"
                  status="booked"
                  cost="₹55,159"
                />
              </DayCard>
            </div>
          )}

          {activeTab === 'hotels' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Hotels & Contact Information</h2>
              
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
                  "Booking ID: 1948690160",
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
                  "Boutique villa resort",
                  "Email about Jain food requirements"
                ]}
                isPaid={true}
              />

              <HotelCard
                name="Areca Resort & Spa"
                location="Kathu, Phuket (7-8km from beaches)"
                dates="Dec 23-27"
                cost="₹54,168"
                nights={4}
                phone="+66 76 319 018"
                facilities={["Kids Club", "3 Pools", "Kids Pool", "Spa", "Restaurant"]}
                notes={[
                  "Construction done",
                  "Jain food available",
                  "English speaking staff",
                  "Late check-in confirmed (arrival 12:30 AM Dec 24)",
                  "Airport pickup pre-booked"
                ]}
                isPaid={true}
              />
            </div>
          )}

          {activeTab === 'precautions' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-8">⚠️ Important Precautions & Travel Tips</h2>
              
              <InfoBox variant="danger" title="🚨 CRITICAL ALERTS">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Dec 20:</strong> Don Mueang (DMK) airport, NOT Suvarnabhumi!</li>
                  <li><strong>Dec 23:</strong> NIGHT FLIGHT landing 11:25 PM - pre-book pickup!</li>
                  <li><strong>Dec 22:</strong> Doi Inthanon is COLD (10-15°C) - bring jackets!</li>
                  <li><strong>Jain Food:</strong> Eat before sunset daily</li>
                </ul>
              </InfoBox>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">👴👵 For Parents (65 years)</h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>All hotels have elevators ✓</li>
                    <li>Moderate walking only - use Grab for longer distances</li>
                    <li>Rest breaks built into each day</li>
                    <li>Spa facilities at all properties</li>
                    <li>Temples have rest areas and clean restrooms</li>
                    <li>Carry water always (hot climate)</li>
                    <li>Bathroom floors can be slippery - caution!</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">👶 For Toddler (1.8 years)</h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li>Kids clubs at Areca Phuket</li>
                    <li>Kids pools at all hotels</li>
                    <li>Stroller-friendly destinations chosen</li>
                    <li>Nap times essential - don't skip!</li>
                    <li>Carry changing mat, wipes always</li>
                    <li>Pack familiar snacks from Mumbai</li>
                    <li>Sunscreen SPF 50+ (toddler-safe)</li>
                    <li>Hat mandatory in sun</li>
                    <li>Hydrate constantly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">🏥 Medical & Safety</h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                    <li><strong>Emergency:</strong> Tourist Police 1155 (English)</li>
                    <li><strong>Ambulance:</strong> 1669</li>
                    <li><strong>Indian Embassy Bangkok:</strong> +66 2 258 0300</li>
                    <li><strong>Indian Consulate Phuket:</strong> +66 76 304 444</li>
                    <li>All hotels have 24/7 medical support</li>
                    <li>Carry fever medicine for toddler</li>
                    <li>Motion sickness pills for flights/boats</li>
                    <li>Travel insurance mandatory!</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'packing' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-8">🎒 Packing List</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-semibold">👔 Clothing</h3>
                  <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                    <li>Light, breathable clothes (hot weather)</li>
                    <li>Temple-appropriate: Covered shoulders & knees</li>
                    <li>Light jackets for Chiang Mai (15°C)</li>
                    <li>Swimwear for all</li>
                    <li>Comfortable walking shoes</li>
                    <li>Sandals/flip-flops</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-semibold">🧴 Essentials</h3>
                  <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                    <li>Sunscreen SPF 50+</li>
                    <li>Insect repellent</li>
                    <li>First aid kit</li>
                    <li>Medications</li>
                    <li>Hand sanitizer</li>
                    <li>Wet wipes</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-semibold">📱 Electronics</h3>
                  <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                    <li>Phone chargers</li>
                    <li>Power bank</li>
                    <li>Universal adapter</li>
                    <li>Camera/GoPro</li>
                    <li>Headphones</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-semibold">👶 For Toddler</h3>
                  <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                    <li>Diapers & wipes</li>
                    <li>Changing mat</li>
                    <li>Snacks from home</li>
                    <li>Favorite toys</li>
                    <li>Sun hat</li>
                    <li>Stroller (lightweight)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'restaurants' && (
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-8">🍽️ Jain Restaurants</h2>
              
              <InfoBox variant="success" title="Jain Dining in Bangkok">
                <div className="space-y-3 mt-4">
                  <div>
                    <p className="font-semibold">Saras Veg Food</p>
                    <p className="text-sm">Pure Jain vegetarian restaurant</p>
                  </div>
                  <div>
                    <p className="font-semibold">Govinda's Vegetarian</p>
                    <p className="text-sm">ISKCON restaurant, Jain options available</p>
                  </div>
                  <div>
                    <p className="font-semibold">Chotivala</p>
                    <p className="text-sm">Pure Jain, Indra Square location</p>
                  </div>
                  <div>
                    <p className="font-semibold">Maharani Indian Veg</p>
                    <p className="text-sm">Indian vegetarian with Jain options</p>
                  </div>
                  <div>
                    <p className="font-semibold">Suananda Vegetarian</p>
                    <p className="text-sm">Thai-Chinese vegetarian cuisine</p>
                  </div>
                </div>
                <p className="mt-4 font-semibold">Tip: Save all in Google Maps, use Grab for transport, eat before sunset!</p>
              </InfoBox>

              <InfoBox variant="info" title="Important Jain Food Guidelines">
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>All hotels confirmed for Jain meal preparation</li>
                  <li>Eat before sunset (approximately 6:00-6:30 PM)</li>
                  <li>Inform restaurants about no onion, garlic, root vegetables</li>
                  <li>Pack familiar snacks from Mumbai for toddler</li>
                  <li>Request Jain meals when booking tours (Elephant Park, Doi Inthanon)</li>
                </ul>
              </InfoBox>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

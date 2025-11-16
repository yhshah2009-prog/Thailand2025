import Hero from '../Hero';
import heroImage from '@assets/generated_images/Thailand_destinations_hero_collage_ea19d164.png';

export default function HeroExample() {
  return (
    <Hero
      title="Thailand Family Adventure 2024"
      subtitle="11 unforgettable days exploring Bangkok, Chiang Mai & Phuket"
      imageUrl={heroImage}
      onViewItinerary={() => console.log('View itinerary clicked')}
    />
  );
}

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onViewItinerary: () => void;
}

export default function Hero({ title, subtitle, imageUrl, onViewItinerary }: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 
          className="mb-4 font-serif text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          data-testid="text-hero-title"
        >
          {title}
        </h1>
        <p 
          className="mb-8 max-w-2xl text-lg md:text-xl text-white/90"
          data-testid="text-hero-subtitle"
        >
          {subtitle}
        </p>
        <Button
          size="lg"
          onClick={onViewItinerary}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold backdrop-blur-sm"
          data-testid="button-view-itinerary"
        >
          View Itinerary
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-8 rounded-full border-2 border-white/60" />
      </div>
    </div>
  );
}

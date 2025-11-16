interface DestinationHeaderProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function DestinationHeader({ title, subtitle, imageUrl }: DestinationHeaderProps) {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg mb-8">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      
      <div className="relative z-10 flex h-full flex-col justify-center px-8 text-white">
        <h2 
          className="mb-2 font-serif text-4xl font-bold md:text-5xl"
          data-testid="text-destination-title"
        >
          {title}
        </h2>
        <p 
          className="text-lg text-white/90 max-w-2xl"
          data-testid="text-destination-subtitle"
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

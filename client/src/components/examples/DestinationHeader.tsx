import DestinationHeader from '../DestinationHeader';
import bangkokImage from '@assets/generated_images/Bangkok_Grand_Palace_night_87cc0363.png';

export default function DestinationHeaderExample() {
  return (
    <div className="p-8 bg-background">
      <DestinationHeader
        title="Bangkok: 3-Day Itinerary"
        subtitle="Shopping + Culture + Entertainment - December 17-19"
        imageUrl={bangkokImage}
      />
    </div>
  );
}

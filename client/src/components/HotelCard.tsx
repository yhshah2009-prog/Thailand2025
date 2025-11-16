import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Phone, CheckCircle } from "lucide-react";

interface HotelCardProps {
  name: string;
  location: string;
  dates: string;
  cost: string;
  nights: number;
  phone?: string;
  facilities: string[];
  notes?: string[];
  isPaid: boolean;
}

export default function HotelCard({ 
  name, 
  location, 
  dates, 
  cost, 
  nights,
  phone,
  facilities,
  notes,
  isPaid 
}: HotelCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-hotel-${name.replace(/\s+/g, '-').toLowerCase()}`}>
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-2xl font-serif" data-testid="text-hotel-name">
            {name}
          </CardTitle>
          {isPaid && (
            <Badge className="bg-green-600 text-white flex-shrink-0" data-testid="badge-hotel-paid">
              ✅ Paid
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <span className="text-foreground" data-testid="text-hotel-location">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="text-foreground" data-testid="text-hotel-dates">
              {dates} ({nights} nights)
            </span>
          </div>
          {phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-foreground" data-testid="text-hotel-phone">{phone}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-primary" data-testid="text-hotel-cost">
              {cost}
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sm">Facilities:</h4>
          <div className="flex flex-wrap gap-2">
            {facilities.map((facility, index) => (
              <Badge key={index} variant="secondary" data-testid={`badge-facility-${index}`}>
                {facility}
              </Badge>
            ))}
          </div>
        </div>

        {notes && notes.length > 0 && (
          <div className="space-y-2">
            {notes.map((note, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-foreground" data-testid={`text-hotel-note-${index}`}>{note}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

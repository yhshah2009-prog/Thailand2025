# Thailand Trip Itinerary Website - Design Guidelines

## Design Approach
**Hybrid Approach**: Clean design system foundation with travel-inspired visual elements
- Primary inspiration: Airbnb's card aesthetics + Linear's typography clarity
- Focus on scannable information hierarchy with engaging travel visuals
- Balance between utility (clear schedules) and inspiration (travel excitement)

## Core Design Principles
1. **Information Clarity**: Quick-scan timeline format with clear visual hierarchy
2. **Travel Excitement**: Engaging imagery and warm, inviting atmosphere
3. **Mobile-First Planning**: Optimized for on-the-go trip reference
4. **Print-Ready**: Clean layout that works both digital and printed

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Inter' (body, UI elements, schedules)
- Accent: 'Playfair Display' (hero titles, section headers)

**Type Scale**:
- Hero Title: 3.5rem/4rem (Playfair, bold)
- Section Headers: 2rem/2.5rem (Playfair, semibold)
- Day Headers: 1.5rem (Inter, bold)
- Activity Titles: 1.125rem (Inter, semibold)
- Body Text: 1rem (Inter, regular)
- Time Labels: 0.875rem (Inter, medium)
- Small Print: 0.75rem (Inter, regular)

## Layout System

**Spacing Units** (Tailwind):
- Standard spacing: 2, 4, 6, 8, 12, 16, 24
- Section padding: py-16 (mobile), py-24 (desktop)
- Card spacing: p-6 (mobile), p-8 (desktop)
- Grid gaps: gap-4 (mobile), gap-6 (desktop)

**Container Strategy**:
- Max width: max-w-6xl for content, max-w-7xl for full sections
- Content width: max-w-4xl for timeline/itinerary content
- Full-bleed sections: Hero, footer

## Component Library

### Hero Section
- Full-viewport hero (100vh) with destination image collage/montage
- Centered content: Trip title, dates, destination count
- Subtle gradient overlay for text readability
- Floating CTA button with blur backdrop: "View Itinerary"

### Navigation
- Fixed top bar: Logo/trip name, destination tabs (Bangkok, Chiang Mai, Phuket), quick links
- Mobile: Hamburger menu with smooth slide-out drawer
- Active tab indicator with subtle animation
- Floating quick-nav on scroll (desktop only)

### Tabbed Destination Sections
- Horizontal tab navigation below hero
- Tab buttons: Pill-shaped with icon + destination name
- Active state: Filled background, inactive: outline only
- Smooth content transition on tab change

### Day Cards
- Timeline format with left-aligned day number badge
- Card structure: Day number circle + date header + activity list
- Activities in chronological order with time stamps
- Subtle left border accent connecting timeline

### Activity Blocks
- Compact card format within day cards
- Structure: Time badge → Icon + Title → Description
- Icons: Use Heroicons for activity types (food, transport, landmark, etc.)
- Expandable details on tap/click for mobile optimization

### Info Boxes (Alerts)
- Four variants: Info (blue), Success (green), Warning (amber), Error (red)
- Rounded corners, subtle background tint, left border accent
- Icon + bold heading + body text
- Used for booking status, important notes, tips

### Location/Booking Cards
- Grid layout: 2-column (desktop), 1-column (mobile)
- Card content: Image thumbnail + name + status badge + cost
- Status badges: "Booked" (green), "To Book" (amber), "Optional" (gray)
- Hover lift effect on desktop

### Footer
- Three columns: Quick Links, Destinations, Trip Summary
- Social sharing buttons for trip
- Emergency contacts section
- Print button (triggers print-friendly CSS)

## Interaction Patterns

**Minimal Animations**:
- Tab switching: 300ms fade transition
- Card hover: Subtle lift (2px) + shadow increase
- Scroll navigation: Smooth scroll behavior
- Activity expansion: Accordion-style with 200ms ease

**No Animations**:
- Avoid scroll-triggered effects
- No parallax or heavy transitions
- Keep focus on content readability

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column where appropriate)
- Desktop: > 1024px (full multi-column layout)

**Mobile Optimizations**:
- Sticky date headers on scroll
- Collapsible activity details by default
- Bottom-anchored floating action buttons
- Simplified navigation drawer

## Images Strategy

**Hero Section**:
- Large hero image: Thailand destination montage (temples, beaches, elephants)
- Aspect ratio: 16:9 landscape
- Description: Vibrant collage showing Bangkok temples, Chiang Mai mountains, and Phuket beaches in a seamless composition
- Gradient overlay: Dark bottom fade for text legibility

**Section Headers**:
- Small landscape images for each destination tab
- Bangkok: Grand Palace or night market
- Chiang Mai: Mountain landscape or elephant sanctuary
- Phuket: Beach sunset scene

**Location Cards** (inline thumbnails):
- Hotel property photos (where available)
- Attraction preview images
- Activity type illustrations

## Accessibility Requirements

- WCAG AA compliant contrast ratios throughout
- Keyboard navigation for all interactive elements
- Focus indicators on all clickable items
- Semantic HTML structure (proper heading hierarchy)
- Alt text for all images
- Screen reader friendly time formats
- Print stylesheet for offline use

## Print-Specific Styling
- Remove fixed navigation and decorative elements
- Expand all collapsed sections
- Black and white optimized
- Page breaks between days
- Include all booking references and costs
- Emergency contact info on every page
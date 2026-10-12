/**
 * Central configuration for Marín Window Services INC.
 * Edit all business details, phone numbers, service areas, images, and links here.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  phoneDisplay: string;
  phoneRaw: string;
  phoneTel: string;
  serviceArea: string;
  leadName: string;
  rating: number;
  reviewCount: number;
  // PLACEHOLDER: Update with your official Google Business Profile review link when ready
  googleReviewsUrl: string;
  // PLACEHOLDER: Set your Formspree/EmailJS/API endpoint here (leave empty for demo simulation)
  formBackendUrl: string;
  images: {
    heroHome: string;
    heroHomeAlt: string;
    commercial: string;
    residential: string;
    windowSparkle: string;
    crewWorking: string;
  };
  colors: {
    navy: string;
    sky: string;
    gold: string;
  };
}

export const SITE_CONFIG: BusinessConfig = {
  name: 'Marín Window Services INC',
  tagline: 'Windows So Clean, You’ll Forget They’re There.',
  phoneDisplay: '+1 (773) 329-1755',
  phoneRaw: '7733291755',
  phoneTel: 'tel:+17733291755',
  // Service area editable constant (Chicago & surrounding 773/suburb area)
  serviceArea: 'Chicago, IL and surrounding suburbs',
  leadName: 'Fernando',
  rating: 5.0,
  reviewCount: 11,
  // PLACEHOLDER: Replace with your actual Google Business listing URL
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Marin+Window+Services+INC+Chicago',
  // PLACEHOLDER: Replace with your form submission endpoint (e.g., https://formspree.io/f/your_form_id)
  formBackendUrl: '',
  images: {
    heroHome: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    heroHomeAlt: 'Sunlit modern room with massive spotless clear glass windows overlooking city greenery',
    commercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    residential: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    windowSparkle: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    crewWorking: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  colors: {
    navy: '#0B1F3A',
    sky: '#0EA5E9',
    gold: '#F59E0B',
  },
};

export interface CustomerReview {
  author: string;
  quote: string;
  rating: number;
  initials: string;
  source: string;
}

export const REAL_REVIEWS: CustomerReview[] = [
  {
    author: 'Dorina Aguilar-Rasmussen',
    quote: 'Fernando and his team did a fantastic job cleaning our windows. They were efficient and thorough. Our windows have never looked better. We will hire them again in the future.',
    rating: 5,
    initials: 'DA',
    source: 'Google Review',
  },
  {
    author: 'Jenni Grover',
    quote: 'We had a fantastic experience with this business! The crew was lovely, our windows have never looked better, and the price was very fair. We plan to hire them annually. Thanks Fernando and team!',
    rating: 5,
    initials: 'JG',
    source: 'Google Review',
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Window Cleaning',
    description: 'Transform your home with sparkling clarity. We safely clean single-family homes, townhouses, and condos inside and out.',
    details: 'Streak-free glass, hand-detailed edges, and gentle treatment of your home interiors.',
  },
  {
    id: 'commercial',
    title: 'Commercial & Storefront',
    description: 'Make a crisp first impression on customers. Professional glass care for retail boutiques, cafes, offices, and street-level businesses.',
    details: 'Flexible scheduling to prevent business disruption with immaculate storefront presentation.',
  },
  {
    id: 'interior-exterior',
    title: 'Interior & Exterior Window Care',
    description: 'Complete dual-sided treatments that remove stubborn outdoor road film, grime, and indoor dust, smudges, and pet prints.',
    details: 'Shoe covers worn indoors, drop cloths used, and meticulous frame wiping included.',
  },
  {
    id: 'screens-tracks',
    title: 'Screen & Track Cleaning',
    description: 'Fresh glass deserves clean frames. We deep-clean mesh window screens and vacuum/brush dusty window tracks and sills.',
    details: 'Prevents dirt buildup, smooths sliding operation, and preserves your window hardware.',
  },
  {
    id: 'post-construction',
    title: 'Post-Construction Cleaning',
    description: 'Specialized glass restoration following renovations, painting, or new construction. We remove stickers, paint overspray, and plaster.',
    details: 'Scratch-free scraping techniques and safe chemical solutions designed for fresh builds.',
  },
  {
    id: 'recurring',
    title: 'Recurring / Annual Maintenance Plans',
    description: 'Keep your views crystal clear year-round. Preferred scheduling for seasonal (spring/fall) or annual window care visits.',
    details: 'Hassle-free upkeep trusted by our loyal repeat clients throughout the Chicago area.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'How often should I have my windows professionally cleaned?',
    answer: 'Most homeowners in the Chicago area find that having windows cleaned once or twice a year—typically in spring to clear winter grime and in autumn before the cold months—keeps glass in pristine condition. Commercial storefronts and high-traffic spaces often benefit from monthly or quarterly service.',
  },
  {
    question: 'Do you clean window screens and sill tracks?',
    answer: 'Yes! We offer comprehensive screen washing and track cleaning as part of our full-service packages. Cleaning the screens and vacuuming/wiping the tracks ensures dirt doesn’t blow right back onto your freshly cleaned glass.',
  },
  {
    question: 'Do I need to be home for the cleaning?',
    answer: 'For exterior-only window cleanings, you do not need to be home as long as we have gate access and pets are kept inside. For interior cleanings, someone over 18 will need to be present to grant entry.',
  },
  {
    question: 'What happens if it rains on my scheduled day?',
    answer: 'Light rain generally does not affect window cleaning, as clean rain alone doesn’t dirty glass (dirt and dust on windows do!). However, in the event of heavy downpours, high winds, or severe storms, we will promptly contact you to reschedule for the earliest convenient dry day.',
  },
  {
    question: 'How is pricing determined?',
    answer: 'Our pricing is fair, transparent, and based on the number and size of windows, accessibility, whether both interior and exterior are requested, and optional add-ons like screens and tracks. We provide clear upfront quotes with no hidden fees.',
  },
  {
    question: 'Do you offer recurring or annual maintenance plans?',
    answer: 'Yes! Many of our clients hire Fernando and the crew on an annual or bi-annual basis. Recurring scheduling ensures priority booking during peak spring and fall seasons.',
  },
];

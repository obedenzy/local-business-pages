import type { Icon } from '@heroicons/react/24/solid'; // Import Icon type if needed, but we'll use strings

// Define a type for the highlight that uses a string for the icon name
interface BusinessHighlight {
  id: number;
  text: string;
  iconName: string; // Store icon name as a string
}

export interface ServiceProvider {
  id: string;
  name: string;
  address: string;
  rating: number;
  reviews: number;
  isSuperPro: boolean;
  isApprovedPro: boolean;
  customerSays: string;
  localQuotesRequested: number;
  yearsExperience: number;
  description: string;
  recentReview: {
    author: string;
    date: string;
    text: string;
  };
  logoUrl: string;
  // Updated fields based on detail page structure
  businessHighlights: BusinessHighlight[]; // Use the new type
  servicesOffered: string[];
  servicesNotOffered: string[];
  amenities: { name: string; available: boolean }[];
  acceptedPaymentMethods: string[];
  recentProjects: { id: number; title: string; image: string }[];
  pastProjectPhotos: string[];
  reviewDetails: {
    average: number;
    count: number;
    breakdown: { stars: number; percentage: number }[];
    categoryRatings: { name: string; score: number }[];
    reviews: {
      id: string;
      author: string;
      rating: number;
      date: string;
      verified: boolean;
      category: string;
      text: string;
    }[];
    reviewCategories: { name: string; count: number }[];
  };
  licensing: { name: string; verified: boolean; details: string | null }[];
  serviceCategories: string[];
  faqs: { q: string; a: string }[];
  serviceHours: Record<string, string>;
}

export const staticProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Eco Plumbers, Electricians, and HVAC Technicians',
    address: '4691 Northwest Pkwy',
    rating: 4.67,
    reviews: 3713,
    isSuperPro: false,
    isApprovedPro: true,
    customerSays: 'Super punctual',
    localQuotesRequested: 247,
    yearsExperience: 18,
    description: 'We come through for you when you need us to! Eco Plumbers, Electricians, and HVAC Technicians provides excellent service and craftsmanship by our highly skilled team of tradespersons, whether you need a repair, an upgrade or a full replacement to your plumbing or sewer systems, heating and cooling systems or your electrical system. Our goal is to help you explore your options so that you can make the best buying decis...',
    recentReview: {
      author: 'POOYA YOUSEFI',
      date: 'March 2025',
      text: 'was great. He was polite, professional and efficient re time. He did a great job, explained photos and what was involved in the job. He seems to really enjoy his work. My husband and I and 2 weimaraners all liked him!!'
    },
    logoUrl: 'https://i.pravatar.cc/80?img=eco', // Using pravatar with a seed
    // Use icon names (strings)
    businessHighlights: [
      { id: 1, text: "24/7 Emergency Service", iconName: "WrenchScrewdriverIcon" },
      { id: 2, text: "Locally Owned & Operated", iconName: "UsersIcon" }
    ],
    servicesOffered: ["Plumbing Repair", "Drain Cleaning", "Water Heater Install", "HVAC Repair", "Electrical Panel Upgrade"],
    servicesNotOffered: ["Appliance Repair", "Roofing"],
    amenities: [{ name: "Free Estimates", available: true }, { name: "Financing Available", available: true }],
    acceptedPaymentMethods: ["Visa", "Mastercard", "Amex", "Discover", "Check", "Cash"],
    recentProjects: [{ id: 1, title: "Furnace Replacement", image: "https://images.unsplash.com/photo-1602028915239-50c0d2ee00ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" }],
    pastProjectPhotos: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
      "https://images.unsplash.com/photo-1617103995439-594354f63164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
    ],
    reviewDetails: {
      average: 4.7, count: 3713, breakdown: [{ stars: 5, percentage: 80 }, { stars: 4, percentage: 10 }, { stars: 3, percentage: 5 }, { stars: 2, percentage: 3 }, { stars: 1, percentage: 2 }],
      categoryRatings: [{ name: "Quality", score: 4.8 }, { name: "Value", score: 4.5 }, { name: "Professionalism", score: 4.9 }, { name: "Responsiveness", score: 4.7 }, { name: "Punctuality", score: 4.9 }],
      reviews: [{ id: 'r1-1', author: 'Jane D.', rating: 5.0, date: '03/2025', verified: true, category: 'HVAC', text: 'Excellent service, very professional and quick!' }],
      reviewCategories: [{ name: "Plumbers", count: 1500 }, { name: "Electricians", count: 1200 }, { name: "HVAC", count: 1013 }]
    },
    licensing: [{ name: "State Plumbing License", verified: true, details: "License #12345" }, { name: "Insured", verified: true, details: null }],
    serviceCategories: ["Plumbing", "Electrical", "HVAC"],
    faqs: [{ q: "Do you offer financing?", a: "Yes, we offer financing options. Please contact us for details." }],
    serviceHours: { Sunday: "Closed", Monday: "Open 24 hours", Tuesday: "Open 24 hours", Wednesday: "Open 24 hours", Thursday: "Open 24 hours", Friday: "Open 24 hours", Saturday: "Open 24 hours" }
  },
  {
    id: '2',
    name: 'Susil Site Works LLC',
    address: '9965 Perryton Road',
    rating: 5.00,
    reviews: 3,
    isSuperPro: false,
    isApprovedPro: true,
    customerSays: 'Quick response',
    localQuotesRequested: 25,
    yearsExperience: 0, // Assuming unknown or not specified clearly
    description: 'We do pipe work of all kinds. We do basements, foundations, driveways ,brush clearing, dirt hauling , gravel hauling , swales . All dirt work needs. Also licensing in sewer and water. Also do water taps 3/4 to 2 inch size. Some landscaping as well.',
    recentReview: {
      author: 'Don J',
      date: 'January 2025',
      text: '"Russ and his son did a great job and were very responsive to our needs. I would absolutely use his services again."'
    },
    logoUrl: 'https://i.pravatar.cc/80?img=susil', // Using pravatar with a seed
    // Use icon names (strings)
    businessHighlights: [
      { id: 1, text: "Family Owned & Operated", iconName: "UsersIcon" },
      { id: 2, text: "Emergency Services Offered", iconName: "WrenchScrewdriverIcon" },
    ],
    servicesOffered: [
      "Sewer and water lines (outside of the house)",
      "Water taps 3/4 to 2 inch size",
      "Basements",
      "Foundations",
      "Driveways",
      "Brush clearing",
      "Dirt hauling",
      "Gravel hauling",
      "Swales",
      "Some landscaping",
    ],
    servicesNotOffered: [
      "Any plumbing services inside the home",
      "Not certified for certain specialized tasks (example)",
    ],
    amenities: [
      { name: "Free Estimates", available: true },
      { name: "Emergency Services", available: true },
    ],
    acceptedPaymentMethods: ["Check"],
    recentProjects: [
      { id: 1, title: "Driveway rebuild", image: "https://images.unsplash.com/photo-1589917038042-4d7998896c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" }
    ],
    pastProjectPhotos: [
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
    ],
    reviewDetails: {
      average: 5.0,
      count: 3,
      breakdown: [
        { stars: 5, percentage: 100 }, { stars: 4, percentage: 0 }, { stars: 3, percentage: 0 }, { stars: 2, percentage: 0 }, { stars: 1, percentage: 0 },
      ],
      categoryRatings: [
        { name: "Quality", score: 5.0 }, { name: "Value", score: 5.0 }, { name: "Professionalism", score: 5.0 }, { name: "Responsiveness", score: 5.0 }, { name: "Punctuality", score: 5.0 },
      ],
      reviews: [
        { id: 'r1', author: 'Don J.', rating: 5.0, date: '01/2025', verified: true, category: 'Plumbing', text: 'Russ and his son did a great job and were very responsive to our needs. I would absolutely use his services again.' },
        { id: 'r2', author: 'Dave S.', rating: 5.0, date: '10/2024', verified: true, category: 'Landscaping, Plumbing, +1 More', text: 'On time, in budget, professional work. Brice is a great honest businessman and I proudly stand as a reference for him and his work.' },
        { id: 'r3', author: 'Eric -.', rating: 5.0, date: '10/2024', verified: true, category: 'Landscaping, Plumbing, +1 More', text: 'This guy knows his stuff.... Always interested in doing the job the right way' },
      ],
      reviewCategories: [
        { name: "Plumbers", count: 3 }, { name: "Lawn & Landscaping", count: 2 }, { name: "Excavating", count: 2 },
      ]
    },
    licensing: [
      { name: "Bonded", verified: true, details: null },
      { name: "Insured", verified: true, details: null },
      { name: "Licensed*", verified: true, details: "Contact business to see additional licenses." },
      { name: "Eco-friendly Accreditations", verified: true, details: "Specific accreditations details here." },
    ],
    serviceCategories: ["Plumbing", "Landscaping", "Excavating"],
    faqs: [
      { q: "How is Susil Site Works LLC overall rated?", a: "Susil Site Works LLC has an overall rating of 5.0 stars based on 3 reviews." },
      { q: "What days are Susil Site Works LLC open?", a: "Monday-Friday: 9:00 AM - 7:00 PM, Saturday: 10:00 AM - 3:00 PM, Sunday: Closed." },
      { q: "What payment options does Susil Site Works LLC provide?", a: "Susil Site Works LLC accepts Check." },
      { q: "Does Susil Site Works LLC offer free estimates?", a: "Yes, Susil Site Works LLC offers free estimates." },
      { q: "Does Susil Site Works LLC offer eco-friendly accreditations?", a: "Yes, Susil Site Works LLC has eco-friendly accreditations." },
      { q: "Does Susil Site Works LLC offer a senior discount?", a: "Information about senior discounts is not specified. Please contact Susil Site Works LLC directly." },
      { q: "Does Susil Site Works LLC offer emergency services?", a: "Yes, Susil Site Works LLC offers emergency services." },
      { q: "Are warranties offered by Susil Site Works LLC?", a: "Information about warranties is not specified. Please contact Susil Site Works LLC directly." },
      { q: "What services does Susil Site Works LLC offer?", a: "They offer services like sewer/water lines, basements, foundations, driveways, brush clearing, hauling, swales, and some landscaping." },
      { q: "Are there any services Susil Site Works LLC does not offer?", a: "They do not offer plumbing services inside the home." },
    ],
    serviceHours: {
      Sunday: "Closed", Monday: "9:00 AM - 7:00 PM", Tuesday: "9:00 AM - 7:00 PM", Wednesday: "9:00 AM - 7:00 PM", Thursday: "9:00 AM - 7:00 PM", Friday: "9:00 AM - 7:00 PM", Saturday: "10:00 AM - 3:00 PM",
    }
  },
   {
    id: '3',
    name: 'Apex Plumbing, Heating and Air Pros',
    address: '6663 Huntley Rd Suite M',
    rating: 3.95,
    reviews: 96,
    isSuperPro: false,
    isApprovedPro: true,
    customerSays: 'Super punctual',
    localQuotesRequested: 738,
    yearsExperience: 6,
    description: 'We pride our company on reliability, great communication, integrity, and quality work. We are experts in our trade, and will do our best to keep you as educated as we can on your particular task or project. We look forward to earning your business! Book with us online or feel free to give us a call today.',
    recentReview: {
      author: 'Joseph N',
      date: 'March 2025',
      text: '"Quick and simple service. No complaints here. Thanks for the help."'
    },
    logoUrl: 'https://i.pravatar.cc/80?img=apex', // Using pravatar with a seed
     // Use icon names (strings)
    businessHighlights: [
        { id: 1, text: "Free Estimates", iconName: "CheckCircleIcon" },
        { id: 2, text: "Weekend Availability", iconName: "ClockIcon" }
    ],
    servicesOffered: ["Leak Detection", "Pipe Repair", "Furnace Maintenance", "AC Installation"],
    servicesNotOffered: ["Septic Tank Pumping", "Electrical Wiring"],
    amenities: [{ name: "Online Booking", available: true }, { name: "Senior Discount", available: false }],
    acceptedPaymentMethods: ["Visa", "Mastercard", "Check"],
    recentProjects: [{ id: 1, title: "AC Unit Tune-up", image: "https://images.unsplash.com/photo-1542841791-1925b0cb818f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" }],
    pastProjectPhotos: [
      "https://images.unsplash.com/photo-1615851058942-49351445f6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=60",
    ],
    reviewDetails: {
      average: 4.0, count: 96, breakdown: [{ stars: 5, percentage: 50 }, { stars: 4, percentage: 20 }, { stars: 3, percentage: 15 }, { stars: 2, percentage: 10 }, { stars: 1, percentage: 5 }],
      categoryRatings: [{ name: "Quality", score: 4.1 }, { name: "Value", score: 3.8 }, { name: "Professionalism", score: 4.2 }, { name: "Responsiveness", score: 4.0 }, { name: "Punctuality", score: 4.5 }],
      reviews: [{ id: 'r3-1', author: 'Mike P.', rating: 4.0, date: '02/2025', verified: true, category: 'Plumbing', text: 'Good work, arrived on time. Would recommend.' }],
      reviewCategories: [{ name: "Plumbers", count: 50 }, { name: "HVAC", count: 46 }]
    },
    licensing: [{ name: "Insured", verified: true, details: null }],
    serviceCategories: ["Plumbing", "Heating & Cooling"],
    faqs: [{ q: "What are your service areas?", a: "We serve the greater Columbus area. Please call to confirm if we cover your specific location." }],
    serviceHours: { Sunday: "Closed", Monday: "8:00 AM - 6:00 PM", Tuesday: "8:00 AM - 6:00 PM", Wednesday: "8:00 AM - 6:00 PM", Thursday: "8:00 AM - 6:00 PM", Friday: "8:00 AM - 6:00 PM", Saturday: "9:00 AM - 1:00 PM" }
  },
  // Add more providers if needed following the structure
];

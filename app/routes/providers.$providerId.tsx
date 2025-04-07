import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useParams, Link } from "@remix-run/react";
import {
  StarIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  NoSymbolIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid'; // Import all icons used
import { staticProviders, ServiceProvider } from "~/data/providers";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

// Helper function to find provider (replace with actual data fetching later)
function getProviderById(id: string): ServiceProvider | undefined {
  return staticProviders.find(p => p.id === id);
}

// Map icon names (strings) to actual icon components
const iconMap: Record<string, React.ElementType> = {
  UsersIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ClockIcon,
  // Add other icons used in businessHighlights here if needed
};


export const loader = async ({ params }: LoaderFunctionArgs) => {
  const providerId = params.providerId;
  if (!providerId) {
    throw new Response("Not Found", { status: 404 });
  }
  const provider = getProviderById(providerId);
  if (!provider) {
    throw new Response("Provider Not Found", { status: 404 });
  }
  // Data is already structured correctly in providers.ts now
  return json({ provider });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const providerName = data?.provider?.name ?? "Service Provider";
  return [
    { title: `${providerName} - Angi Clone` },
    { name: "description", content: `Details for ${providerName}` },
  ];
};

// Simple Disclosure component for FAQs
function Disclosure({ title, children }: { title: string, children: React.ReactNode }) {
  // In a real app, use state to manage open/closed
  return (
    <details className="border-b border-gray-200 py-4">
      <summary className="flex justify-between items-center cursor-pointer font-medium text-gray-700 hover:text-gray-900">
        {title}
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </summary>
      <div className="mt-2 text-gray-600">
        {children}
      </div>
    </details>
  );
}


export default function ProviderDetail() {
  const { provider } = useLoaderData<typeof loader>();
  const params = useParams(); // Use params to potentially link back or show context

  if (!provider) {
    // This should be caught by the loader, but good practice
    return <div>Provider not found.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumbs - Static Example */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Angi</Link> /
          <span className="mx-1">Local Reviews</span> /
          <span className="mx-1">Plumbers</span> / {/* Example category */}
          <span className="mx-1">OH</span> / {/* Example state */}
          <span className="mx-1">Frazeyburg</span> / {/* Example city */}
          <span className="font-medium text-gray-700 ml-1">{provider.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Provider Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start border-b pb-6">
              <div>
                {provider.isApprovedPro && (
                  <span className="inline-flex items-center bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    <CheckCircleIcon className="h-4 w-4 mr-1" /> Approved Pro
                  </span>
                )}
                <h1 className="text-3xl font-bold text-gray-900">{provider.name}</h1>
                <div className="flex items-center mt-2">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 font-semibold text-gray-800">{provider.rating.toFixed(1)}</span>
                  <span className="ml-1 text-gray-500">({provider.reviews} Reviews)</span>
                </div>
                <p className="text-gray-600 mt-1">{provider.serviceCategories.join(', ')}</p>
                <button className="mt-3 inline-flex items-center text-sm text-blue-600 hover:underline">
                  <PhoneIcon className="h-4 w-4 mr-1" /> View phone number
                </button>
              </div>
              <div className="mt-4 sm:mt-0 flex-shrink-0">
                <img src={provider.logoUrl} alt={`${provider.name} logo`} className="w-24 h-24 object-contain border rounded-md p-1" />
              </div>
            </div>

            {/* Tab Navigation Placeholder */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {/* Active tab styling */}
                <a href="#about" className="border-red-500 text-red-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  About
                </a>
                {/* Inactive tabs */}
                <a href="#photos" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Photos
                </a>
                <a href="#reviews" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Reviews
                </a>
                 <a href="#more" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  More
                </a>
              </nav>
            </div>

            {/* About Section */}
            <section id="about" className="space-y-6 pt-6 scroll-mt-20"> {/* Added scroll-mt */}
              <h2 className="text-2xl font-semibold text-gray-800">About us</h2>
              <p className="text-gray-700">{provider.description}</p>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Business highlights</h3>
                <ul className="space-y-2">
                  {provider.businessHighlights.map(highlight => {
                    const IconComponent = iconMap[highlight.iconName]; // Get the component from the map
                    return (
                      <li key={highlight.id} className="flex items-center text-gray-700">
                        {IconComponent ? ( // Render only if icon component exists
                          <IconComponent className="h-5 w-5 mr-2 text-gray-500" />
                        ) : (
                          <span className="h-5 w-5 mr-2">?</span> // Placeholder if icon not found
                        )}
                        {highlight.text}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Services we offer</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {provider.servicesOffered.map((service, index) => <li key={index}>{service}</li>)}
                  </ul>
                  <button className="text-sm text-blue-600 hover:underline mt-2">Read more</button>
                </div>
                 <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Services we don't offer</h3>
                   <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {provider.servicesNotOffered.map((service, index) => <li key={index}>{service}</li>)}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h3>
                   <ul className="space-y-1 text-gray-700">
                     {provider.amenities.map((amenity, index) => (
                       <li key={index} className="flex items-center">
                         {amenity.available ? <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" /> : <NoSymbolIcon className="h-5 w-5 text-red-500 mr-2" />}
                         {amenity.name} <span className="ml-2 text-gray-500">({amenity.available ? 'Yes' : 'No'})</span>
                       </li>
                     ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Accepted payment methods</h3>
                   <ul className="space-y-1 text-gray-700">
                     {provider.acceptedPaymentMethods.map((method, index) => (
                       <li key={index} className="flex items-center">
                         <CreditCardIcon className="h-5 w-5 text-gray-500 mr-2" /> {method}
                       </li>
                     ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Recent Projects Section */}
            <section id="recent-projects" className="pt-6 scroll-mt-20"> {/* Added scroll-mt */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Our Recent Projects</h2>
                <a href="#" className="text-sm text-blue-600 hover:underline">View all ({provider.recentProjects.length})</a>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {provider.recentProjects.map(project => (
                  <div key={project.id} className="relative rounded-lg overflow-hidden shadow">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h4 className="text-white font-semibold">{project.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

             {/* Photos of Past Projects Section */}
            <section id="photos" className="pt-6 scroll-mt-20"> {/* Added scroll-mt */}
               <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Photos of past projects</h2>
                <a href="#" className="text-sm text-blue-600 hover:underline">View all ({provider.pastProjectPhotos.length})</a>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                 {provider.pastProjectPhotos.map((photoUrl, index) => (
                   <img key={index} src={photoUrl} alt={`Past project ${index + 1}`} className="w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" />
                 ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="pt-6 border-t mt-8 scroll-mt-20"> {/* Added scroll-mt */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Reviews</h2>
                <button className="mt-3 sm:mt-0 border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium">
                  Write a review
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Overall Rating */}
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-5xl font-bold text-gray-800">{provider.reviewDetails.average.toFixed(1)}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={`h-6 w-6 ${i < Math.round(provider.reviewDetails.average) ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-gray-500 mt-1">{provider.reviewDetails.count} Reviews</p>
                </div>

                {/* Rating Breakdown */}
                <div className="space-y-1">
                  {provider.reviewDetails.breakdown.map(item => (
                    <div key={item.stars} className="flex items-center text-sm">
                      <span className="text-gray-600 w-8">{item.stars} ★</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                      <span className="text-gray-500 w-10 text-right">{item.percentage}%</span>
                    </div>
                  ))}
                </div>

                {/* Category Ratings */}
                <div className="space-y-1 text-sm">
                  {provider.reviewDetails.categoryRatings.map(cat => (
                     <div key={cat.name} className="flex justify-between items-center">
                       <span className="text-gray-700">{cat.name}</span>
                       <div className="flex items-center">
                         <span className="font-medium text-gray-800 mr-2">{cat.score.toFixed(1)}</span>
                         <div className="flex-1 bg-gray-200 rounded-full h-2 w-24"> {/* Fixed width bar */}
                           <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(cat.score / 5) * 100}%` }}></div>
                         </div>
                       </div>
                     </div>
                  ))}
                </div>
              </div>

              {/* Filter Reviews */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Filter reviews by category</p>
                <div className="flex flex-wrap gap-2">
                  {provider.reviewDetails.reviewCategories.map(cat => (
                    <button key={cat.name} className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100">
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-6">
                <p className="text-sm text-gray-600">Showing 1-{provider.reviewDetails.reviews.length} of {provider.reviewDetails.count} reviews</p>
                {provider.reviewDetails.reviews.map(review => (
                  <div key={review.id} className="border-t pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-800">{review.author}</p>
                        <div className="flex items-center mt-1">
                           {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className={`h-4 w-4 ${i < Math.round(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                          <span className="ml-2 text-sm font-medium">{review.rating.toFixed(1)}</span>
                        </div>
                        {review.verified && (
                           <span className="mt-1 inline-flex items-center bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded">
                             <CheckCircleIcon className="h-3 w-3 mr-1" /> Verified Review
                           </span>
                        )}
                        <p className="text-sm text-gray-500 mt-1">{review.category}</p>
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <p className="mt-3 text-gray-700">{review.text}</p>
                    <button className="text-sm text-blue-600 hover:underline mt-2 flex items-center">
                      See full review <ChevronDownIcon className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

             {/* Licensing Section */}
            <section id="licensing" className="pt-6 border-t mt-8 bg-gray-50 p-6 rounded-lg scroll-mt-20"> {/* Added scroll-mt */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Licensing</h2>
              <ul className="space-y-3">
                {provider.licensing.map(lic => (
                  <li key={lic.name}>
                    <div className="flex items-center text-gray-700">
                      <ShieldCheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{lic.name}</span>
                    </div>
                    {lic.details && (
                      <div className="pl-7 mt-1">
                         <button className="text-sm text-blue-600 hover:underline flex items-center">
                           Show more <ChevronDownIcon className="h-4 w-4 ml-1" />
                         </button>
                         {/* Hidden details area - would need state in real app */}
                         {/* <p className="text-xs text-gray-500 mt-1">{lic.details}</p> */}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
               <p className="text-xs text-gray-500 mt-4">
                 State Contractor License Requirements: All statements concerning insurance, licenses, and bonds are informational only, and are self-reported... [rest of disclaimer]
               </p>
            </section>

            {/* Service Categories Section */}
            <section id="service-categories" className="pt-6 border-t mt-8 scroll-mt-20"> {/* Added scroll-mt */}
               <h2 className="text-2xl font-semibold text-gray-800 mb-3">Service Categories</h2>
               <p className="text-gray-700">{provider.serviceCategories.join(', ')}</p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="pt-6 border-t mt-8 scroll-mt-20"> {/* Added scroll-mt */}
               <h2 className="text-2xl font-semibold text-gray-800 mb-3">FAQ</h2>
               <div className="space-y-2">
                 {provider.faqs.map((faq, index) => (
                   <Disclosure key={index} title={faq.q}>
                     <p>{faq.a}</p>
                   </Disclosure>
                 ))}
               </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 sticky top-8"> {/* Made sidebar sticky */}
              <button className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition duration-150">
                Request quote
              </button>
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact information</h3>
                <div className="flex items-start text-sm text-gray-700">
                  <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
                  <span>{provider.address}</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                 <h3 className="text-lg font-semibold text-gray-800 mb-3">Service hours</h3>
                 <ul className="space-y-1 text-sm text-gray-700">
                   {Object.entries(provider.serviceHours).map(([day, hours]) => (
                     <li key={day} className="flex justify-between">
                       <span>{day}</span>
                       <span className={day === "Sunday" ? "text-gray-500" : ""}>{hours}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import type { ServiceProvider } from '~/data/providers';
import { Link } from '@remix-run/react'; // Import Link

interface ServiceProviderCardProps {
  provider: ServiceProvider;
}

export default function ServiceProviderCard({ provider }: ServiceProviderCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6 flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
        {/* Link the logo to the detail page */}
        <Link to={`/providers/${provider.id}`}>
          <img src={provider.logoUrl} alt={`${provider.name} logo`} className="max-w-full max-h-full object-contain" />
        </Link>
      </div>
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div>
            {/* Link the name to the detail page */}
            <h3 className="text-xl font-semibold text-gray-800 hover:text-red-600">
              <Link to={`/providers/${provider.id}`}>{provider.name}</Link>
            </h3>
            <p className="text-sm text-gray-500">{provider.address}</p>
            <div className="flex items-center space-x-2 mt-1 text-sm">
              <span className="text-yellow-500">{'★'.repeat(Math.round(provider.rating))}{'☆'.repeat(5 - Math.round(provider.rating))}</span>
              <span className="font-semibold">{provider.rating.toFixed(2)}</span>
              {/* Link the reviews count to the detail page reviews section (if possible/needed later) */}
              <Link to={`/providers/${provider.id}#reviews`} className="text-gray-500 hover:underline">({provider.reviews} reviews)</Link>
              {provider.isApprovedPro && <span className="text-green-600 font-medium ml-2">✓ Approved Pro</span>} {/* Added margin */}
            </div>
          </div>
          {/* Link the button to the detail page */}
          <Link to={`/providers/${provider.id}`} className="mt-4 md:mt-0 border border-red-500 text-red-500 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap">
            Request quote
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
          <div><span className="font-medium text-gray-800">Customers say:</span> {provider.customerSays}</div>
          <div><span className="font-medium text-gray-800">{provider.localQuotesRequested}</span> local quotes requested</div>
          <div><span className="font-medium text-gray-800">{provider.yearsExperience}+</span> years of experience</div>
        </div>

        {/* Link the "Show more" to the detail page */}
        <p className="text-sm text-gray-700 mb-4">{provider.description} <Link to={`/providers/${provider.id}#about`} className="text-blue-600 hover:underline">Show more</Link></p>

        <div className="bg-gray-50 p-4 rounded-md text-sm">
          <p className="text-gray-700 italic">"{provider.recentReview.text}"</p>
          <p className="text-gray-500 mt-1 text-right">- {provider.recentReview.author} on {provider.recentReview.date}</p>
        </div>
      </div>
    </div>
  );
}

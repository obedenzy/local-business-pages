import ServiceProviderCard from './ServiceProviderCard';
import { staticProviders } from '~/data/providers';

export default function ServiceProviderList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Plumbers in Pickerington</h2>
      <p className="text-sm text-gray-500 mb-6">Showing 1-3 of 3</p> {/* Updated count */}
      <div>
        {staticProviders.map((provider) => (
          <ServiceProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
      {/* Basic Pagination Placeholder - Adjusted for fewer items */}
      <nav className="flex justify-center items-center space-x-2 mt-8">
        {/* <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 cursor-not-allowed opacity-50">{'<'}</button> */}
        <button className="px-3 py-1 rounded-md bg-red-500 text-white">1</button>
        {/* <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 cursor-not-allowed opacity-50">{'>'}</button> */}
      </nav>
       <p className="text-sm text-gray-500 mt-4 text-center">Showing 1-3 of 3</p> {/* Updated count */}
    </div>
  );
}

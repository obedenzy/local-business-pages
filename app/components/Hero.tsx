import {
  BriefcaseIcon, // Handyperson
  CloudIcon, // Landscaping (placeholder)
  WrenchIcon, // Plumbing
  LightBulbIcon, // Electrical
  HomeModernIcon, // Remodeling
  BuildingStorefrontIcon, // Roofing (placeholder)
  PaintBrushIcon, // Painting
  SparklesIcon, // Cleaning
  ServerIcon, // HVAC (placeholder)
  WindowIcon, // Windows
  CubeTransparentIcon, // Concrete (placeholder)
  MapPinIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const serviceCategories = [
  { name: 'Handyperson', icon: BriefcaseIcon },
  { name: 'Landscaping', icon: CloudIcon },
  { name: 'Plumbing', icon: WrenchIcon },
  { name: 'Electrical', icon: LightBulbIcon },
  { name: 'Remodeling', icon: HomeModernIcon },
  { name: 'Roofing', icon: BuildingStorefrontIcon },
  { name: 'Painting', icon: PaintBrushIcon },
  { name: 'Cleaning', icon: SparklesIcon },
  { name: 'HVAC', icon: ServerIcon },
  { name: 'Windows', icon: WindowIcon },
  { name: 'Concrete', icon: CubeTransparentIcon },
];


export default function Hero() {
  return (
    <div className="relative bg-gray-800 text-white pt-16 pb-8 px-4 text-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519642918688-7e43b19245d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative container mx-auto max-w-3xl z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find top-rated pros in your area.</h1>
        <form className="bg-white rounded-md shadow-lg flex items-center p-2 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="How can we help?"
            className="px-4 py-3 text-gray-900 flex-grow focus:outline-none rounded-l-md"
          />
          <span className="text-gray-400 mx-2">|</span>
          <MapPinIcon className="h-5 w-5 text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="ZIP Code"
            defaultValue="43068" // Example ZIP from image
            className="px-2 py-3 text-gray-900 w-24 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-r-md ml-2"
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </form>
      </div>

      {/* Service Icons Section (moved below hero content, but visually part of the overall top section) */}
      <div className="relative container mx-auto mt-12 z-10">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-10">
          {serviceCategories.map((category) => (
            <a href="#" key={category.name} className="flex flex-col items-center text-white hover:text-red-200 transition-colors group">
              <div className="bg-red-500 group-hover:bg-red-600 rounded-md p-3 mb-1 transition-colors">
                <category.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

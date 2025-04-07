import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { StarIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Angi Clone - Find Local Pros" },
    { name: "description", content: "Find trusted local service professionals for your home projects." },
  ];
};

// Placeholder data similar to the image
const popularProjectsNearYou = [
  { id: 1, name: "Decks & Porches", rating: 3.7, reviews: "1k", price: 1890, icon: "https://via.placeholder.com/30/EF4444/FFFFFF?text=D" }, // Placeholder icon
  { id: 2, name: "Home Cleaning", rating: 4.5, reviews: "314k", price: 85, icon: "https://via.placeholder.com/30/EF4444/FFFFFF?text=C" },
  { id: 3, name: "Appliance Repair", rating: 4.7, reviews: "274k", price: 264, icon: "https://via.placeholder.com/30/EF4444/FFFFFF?text=A" },
  { id: 4, name: "Pest Control", rating: 4.8, reviews: "317k", price: 186, icon: "https://via.placeholder.com/30/EF4444/FFFFFF?text=P" },
  { id: 5, name: "Roof Repair", rating: 4.7, reviews: "613k", price: 594, icon: "https://via.placeholder.com/30/EF4444/FFFFFF?text=R" },
  { id: 6, name: "Fence Repair", rating: 4.2, reviews: "4.8k", price: 380, icon: "https://via.placeholder.com/30/EF4444/FFFFFF?text=F" },
  { id: 7, name: "Gutter Services", rating: 4.0, reviews: "427k", price: 575, icon: "https://via.placeholder.com/30/EF4444/FFFFFF?text=G" },
  { id: 8, name: "Plumbing Services", rating: 4.4, reviews: "26.7k", price: 210, icon: "https://via.placeholder.com/30/EF4444/FFFFFF?text=Pl" },
];

const popularHomeProjects = [
  { id: 1, title: "Handyperson for Small Projects", rating: 4.6, reviews: "599k", price: 158, image: "https://images.unsplash.com/photo-1593349480500-61a8041be475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "One-time Cleaning Service", rating: 4.5, reviews: "314k", price: 102, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Air Conditioning Service & Repair", rating: 4.67, reviews: "306k", price: 350, image: "https://images.unsplash.com/photo-1542841791-1925b0cb818f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" },
];

const tipTopShapeProjects = [
   { id: 1, title: "Faucet & Plumbing Repair Services", rating: 4.6, reviews: "368k", price: 226, image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" },
   { id: 2, title: "Roof Installation & Repair", rating: 4.7, reviews: "325k", price: 471, image: "https://images.unsplash.com/photo-1564078377005-39a1f4616097?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" },
   { id: 3, title: "Bathroom Remodel", rating: 4.4, reviews: "180k", price: 2500, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" }, // Reusing image
];

const placeholderArticles = [
  { id: 1, title: "How Much Does It Cost to Tile a Shower? [2025 Data]", author: "Stephanie Mickelson", date: "Mar 17, 2025", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80", excerpt: "Tiling a shower is an investment in the look and function of your home. This guide explains the factors behind the cost to tile a shower." },
  { id: 2, title: "How Much Does a Kitchen Remodel Cost? [2025 Data]", author: "René Bennett", date: "Apr 1, 2025", image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80", excerpt: "Find out the average kitchen remodel cost and where you can save money on the path to building your ideal cooking space." },
  { id: 3, title: "How Much Does a Galley Kitchen Remodel Cost? [2025 Data]", author: "Mitchell Grant", date: "Mar 14, 2025", image: "https://images.unsplash.com/photo-1505798577917-f66d2cebe8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80", excerpt: "Here is a breakdown of how much you can expect to pay to remodel your galley kitchen." },
  { id: 4, title: "How Much Does a Walk-in Shower Cost to Install? [2025 Data]", author: "Stephanie Mickelson", date: "Mar 17, 2025", image: "https://images.unsplash.com/photo-1604709177595-ee9c2540e941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80", excerpt: "Thinking of getting rid of that old bathtub and replacing it with a walk-in shower? This walk-in shower cost guide will help you plan your budget." },
  { id: 5, title: "How Much Does Shower Installation Cost? [2025 Data]", author: "Samantha Hawrylack", date: "Mar 17, 2025", image: "https://images.unsplash.com/photo-1598454449629-81d75101169a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80", excerpt: "Shower installation costs depend on size, style, and materials. No matter the budget, this guide can help you plan your budget and even save a few bucks." },
  { id: 6, title: "How Much Does Tub-to-Shower Conversion Cost? [2025 Data]", author: "Lauren Bongard", date: "Mar 17, 2025", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80", excerpt: "Various factors affect the total tub-to-shower conversion cost, including the size of the area, type of shower, materials, and labor fees." },
];


export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Popular Projects Near You */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Popular projects near you</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProjectsNearYou.map(project => (
                <Link to="#" key={project.id} className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <img src={project.icon} alt="" className="w-8 h-8 mr-3 rounded" /> {/* Placeholder Icon */}
                    <h3 className="font-semibold text-gray-800">{project.name}</h3>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{project.rating.toFixed(1)} ({project.reviews})</span>
                    <span className="mx-1">|</span>
                    <span>from ${project.price.toLocaleString()}</span>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">Price shown is the national median price of minimum job size for Angi's pre-priced offering. Actual pricing may vary.</p>
          </div>
        </section>

        {/* Cost Guides Signup */}
        <section className="py-8 bg-orange-50">
          <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Knowledge is priceless - so our cost guides are free.</h3>
              <p className="text-gray-600 mb-4 md:mb-0">Sign up to get free project cost info in your inbox.</p>
            </div>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-lg mx-auto md:mx-0">
              <div className="relative flex-grow w-full sm:w-auto">
                 <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                 <input
                  type="email"
                  placeholder="Email address"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
               <div className="relative flex-grow w-full sm:w-auto">
                 <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                 <input
                  type="text"
                  placeholder="ZIP Code"
                  defaultValue="43068"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium w-full sm:w-auto flex-shrink-0"
              >
                Sign me up
              </button>
            </form>
          </div>
        </section>

        {/* Popular Home Projects */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Popular home projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularHomeProjects.map(project => (
                <Link to="#" key={project.id} className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{project.rating.toFixed(1)} ({project.reviews})</span>
                      <span className="mx-1">|</span>
                      <span>from ${project.price.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Keep Your Home Tip-Top Shape */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Keep your home in tip-top shape</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tipTopShapeProjects.map(project => (
                <Link to="#" key={project.id} className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{project.rating.toFixed(1)} ({project.reviews})</span>
                      <span className="mx-1">|</span>
                      <span>from ${project.price.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Homeowners Guide Section */}
        <section className="py-16 bg-green-50"> {/* Changed background */}
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800">The homeowners guide to home care is here</h2>
                <p className="text-gray-600 mt-1">From average costs to expert advice, get all the answers you need to get your job done.</p>
              </div>
              <Link to="#" className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                See all articles
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {placeholderArticles.slice(0, 3).map(article => ( // Show first 3 initially
                <Link to="#" key={article.id} className="block group">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="text-xs text-gray-500 uppercase font-medium mb-1">{article.author} • {article.date}</p>
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-red-600 transition-colors mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </Link>
              ))}
            </div>
             {/* Could add a "Load More" or pagination for other articles */}
          </div>
        </section>

        {/* Popular Categories Section - Placeholder */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
             <details className="border-t border-b border-gray-200 py-4">
               <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-800 hover:text-red-600">
                 Popular Categories
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform details-open:rotate-180">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                 </svg>
               </summary>
               <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                 {/* Placeholder links */}
                 <Link to="#" className="hover:underline">Plumbing</Link>
                 <Link to="#" className="hover:underline">Electrical</Link>
                 <Link to="#" className="hover:underline">HVAC</Link>
                 <Link to="#" className="hover:underline">Handyman</Link>
                 <Link to="#" className="hover:underline">Roofing</Link>
                 <Link to="#" className="hover:underline">Painting</Link>
                 <Link to="#" className="hover:underline">Cleaning</Link>
                 <Link to="#" className="hover:underline">Landscaping</Link>
                 {/* Add more categories */}
               </div>
             </details>
          </div>
        </section>

      </main>
      <Footer />
      {/* Add CSS for details marker rotation if needed, or rely on browser default */}
      <style>{`
        details summary::-webkit-details-marker { display: none; }
        details summary { list-style: none; }
        details[open] summary svg { transform: rotate(180deg); }
      `}</style>
    </div>
  );
}

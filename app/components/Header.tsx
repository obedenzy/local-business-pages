import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            {/* Using the dark logo which looks closer to the red one in the image */}
            <img src="/logo-dark.png" alt="Angi Logo" className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="#" className="text-gray-600 hover:text-gray-900">Interior</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">Exterior</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">Lawn & Garden</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">More</Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">Articles & Advice</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="#" className="text-gray-600 hover:text-gray-900">Join as a Pro</Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">Log In</Link>
          <Link
            to="#"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}

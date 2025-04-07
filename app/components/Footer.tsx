import { Link } from "@remix-run/react";
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'; // Import icons for signup form

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Top Cities / Links */}
        <div className="text-center mb-8">
          <span className="font-semibold text-gray-700 mr-2">Top cities:</span>
          <span className="text-sm text-gray-600">
            New York | Los Angeles | Houston | Dallas | Chicago | Pittsburgh | Indianapolis | Minneapolis | Boston | Las Vegas | Atlanta | San Antonio | Cincinnati | Tampa
            {/* Added more cities from image */}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"> {/* Adjusted grid for signup */}
          {/* Sign up section */}
          <div className="lg:col-span-2"> {/* Make signup wider */}
            <h4 className="font-semibold text-gray-800 mb-3">Knowledge is priceless - so our cost guides are free.</h4>
            <p className="text-sm text-gray-600 mb-4">Sign up to get free project cost info in your inbox.</p>
            <form className="space-y-3">
              <div className="relative">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                <input type="email" placeholder="Email address" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
              </div>
              <div className="relative">
                 <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                <input type="text" placeholder="ZIP code" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500" />
              </div>
              <button type="submit" className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition duration-150">
                Sign me up
              </button>
            </form>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Homeowner services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:underline">Find local businesses</Link></li>
              <li><Link to="#" className="hover:underline">Services near me</Link></li>
            </ul>
             <h4 className="font-semibold text-gray-800 mb-3 mt-4">For service pros</h4> {/* Added from image */}
             <ul className="space-y-2 text-sm text-gray-600">
               <li><Link to="#" className="hover:underline">Register your business</Link></li>
               <li><Link to="#" className="hover:underline">Business center</Link></li>
             </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:underline">Solution center</Link></li>
              <li><Link to="#" className="hover:underline">Project cost center</Link></li>
              <li><Link to="#" className="hover:underline">FAQs</Link></li>
              <li><Link to="#" className="hover:underline">Angi Key membership</Link></li>
              <li><Link to="#" className="hover:underline">Financing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">About us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:underline">How it works</Link></li>
              <li><Link to="#" className="hover:underline">Who we are</Link></li>
              <li><Link to="#" className="hover:underline">Careers</Link></li>
              <li><Link to="#" className="hover:underline">Press</Link></li>
              <li><Link to="#" className="hover:underline">Economics & research</Link></li>
              <li><Link to="#" className="hover:underline">Investor relations</Link></li>
              <li><Link to="#" className="hover:underline">Contact us</Link></li>
              <li><Link to="#" className="hover:underline">Happiness guarantee</Link></li>
            </ul>
          </div>
        </div>

        {/* App Download */}
        <div className="text-center mb-8">
          <h4 className="font-semibold text-gray-800 mb-3">Download the app</h4>
          <div className="flex justify-center space-x-4">
            {/* Placeholder images for app store buttons - Use actual links/images if available */}
            <a href="#" aria-label="Download on the App Store">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-10" />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png" alt="Get it on Google Play" className="h-10" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/logo-dark.png" alt="Angi Clone Logo" className="h-6 mr-4" /> {/* Using dark logo */}
            <span>© {new Date().getFullYear()} Angi Clone. All Rights Reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            <Link to="#" className="hover:underline">Terms of Use</Link>
            <Link to="#" className="hover:underline">Privacy Policy</Link>
            <Link to="#" className="hover:underline">Sitemap</Link>
            <Link to="#" className="hover:underline">Accessibility Tools</Link>
            <Link to="#" className="hover:underline">Do Not Sell or Share My Personal Information</Link> {/* Added from image */}
          </div>
          {/* Social Icons Placeholder */}
          <div className="flex space-x-3">
            {/* Replace with actual icons/links later */}
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.775-.023-1.15-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.799-1.56 2.46-2.548l-.047-.02z"></path></svg></a>
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg></a>
            <a href="#" aria-label="Pinterest" className="text-gray-500 hover:text-gray-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.377-.752-.377-1.845c0-1.713 1.002-2.981 2.248-2.981 1.053 0 1.554.792 1.554 1.741 0 1.069-.674 2.667-1.011 4.128-.28 1.189.597 2.159 1.789 2.159 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.627-2.75-1.378l-.748 2.853c-.271 1.043-1.002 1.95-1.996 2.411.817.533 1.748.832 2.729.832 6.623 0 11.971-5.347 11.971-11.971C23.97 5.39 18.626 0 12.017 0z"></path></svg></a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.986 3.43 0 4.92 0 8.757v6.486c0 3.837.986 5.327 4.385 5.571 3.6.245 11.626.246 15.23 0 3.4-.244 4.385-1.734 4.385-5.571V8.757c0-3.837-.985-5.327-4.385-5.573zM9.545 15.568V7.945l6.207 3.812-6.207 3.811z"></path></svg></a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2.017c.93 0 1.303.01 1.748.032.444.022.748.087.986.177.28.105.488.247.697.456.209.209.351.417.456.697.09.238.155.542.177.986.022.445.032.818.032 1.748s-.01 1.303-.032 1.748c-.022.444-.087.748-.177.986-.105.28-.247.488-.456.697-.209.209-.417.351-.697.456-.238.09-.542.155-.986.177-.445.022-.818.032-1.748.032s-1.303-.01-1.748-.032c-.444-.022-.748-.087-.986-.177-.28-.105-.488-.247-.697-.456-.209-.209-.351-.417-.456-.697-.09-.238-.155-.542-.177-.986-.022-.445-.032-.818-.032-1.748s.01-1.303.032-1.748c.022-.444.087-.748.177-.986.105-.28.247-.488.456-.697.209-.209.417-.351.697-.456.238-.09.542-.155.986-.177.445-.022.818-.032 1.748-.032zM12 0C8.741 0 8.333.014 7.853.034c-.48.02-.947.097-1.384.258-.446.164-.854.388-1.218.752S4.38 1.82 4.216 2.266c-.16.437-.238.904-.258 1.384C3.936 4.093 3.922 4.5 3.922 7.759v.093c0 3.259.014 3.667.034 4.147.02.48.097.947.258 1.384.164.446.388.854.752 1.218s.771.588 1.218.752c.437.16.904.238 1.384.258.48.02.887.034 1.367.034h.093c3.259 0 3.667-.014 4.147-.034.48-.02.947-.097 1.384-.258.446-.164.854-.388 1.218-.752s.588-.771.752-1.218c.16-.437.238-.904.258-1.384.02-.48.034-.887.034-1.367v-.093c0-3.259-.014-3.667-.034-4.147-.02-.48-.097-.947-.258-1.384-.164-.446-.388-.854-.752-1.218s-.771-.588-1.218-.752c-.437-.16-.904-.238-1.384-.258C16.078.014 15.67 0 12.41 0H12zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd"></path></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

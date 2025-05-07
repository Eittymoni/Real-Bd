import { FaFacebookF, FaInstagram } from "react-icons/fa"


export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gray-100 py-10 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Icons */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800">bd.Real</h2>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              >
                < FaFacebookF  />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <FaInstagram  />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Listings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Terms Of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-600 space-y-1">
              <p>101 West Broadway, Ste 300</p>
              <p>San Diego, CA 92101</p>
              <p className="mt-2">+1 574941-4985213</p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1a3b39] text-white py-3 px-4 text-center text-sm">
        Copyright © 2024 bd.Real® All Rights Reserved
      </div>
    </footer>
  )
}

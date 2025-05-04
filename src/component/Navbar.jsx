import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Listings', 'Services', 'About Us', 'Rent', 'Sell', 'Buy'];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className=" font-bold text-[#020202] text-3xl">
          <span className="">bd</span>
          <span className="">.Real</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-base text-[#91999A]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-[#020202] transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-[#183835] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0f2f2f] transition"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-4 pb-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-gray-700 hover:text-black transition"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center bg-[#143C3C] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0f2f2f] transition"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}

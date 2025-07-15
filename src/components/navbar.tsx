

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  User,
  ShoppingBag,
  Heart,
  Menu,
  X,
} from "lucide-react";

export default function CustomNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [wishlistCount] = useState(0);
  const [cartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const dropdownItems: Record<string, string[]> = {
    "What's New": ["Latest Arrivals", "Featured Items", "Trending Now"],
    "Shop by Designs": ["Modern", "Classic", "Minimalist", "Vintage"],
    "Shop by Room": ["Living Room", "Bedroom", "Kitchen"],
    "Shop by Collection": ["Summer", "Winter", "Limited Edition", "Bestsellers"],
  };

  return (
    <header className="bg-pure-white border-b border-gray-100 font-sk z-50 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Menu */}
          <div className="flex items-center space-x-10">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-14 w-auto object-contain"
            />

            {/* Dropdowns (only on md and up) */}
            <nav className="hidden md:flex items-center space-x-6 text-md font-normal text-medium-gray relative">
              {Object.entries(dropdownItems).map(([label, items]) => (
                <div key={label} className="relative">
                  <button
                    onClick={() => toggleDropdown(label)}
                    className="text-medium-gray hover:text-dark-gray hover:bg-soft-white px-2 py-1 rounded flex items-center gap-1"
                  >
                    {label}
                    {activeDropdown === label ? (
                      <ChevronUp className="w-3 h-3" />
                    ) : (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  <div
                    className={`absolute top-full mt-2 bg-white shadow-lg rounded p-2 w-48 z-50 transition-all duration-200 ease-in-out transform ${
                      activeDropdown === label
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {items.map((item) => (
                      <div
                        key={item}
                        className="px-3 py-1 hover:bg-gray-100 rounded cursor-pointer text-medium-gray"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Icons and Search */}
          <div className="flex items-center space-x-3">
            {/* Search Bar and Icon */}
            <div className="flex items-center">
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showSearch ? "w-48 opacity-100 ml-2" : "w-0 opacity-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none text-medium-gray placeholder:text-medium-gray w-full"
                />
              </div>
              <button
                className="text-medium-gray hover:text-dark-gray hover:bg-soft-white p-2 rounded"
                onClick={() => setShowSearch((prev) => !prev)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300 mx-1 hidden md:block" />

            {/* User */}
            <button className="hidden md:block text-medium-gray hover:text-dark-gray hover:bg-soft-white p-2 rounded">
              <User className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <button className="relative text-medium-gray hover:text-dark-gray hover:bg-soft-white p-2 rounded">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>

            {/* Cart */}
            <button className="relative text-medium-gray hover:text-dark-gray hover:bg-soft-white p-2 rounded">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-medium-gray hover:text-dark-gray hover:bg-soft-white p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-20 right-0 w-full bg-white shadow-lg z-40 px-6 py-4 space-y-4 transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {Object.entries(dropdownItems).map(([label, items]) => (
          <div key={label}>
            <button
              onClick={() => toggleDropdown(label)}
              className="flex justify-between w-full text-medium-gray text-sm font-medium"
            >
              {label}
              {activeDropdown === label ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div
              className={`pl-4 pt-1 space-y-1 transition-all duration-200 ease-in-out ${
                activeDropdown === label
                  ? "opacity-100 max-h-40"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              {items.map((item) => (
                <div
                  key={item}
                  className="text-sm text-medium-gray hover:text-dark-gray"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}

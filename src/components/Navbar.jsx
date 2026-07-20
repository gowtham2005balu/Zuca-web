import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onGetStarted }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About us', value: 'about' },
    { label: 'Careers', value: 'careers' },
    { label: 'Providers', value: 'providers' },
    { label: 'Blog', value: 'blog' },
    { label: 'Help Center', value: 'helpcenter' }
  ];

  const handleNavClick = (value) => {
    if (value === 'providers') {
      alert(`Welcome to our Providers Portal! This is a mock link for the Zuca demo.`);
      return;
    }
    setCurrentPage(value);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 bg-transparent">
      <nav className="max-w-7xl mx-auto bg-white border border-gray-200/60 rounded-full px-6 sm:px-8 shadow-sm">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="text-2xl font-black text-[#1d4ed8] tracking-tight">
              Zuca
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-sm font-semibold transition-all duration-200 hover:text-[#1d4ed8] cursor-pointer relative py-2 ${currentPage === item.value
                    ? 'text-[#1d4ed8]'
                    : 'text-gray-500'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onGetStarted}
              className="bg-[#1d4ed8] hover:bg-[#1d4ed8]/95 text-white px-6 py-2.5 rounded-full font-bold text-xs transition-all duration-300 shadow-md shadow-blue-600/10 hover:scale-[1.01] cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-[#1d4ed8] focus:outline-none transition-colors cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border border-gray-100 mt-2 rounded-2xl px-4 py-3 space-y-3 shadow-lg max-w-7xl mx-auto text-left">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`block w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${currentPage === item.value
                  ? 'bg-blue-50 text-[#1d4ed8]'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onGetStarted();
              }}
              className="w-full bg-[#1d4ed8] text-white text-center py-2.5 rounded-full font-bold text-xs shadow-md shadow-blue-600/10 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

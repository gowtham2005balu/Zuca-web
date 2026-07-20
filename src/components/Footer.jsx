import React from 'react';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'CLIENTS',
      links: [
        { label: 'Find Professionals', href: '#' },
        { label: 'Instant Booking', href: '#' },
        { label: 'Schedule Booking', href: '#' },
        { label: 'Beauty Services', href: '#' },
        { label: 'Nearby Salons', href: '#' },
      ],
    },
    {
      title: 'PROVIDERS',
      links: [
        { label: 'Join Zuca', href: '#' },
        { label: 'Provider Dashboard', href: '#' },
        { label: 'Manage Appointments', href: '#' },
        { label: 'Grow Your Business', href: '#' },
        { label: 'Success Stories', href: '#' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About Us', page: 'about' },
        { label: 'Careers', page: 'careers' },
        { label: 'Blog', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'FAQs', href: '#' },
        { label: 'Booking Guide', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
    {
      title: 'LEGAL',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Accessibility', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white text-gray-500 pt-20 pb-10 rounded-t-[48px] relative z-20 -mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 border-b border-gray-100 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <svg className="h-6 w-6 text-[#2563eb] fill-current" viewBox="0 0 24 24">
                <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15Z" />
              </svg>
              <span className="text-2xl font-extrabold text-gray-900 tracking-tight uppercase">
                Zuca
              </span>
            </div>
            <p className="text-[#2563eb] text-base font-bold tracking-tight">
              Beauty booking made simple.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm font-medium">
              Discover trusted beauty professionals, book instantly, schedule ahead, or visit salons and studios near you.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2">
              <a href="#" className="h-9 w-9 bg-gray-50 text-gray-600 hover:bg-[#2563eb] hover:text-white rounded-xl flex items-center justify-center transition-all hover:scale-105" aria-label="Instagram">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 bg-gray-50 text-gray-600 hover:bg-[#2563eb] hover:text-white rounded-xl flex items-center justify-center transition-all hover:scale-105" aria-label="Facebook">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 bg-gray-50 text-gray-600 hover:bg-[#2563eb] hover:text-white rounded-xl flex items-center justify-center transition-all hover:scale-105" aria-label="Twitter">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 bg-gray-50 text-gray-600 hover:bg-[#2563eb] hover:text-white rounded-xl flex items-center justify-center transition-all hover:scale-105" aria-label="LinkedIn">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4 text-left">
              <h3 className="text-[#2563eb] text-[11px] font-bold tracking-widest uppercase">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    {link.page ? (
                      <button
                        onClick={() => handleNavClick(link.page)}
                        className="text-xs text-gray-500 hover:text-[#2563eb] transition-colors cursor-pointer block text-left font-semibold"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => e.preventDefault()}
                        className="text-xs text-gray-500 hover:text-[#2563eb] transition-colors block font-semibold"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400 font-semibold">
          © {new Date().getFullYear()} Zuca. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-xs text-gray-900 font-extrabold">
          <span className="text-[#2563eb] text-sm leading-none font-bold">+</span>
          <span>Beauty booking, your way.</span>
        </div>
      </div>
    </footer>
  );
}

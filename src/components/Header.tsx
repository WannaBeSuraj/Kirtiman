"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  {
    href: '/solutions',
    label: 'Solutions',
    children: [
      { href: '/solutions/anticorrosive-coatings', label: 'Anticorrosive Coatings' },
      { href: '/solutions/pipe-coating-solutions', label: 'Pipe Coating Solutions' },
      { href: '/solutions/pipe-fabrication-mechanical', label: 'Pipe Fabrication & Mechanical' },
      { href: '/solutions/surface-preparation-application', label: 'Surface Preparation & Application' },
    ],
  },
  {
    href: '/industries',
    label: 'Industries',
    children: [
      { href: '/industries/water-wastewater', label: 'Water & Wastewater' },
      { href: '/industries/manufacturing', label: 'Manufacturing' },
      { href: '/industries/infrastructure', label: 'Infrastructure' },
    ],
  },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-500 ease-in-out border-b border-gray-200 backdrop-blur-md ${
        isSticky
          ? 'fixed top-0 left-0 right-0 bg-white/98 shadow-lg z-50 py-3 md:py-4'
          : 'sticky top-0 bg-white z-40 py-4 md:py-6'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 md:gap-4 font-bold text-[#1E3A8A] hover:text-[#0066CC] transition-all duration-300 hover:scale-105 transform"
        >
          <img
            src="/images/logos/logo.png"
            alt="Corro Protection Engineering Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              isSticky ? 'h-10 md:h-12' : 'h-12 md:h-16'
            }`}
          />
          <span className="hidden sm:inline text-lg md:text-xl lg:text-2xl font-bold">Corro Protection</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                {!link.children ? (
                  <Link
                    href={link.href}
                    className={`px-5 py-3 font-semibold text-base transition-all duration-300 rounded-lg hover:scale-105 transform ${
                      pathname === link.href
                        ? 'text-[#0066CC] bg-blue-50 shadow-sm'
                        : 'text-gray-700 hover:text-[#0066CC] hover:bg-blue-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`px-5 py-3 font-semibold text-base flex items-center gap-2 rounded-lg transition-all duration-300 hover:scale-105 transform ${
                        pathname.startsWith(link.href)
                          ? 'text-[#0066CC] bg-blue-50 shadow-sm'
                          : 'text-gray-700 hover:text-[#0066CC] hover:bg-blue-50'
                      }`}
                    >
                      {link.label}
                      <svg
                        className="w-4 h-4 group-hover:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-0 w-56 bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === child.href
                                ? 'text-[#0066CC] bg-blue-50 font-semibold border-l-3 border-[#0066CC]'
                                : 'text-gray-700 hover:bg-blue-50 hover:text-[#0066CC]'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#0066CC] text-white font-bold text-base rounded-lg hover:bg-[#004C99] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex items-center gap-2 p-3 text-[#1E3A8A] hover:text-[#0066CC] hover:bg-blue-50 rounded-lg transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-in fade-in slide-in-from-top">
          <div className="container-custom py-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {!link.children ? (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-2 rounded-md transition-colors ${
                        pathname === link.href
                          ? 'text-blue-600 bg-blue-50 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.href ? null : link.href)
                        }
                        className="w-full text-left px-4 py-2 font-medium flex items-center justify-between hover:bg-gray-50 rounded-md"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === link.href ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </button>
                      {openDropdown === link.href && (
                        <div className="bg-gray-50 rounded-md mt-1 py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-6 py-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              className="mt-4 block w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

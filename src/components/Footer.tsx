import Link from 'next/link';

const quickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const solutions = [
  { label: 'Anticorrosive Coatings', href: '/solutions/anticorrosive-coatings' },
  { label: 'Pipe Coating Solutions', href: '/solutions/pipe-coating-solutions' },
  { label: 'Pipe Fabrication', href: '/solutions/pipe-fabrication-mechanical' },
  { label: 'Surface Preparation', href: '/solutions/surface-preparation-application' },
];

const industries = [
  { label: 'Water & Wastewater', href: '/industries/water-wastewater' },
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Infrastructure', href: '/industries/infrastructure' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-blue-100">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logos/logo.png"
                alt="Corro Protection Engineering Logo"
                className="h-16 w-auto object-contain"
              />
              <h3 className="text-xl font-bold text-[#1E3A8A]">Corro Protection</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 mb-6">
              ISO 9001:2015 certified industrial coating and pipeline fabrication specialist providing advanced corrosion protection solutions across India.
            </p>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">
                <span className="text-[#0066CC] font-semibold">Email:</span> info@corropaints.com
              </p>
              <p className="text-gray-600">
                <span className="text-[#0066CC] font-semibold">Phone:</span> +91-9830374408
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-6 border-b-2 border-[#0066CC] pb-2 inline-block">Solutions</h3>
            <ul className="space-y-3 mt-6">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#0066CC] transition-colors text-sm font-medium hover:translate-x-1 inline-block transition-transform"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-6 border-b-2 border-[#0066CC] pb-2 inline-block">Industries</h3>
            <ul className="space-y-3 mt-6">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#0066CC] transition-colors text-sm font-medium hover:translate-x-1 inline-block transition-transform"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-[#0066CC] transition-colors text-sm font-medium hover:translate-x-1 inline-block transition-transform"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Office */}
          <div>
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-6 border-b-2 border-[#0066CC] pb-2 inline-block">Office Locations</h3>
            <div className="space-y-5 text-sm mt-6">
              <div>
                <p className="text-[#0066CC] font-semibold mb-2">Factory</p>
                <p className="text-gray-600 leading-relaxed">
                  Plot No. 233, Durgapur Highway<br />
                  Singur, Hooghly<br />
                  West Bengal, India
                </p>
              </div>
              <div>
                <p className="text-[#0066CC] font-semibold mb-2">Registered Office</p>
                <p className="text-gray-600 leading-relaxed">
                  107/B, D-Block, Baghajatin<br />
                  Kolkata 700032<br />
                  West Bengal, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-blue-100">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-6">
              Get the latest updates on industrial coating solutions and insights.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-lg bg-white border-2 border-blue-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0066CC] text-white font-semibold rounded-lg hover:bg-[#004C99] transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-100 bg-[#1E3A8A] py-6">
        <div className="container-custom">
          <div className="grid gap-4 md:grid-cols-3 md:items-center text-xs text-gray-300">
            <div>
              © {currentYear} Corro Protection Engineering. All rights reserved.
            </div>
            <div className="flex gap-4 justify-center md:justify-center">
              <Link href="/privacy-policy" className="hover:text-[#60A5FA] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-[#60A5FA] transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="text-right">
              <p className="flex items-center justify-end gap-2">
                <span className="w-2 h-2 bg-[#16a34a] rounded-full animate-pulse"></span>
                ISO 9001:2015 Certified
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Corro Protection Engineering',
            url: 'https://corropaints.com',
            logo: 'https://corropaints.com/images/logo.png',
            description: 'ISO 9001:2015 certified industrial coating and pipeline fabrication specialist',
            sameAs: [
              'https://www.linkedin.com/company/corro-protection-engineering',
              'https://www.facebook.com/corroprotection',
              'https://twitter.com/corroprotection',
            ],
            contact: {
              '@type': 'ContactPoint',
              contactType: 'Customer Support',
              telephone: '+91-9830374408',
              email: 'info@corropaints.com',
            },
          }),
        }}
      />
    </footer>
  );
}

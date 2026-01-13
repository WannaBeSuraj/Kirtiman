import CTASection from '../../components/CTASection';
import Hero from '../../components/Hero';
import { buildMetadata } from '../../lib/metadata';
import { organizationSchema } from '../../lib/schema';

export const metadata = buildMetadata({
  title: 'About Corro Protection Engineering | ISO Certified Industrial Coating Specialists',
  description:
    'Learn about Corro Protection Engineering - ISO 9001:2015 certified coating and pipeline fabrication company serving India since 2006.',
  keywords: ['industrial coating company India', 'pipeline fabrication specialist', 'ISO certified coating services'],
  url: 'https://corropaints.com/about-us',
});

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Engineering-Driven Corrosion Protection"
        subtitle="ISO 9001:2015 certified industrial coating and pipeline fabrication partner since 2006."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
        backgroundImage="/images/factory-facility.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
            <p className="mt-4 text-gray-700">
              Corro Protection Engineering is an ISO 9001:2015 certified industrial coating and pipeline fabrication specialist based in West Bengal, India.
              Since 2006, the company has evolved from a specialized coating applicator to a comprehensive pipeline solutions provider integrating advanced anticorrosive protection with precision fabrication.
            </p>
            <p className="mt-4 text-gray-700">
              The Singur facility in Hooghly houses complete pipe manufacturing and coating operations, enabling seamless project execution from raw material to final installation.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-900">What We Do</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li><span className="font-semibold text-primary">Large-Diameter Pipeline Systems (600mm - 2400mm):</span> Fabrication, coating, testing for municipal and industrial networks.</li>
              <li><span className="font-semibold text-primary">Anticorrosive Protection:</span> Polyurethane, coal tar epoxy, food-grade epoxy, wrapping tapes for field joints.</li>
              <li><span className="font-semibold text-primary">Quality Assurance & Testing:</span> UT/RT non-destructive testing, hydrostatic testing, DFT measurement, holiday detection, and certification.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900">Engineering-First Approach</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Site Assessment & Specification Review',
              'Surface Preparation to Sa 2.5 or better',
              'Material Selection based on environment',
              'Controlled Application per specification',
              'Curing with temperature/humidity monitoring',
              'Testing & Certification (DFT, holiday detection, hydrotest)',
            ].map((item, idx) => (
              <div key={item} className="card">
                <p className="text-sm font-semibold text-secondary">Step {idx + 1}</p>
                <p className="mt-2 text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Quality & Safety Commitment</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>ISO 9001:2015 quality management with client-specific specification compliance.</li>
              <li>UT/RT testing, hydrostatic testing, DFT measurement, holiday detection.</li>
              <li>Mandatory PPE, safety training, and environmental protocols across operations.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-900">Facilities</h3>
            <p className="mt-3 text-gray-700">Factory: Plot No. 233, Durgapur Highway, Joymollha, Singur, Hooghly, West Bengal 712407</p>
            <p className="mt-2 text-gray-700">Registered Office: 107/B, D-Block, Baghajatin, Kolkata 700032, West Bengal</p>
            <p className="mt-2 text-gray-700">Capabilities: Pipe fabrication 600mm-2400mm, coating facility for all major systems, on-site UT/RT, hydrotesting, storage, logistics.</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Plan Your Next Pipeline or Coating Project"
        subtitle="Technical teams respond within 24 hours with specification-aligned guidance."
        buttonText="Request Technical Consultation"
        buttonLink="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

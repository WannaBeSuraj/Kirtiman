import CTASection from '../../../components/CTASection';
import Hero from '../../../components/Hero';
import { buildMetadata } from '../../../lib/metadata';
import { buildArticleSchema, organizationSchema } from '../../../lib/schema';

export const metadata = buildMetadata({
  title: 'Water & Wastewater Pipeline Protection Solutions | Corro Protection',
  description:
    'Specialized coating and fabrication solutions for municipal water, wastewater, and sewage systems. Food-grade coatings and corrosion protection.',
  keywords: ['water pipeline coating', 'wastewater pipeline', 'potable water protection', 'sewage pipeline'],
  url: 'https://corropaints.com/industries/water-wastewater',
});

export default function WaterWastewaterPage() {
  return (
    <>
      <Hero
        title="Water & Wastewater Protection"
        subtitle="Potable water compliant internal coatings and durable external systems for long-life municipal pipelines."
        ctaText="Plan Your Network"
        ctaLink="/contact"
        backgroundImage="/images/hero-pipeline.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900">Protecting Critical Water Infrastructure</h2>
          <p>
            Water and wastewater pipelines face internal corrosion from chemistry and disinfectants, and external corrosion from soil and moisture. Corro Protection Engineering engineers coating and fabrication systems for decades of reliable service.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Internal Corrosion Control</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Food-grade epoxy (NSF/ANSI 61 compliant) for potable lines; smooth surface minimizes bacterial growth.</li>
              <li>Resistance to chlorination, dissolved oxygen, CO2, and MIC.</li>
              <li>Cement mortar lining for transmission mains where cost efficiency is critical.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">External Protection</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Polyurethane or coal tar epoxy for buried lines, thickness tuned to soil aggressiveness.</li>
              <li>Wrapping tape systems for field joints; compatible with cathodic protection.</li>
              <li>Field joint integrity verified by holiday detection and DFT checks.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Compliance & Standards</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>IS 10500 drinking water requirements and NSF/ANSI 61 for potable use.</li>
              <li>AWWA guidance for coating selection and performance.</li>
              <li>Environmental and client-specific standards documented and met.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900">Case Reference</h3>
            <p className="mt-2 text-gray-700">
              65 KM municipal water pipeline for Sarthi Constructions: MS fabrication 600mm-2400mm, food-grade epoxy internal coating, coal tar epoxy external coating, wrapping tapes at joints, UT/RT and hydrotesting, 90% complete with zero quality issues.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Planning a Water Infrastructure Project?"
        subtitle="Align coating selection with water chemistry, soil conditions, and compliance."
        buttonText="Request Technical Consultation"
        buttonLink="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            title: 'Water & Wastewater Pipeline Protection',
            description: 'Food-grade internal coatings and durable external systems for municipal water and sewage lines.',
            image: 'https://corropaints.com/images/hero-pipeline.webp',
            date: '2025-01-15',
          })),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

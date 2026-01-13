import CTASection from '../../../components/CTASection';
import Hero from '../../../components/Hero';
import { buildMetadata } from '../../../lib/metadata';
import { buildArticleSchema, organizationSchema } from '../../../lib/schema';

export const metadata = buildMetadata({
  title: 'Industrial Coating Solutions for Manufacturing Plants | Corro Protection',
  description:
    'Protective coatings for process piping, chemical handling systems, and manufacturing infrastructure. Chemical resistant coating solutions.',
  keywords: ['industrial process piping', 'chemical resistant coatings', 'manufacturing plant protection'],
  url: 'https://corropaints.com/industries/manufacturing',
});

export default function ManufacturingPage() {
  return (
    <>
      <Hero
        title="Manufacturing & Process Industry Protection"
        subtitle="Chemical-resistant coatings for process piping, storage tanks, and plant utilities to minimize downtime."
        ctaText="Strengthen Your Plant"
        ctaLink="/contact"
        backgroundImage="/images/factory-facility.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Chemical Exposure Challenges</h2>
            <p className="mt-3 text-gray-700">
              Process plants handle acids, alkalis, solvents, and temperature cycling that rapidly degrade unprotected steel. Coatings must resist chemical attack, abrasion, and cleaning regimes while keeping lines in service.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900">Specialized Coatings</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>High-solids epoxies for immersion and chemical resistance.</li>
              <li>Polyurethanes for UV and mechanical durability on exposed equipment.</li>
              <li>Zinc-rich primers and tie coats for enhanced adhesion and cathodic protection.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Operational Considerations</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Planned shutdown windows respected with fast-cure systems where feasible.</li>
              <li>Surface preparation planned around access constraints and safety requirements.</li>
              <li>Holiday detection and DFT checks ensure lining integrity for process fluids.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Benefits</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Reduced unplanned downtime and leak risk.</li>
              <li>Extended equipment life and predictable maintenance cycles.</li>
              <li>Compliance with plant safety and quality standards.</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Chemical-Resistant Coatings?"
        subtitle="Select systems matched to your media, temperature, and cleaning cycles."
        buttonText="Get a Specification Review"
        buttonLink="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            title: 'Manufacturing Plant Coatings',
            description: 'Chemical-resistant coatings for process piping and manufacturing infrastructure.',
            image: 'https://corropaints.com/images/factory-facility.webp',
            date: '2025-01-15',
          })),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

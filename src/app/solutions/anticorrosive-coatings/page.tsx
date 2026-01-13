import CTASection from '../../../components/CTASection';
import Hero from '../../../components/Hero';
import { buildMetadata } from '../../../lib/metadata';
import { buildArticleSchema, organizationSchema } from '../../../lib/schema';

export const metadata = buildMetadata({
  title: 'Anticorrosive Coating Solutions for Industrial Assets | Corro Protection',
  description:
    'Polyurethane, coal tar epoxy, and food-grade coating systems for pipeline and tank protection. ISO certified application services across India.',
  keywords: [
    'anticorrosive coatings India',
    'pipeline coating',
    'coal tar epoxy',
    'polyurethane coating',
    'industrial corrosion protection',
  ],
  url: 'https://corropaints.com/solutions/anticorrosive-coatings',
});

const faq = [
  {
    q: 'What is the typical lifespan of anticorrosive coatings?',
    a: 'With proper selection and controlled application, systems deliver 15-25 years of protection depending on environment and maintenance.',
  },
  {
    q: 'Do you provide maintenance and recoating services?',
    a: 'Yes. Inspection, touch-up, and full recoating programs with 5-7 year review intervals to prevent defects from escalating.',
  },
  {
    q: 'Which coating is best for buried water pipelines?',
    a: 'Food-grade epoxy internally with coal tar epoxy or polyurethane plus wrapping tapes externally provides durable buried protection.',
  },
  {
    q: 'Can coatings be applied in the field?',
    a: 'Yes. Field teams apply wrapping tapes and liquid coatings; shop application is preferred for quality control when feasible.',
  },
  {
    q: 'How do you ensure coating quality?',
    a: 'ISO 9001:2015 procedures, DFT measurement, holiday detection, and qualified inspectors verify every batch.',
  },
  {
    q: 'What standards do you follow?',
    a: 'International and client standards including ISO, ASTM, NACE, BS, and IS are followed per project specification.',
  },
];

export default function AnticorrosiveCoatingsPage() {
  return (
    <>
      <Hero
        title="Engineered Anticorrosive Coating Systems"
        subtitle="Polyurethane, coal tar epoxy, food-grade epoxy, and wrapping tapes for long-term pipeline protection."
        ctaText="Request Technical Consultation"
        ctaLink="/contact"
        backgroundImage="/images/coating-process.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">The Cost of Corrosion</h2>
          <p className="text-gray-700">
            Corrosion drives premature failures, leaks, safety hazards, environmental risk, and high lifecycle costs. Moisture, chemicals, soil conditions, temperature cycling, and MIC accelerate wall loss, making protective systems essential for pipelines and tanks.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900">Polyurethane (PU) Coatings</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Excellent chemical resistance and UV stability for above-ground service.</li>
                <li>Flexible film accommodates thermal movement; fast curing supports tight schedules.</li>
                <li>Ideal for above-ground piping, water systems, and chemical exposure areas.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900">Coal Tar Epoxy (CTE)</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Heavy-duty impermeability for buried pipelines and underground tanks.</li>
                <li>Adheres strongly to steel; resists soil chemicals and bacteria for 20+ year durability.</li>
                <li>Cost-effective for large-scale pipeline projects.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900">Food-Grade Epoxy</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>NSF/ANSI 61 compliant, non-toxic, and smooth for potable water and food service.</li>
                <li>Resists chlorination, prevents bacterial growth, and supports easy cleaning.</li>
                <li>Ideal for drinking water pipelines, food industry, and pharmaceutical piping.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900">Anticorrosive Wrapping Tape</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Primer, inner, and outer wraps provide corrosion and mechanical protection.</li>
                <li>Conforms to irregular surfaces; ideal for field joints and repairs.</li>
                <li>Fast installation for buried pipelines and inaccessible areas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900">Materials & Technology</h3>
            <p>Two-component epoxies, modified epoxies, coal tar epoxy, aliphatic and aromatic polyurethanes, zinc-rich primers, and tie coats selected per environment.</p>
            <p>Application methods include airless spray for volume, conventional spray for detail, roller for confined spaces, and brush for touch-up.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Controlled Application Process</h3>
            <ol className="mt-4 space-y-3 text-gray-700 list-decimal list-inside">
              <li>Surface preparation to Sa 2.5; mechanical cleaning as required.</li>
              <li>Immediate primer application with wet film checks and flash-off control.</li>
              <li>Intermediate/finish coats with controlled DFT and recoat intervals.</li>
              <li>Curing with temperature/humidity monitoring; verify before handling.</li>
              <li>Inspection: visual checks, DFT, holiday detection, adhesion testing, documentation.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Performance & Specifications</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Dry film thickness: 250-500 microns typical; heavy duty 500-1000 microns.</li>
              <li>Service temperature: -40°C to +120°C (system dependent); application +10°C to +40°C.</li>
              <li>Pull-off adhesion: greater than 5 MPa (ASTM D4541); elongation 20-100% system dependent.</li>
              <li>Cure profile: touch dry 2-4 hours, hard dry 12-24 hours, full cure ~7 days.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Benefits</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>15-25 year protection with reduced total cost of ownership.</li>
              <li>Improved safety through leak prevention and structural integrity.</li>
              <li>Lower maintenance frequency and predictable inspection cycles.</li>
              <li>Compliance with ISO, ASTM, NACE, BS, and client specifications.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h3 className="text-2xl font-semibold text-gray-900">FAQs</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.q} className="card">
                <p className="font-semibold text-primary">{item.q}</p>
                <p className="mt-2 text-sm text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Expert Guidance on Coating Selection?"
        subtitle="Engineers respond with system recommendations matched to your environment and standards."
        buttonText="Request Technical Consultation"
        buttonLink="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            title: 'Anticorrosive Coating Solutions',
            description: 'PU, coal tar epoxy, food-grade epoxy, and wrapping tape systems for pipelines and tanks.',
            image: 'https://corropaints.com/images/hero-pipeline.webp',
            date: '2025-01-15',
          })),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

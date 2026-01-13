import CTASection from '../../../components/CTASection';
import Hero from '../../../components/Hero';
import { buildMetadata } from '../../../lib/metadata';
import { buildArticleSchema, organizationSchema } from '../../../lib/schema';

export const metadata = buildMetadata({
  title: 'Pipeline Coating Solutions | Internal & External Pipe Protection',
  description:
    'Complete pipeline coating services including internal linings, external coatings, and field joint protection for water, wastewater, and industrial systems.',
  keywords: ['pipeline coating', 'pipe lining', 'internal coating', 'external coating', 'cement mortar lining'],
  url: 'https://corropaints.com/solutions/pipe-coating-solutions',
});

const faq = [
  {
    q: 'How do you address internal pipeline corrosion?',
    a: 'Food-grade epoxy and cement mortar lining provide smooth, inert surfaces that resist chlorination, MIC, and abrasion from suspended solids.',
  },
  {
    q: 'What protects external buried pipelines?',
    a: 'Polyurethane or coal tar epoxy with wrapping tapes for field joints delivers impermeability against soil moisture and chemicals.',
  },
  {
    q: 'How are field joints handled?',
    a: 'Heat shrink sleeves and wrapping tapes with primer secure continuous protection across weld joints and repairs.',
  },
  {
    q: 'Can you support high production volumes?',
    a: 'Integrated fabrication and coating lines support high daily output with consistent quality checks and documentation.',
  },
];

export default function PipeCoatingSolutionsPage() {
  return (
    <>
      <Hero
        title="Pipeline Coating Solutions"
        subtitle="Internal linings, external coatings, and field joint protection engineered for water, wastewater, and process pipelines."
        ctaText="Plan Your Pipeline"
        ctaLink="/contact"
        backgroundImage="/images/hero-pipeline.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900">Pipeline Corrosion Challenges</h2>
          <p>
            Pipelines face internal attack from transported fluids and disinfectants, and external attack from soil chemistry, moisture, and stray currents. Field joints often become weak points if not protected with robust systems.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid gap-6 lg:grid-cols-3">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900">Internal Coatings</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Food-grade epoxy for potable water, smooth surface reduces biofilm and friction losses.</li>
              <li>Cement mortar lining for cost-effective protection on transmission mains.</li>
              <li>Abrasion and chemical resistance tailored to conveyed media.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900">External Coatings</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Polyurethane or coal tar epoxy for buried and above-ground sections.</li>
              <li>Wrapping tape systems for additional mechanical and moisture barrier performance.</li>
              <li>Thickness engineered for soil aggressiveness and design life.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900">Field Joint Protection</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Heat shrink sleeves and primer-based tapes matched to factory-applied coatings.</li>
              <li>Fast, reliable installation for joint integrity during construction.</li>
              <li>Holiday detection and DFT checks ensure continuity.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Materials & Technology</h3>
            <p className="mt-3 text-gray-700">
              Epoxies, polyurethanes, cement mortar, primers, and tie coats are selected based on fluid chemistry, temperature, soil conditions, and installation constraints. Application is performed using airless spray, lining equipment, or manual methods for confined joints.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900">Application Process</h3>
            <ol className="mt-4 space-y-3 text-gray-700 list-decimal list-inside">
              <li>Surface preparation to specification (abrasive blast or mechanical cleaning).</li>
              <li>Primer application with controlled wet film thickness.</li>
              <li>Intermediate/finish coats or lining application with DFT checks.</li>
              <li>Cure monitoring; protect from contamination during cure.</li>
              <li>Inspection: visual, DFT, holiday detection; documentation for handover.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Benefits</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Extended service life and reduced leakage risk.</li>
              <li>Smoother internal surfaces improve flow efficiency and lower pumping energy.</li>
              <li>Reduced maintenance and predictable inspection intervals.</li>
              <li>Compliance with potable water and industrial standards.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">FAQs</h3>
            <div className="mt-4 space-y-3">
              {faq.map((item) => (
                <div key={item.q} className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-primary">{item.q}</p>
                  <p className="mt-1 text-sm text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Designing a Pipeline Project?"
        subtitle="Get specification-aligned coating recommendations and joint protection details."
        buttonText="Talk to Our Engineers"
        buttonLink="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            title: 'Pipeline Coating Solutions',
            description: 'Internal linings, external coatings, and field joint protection for pipelines.',
            image: 'https://corropaints.com/images/hero-pipeline.webp',
            date: '2025-01-15',
          })),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

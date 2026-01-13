import CTASection from '../../../components/CTASection';
import Hero from '../../../components/Hero';
import { buildMetadata } from '../../../lib/metadata';
import { buildArticleSchema, organizationSchema } from '../../../lib/schema';

export const metadata = buildMetadata({
  title: 'Surface Preparation & Coating Application Services | Industrial Standards',
  description:
    'Professional surface preparation, blasting, and coating application services. Cement mortar lining, field application, and maintenance coatings.',
  keywords: ['surface preparation', 'abrasive blasting', 'coating application', 'cement mortar lining'],
  url: 'https://corropaints.com/solutions/surface-preparation-application',
});

export default function SurfacePreparationPage() {
  return (
    <>
      <Hero
        title="Surface Preparation & Application"
        subtitle="Abrasive blasting, cement mortar lining, and controlled coating application with inspection and documentation."
        ctaText="Schedule Surface Prep"
        ctaLink="/contact"
        backgroundImage="/images/coating-process.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Surface Preparation Methods</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Abrasive blasting to Sa 2.5 near-white metal for new steel.</li>
              <li>Mechanical cleaning for maintenance scenarios and access-limited areas.</li>
              <li>Surface profile measurement and cleanliness verification before coating.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900">Application Techniques</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Airless spray for production throughput and uniform film build.</li>
              <li>Conventional spray for detailed and small-batch work.</li>
              <li>Roller and brush application for confined spaces and touch-ups.</li>
              <li>DFT checks each coat; recoat intervals controlled per TDS.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Cement Mortar Lining</h3>
            <p className="mt-3 text-gray-700">
              Cement mortar lining for raw water and transmission mains provides a traditional, cost-effective internal barrier. Controlled mix, spin lining, and curing cycles deliver smooth, durable finishes that minimize friction losses and resist MIC when sealed correctly.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Field Application Services</h3>
            <p className="mt-3 text-gray-700">
              Field crews handle joints, repairs, and maintenance coatings using wrapping tapes, heat shrink sleeves, and liquid coatings. Holiday detection and DFT verification confirm continuity with shop-applied systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Inspection & Quality Control</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Visual inspection for surface cleanliness and coating defects.</li>
              <li>Dry film thickness checks across multiple points per area.</li>
              <li>Holiday detection for lining and wrapping systems.</li>
              <li>Adhesion testing when specified; full documentation issued.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900">Benefits</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Consistent surface profile and coating performance.</li>
              <li>Reduced rework through in-process inspection.</li>
              <li>Compliance with ISO, ASTM, and project-specific standards.</li>
              <li>Shorter project timelines with integrated coating and lining teams.</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Precise Surface Preparation?"
        subtitle="Align blasting, lining, and field application with your specification."
        buttonText="Book a Slot"
        buttonLink="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            title: 'Surface Preparation & Application',
            description: 'Abrasive blasting, cement mortar lining, and controlled coating application services.',
            image: 'https://corropaints.com/images/coating-process.webp',
            date: '2025-01-15',
          })),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

import CTASection from '../../../components/CTASection';
import Hero from '../../../components/Hero';
import { buildMetadata } from '../../../lib/metadata';
import { buildArticleSchema, organizationSchema } from '../../../lib/schema';

export const metadata = buildMetadata({
  title: 'Infrastructure Coating & Protection Solutions | Bridges, Tunnels, Utilities',
  description:
    'Heavy-duty protective coatings for infrastructure projects including bridges, tunnels, utility systems, and civil engineering projects.',
  keywords: ['infrastructure coating', 'bridge protection', 'civil engineering coatings', 'utility pipeline protection'],
  url: 'https://corropaints.com/industries/infrastructure',
});

export default function InfrastructurePage() {
  return (
    <>
      <Hero
        title="Infrastructure Protection"
        subtitle="Heavy-duty coatings for utilities, bridges, tunnels, and civil pipelines designed for long service life and public safety."
        ctaText="Protect Your Asset"
        ctaLink="/contact"
        backgroundImage="/images/hero-pipeline.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Large-Scale Exposure</h2>
            <p className="mt-3 text-gray-700">
              Infrastructure assets face weathering, de-icing salts, moisture, and mechanical wear. Coatings must deliver high durability, safety, and compliance over long design lives.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900">Coating Focus</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>High-build epoxies and polyurethanes for immersion and splash zones.</li>
              <li>Anti-carbonation and barrier systems for concrete and steel utilities.</li>
              <li>Wrapping systems for buried utilities and crossings.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Design Life & Safety</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Systems engineered for 15-25 year maintenance intervals.</li>
              <li>Slip-resistant and safety-focused finishes where personnel access occurs.</li>
              <li>Quality documentation to support public safety and compliance audits.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Benefits</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>Reduced lifecycle costs and fewer closures for maintenance.</li>
              <li>Improved public safety through leak and corrosion risk reduction.</li>
              <li>Alignment with civil standards and project specifications.</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Designing Infrastructure Protection?"
        subtitle="Specify coatings and wrapping systems that meet design-life requirements."
        buttonText="Request Specification Support"
        buttonLink="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            title: 'Infrastructure Coating & Protection',
            description: 'Heavy-duty coatings for civil infrastructure, utilities, and bridges.',
            image: 'https://corropaints.com/images/hero-pipeline.webp',
            date: '2025-01-15',
          })),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

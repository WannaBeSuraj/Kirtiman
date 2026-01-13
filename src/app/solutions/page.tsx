import CTASection from '../../components/CTASection';
import Hero from '../../components/Hero';
import SolutionCard from '../../components/SolutionCard';
import { buildMetadata } from '../../lib/metadata';
import { organizationSchema } from '../../lib/schema';

export const metadata = buildMetadata({
  title: 'Industrial Coating & Pipeline Solutions | Corro Protection Engineering',
  description:
    'Comprehensive anticorrosive coating, pipe fabrication, and surface preparation solutions for industrial infrastructure across India.',
  keywords: ['industrial coating solutions', 'pipeline protection', 'anticorrosive systems'],
  url: 'https://corropaints.com/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <Hero
        title="Comprehensive Coating & Fabrication Solutions"
        subtitle="Integrated anticorrosive coating systems with precision mechanical fabrication for pipelines, tanks, and critical infrastructure."
        ctaText="Talk to Engineering"
        ctaLink="/contact"
        backgroundImage="/images/coating-process.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-6">
          <p className="text-gray-700">
            Corrosion challenges demand engineered solutions. Corro Protection Engineering combines advanced coating systems with fabrication under one roof to protect metal assets and extend service life across industrial sectors.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SolutionCard
              title="Anticorrosive Coatings"
              description="PU, coal tar epoxy, food-grade systems for pipelines and tanks."
              link="/solutions/anticorrosive-coatings"
            />
            <SolutionCard
              title="Pipe Coating Solutions"
              description="Internal linings, external coatings, and field joint protection."
              link="/solutions/pipe-coating-solutions"
            />
            <SolutionCard
              title="Pipe Fabrication & Mechanical"
              description="MS pipe fabrication 600mm-2400mm with UT/RT and hydrotesting."
              link="/solutions/pipe-fabrication-mechanical"
            />
            <SolutionCard
              title="Surface Preparation & Application"
              description="Abrasive blasting, cement mortar lining, field application services."
              link="/solutions/surface-preparation-application"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Single-Source Pipeline Partner?"
        subtitle="Fabrication, coating, and testing delivered together for schedule certainty."
        buttonText="Request Consultation"
        buttonLink="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

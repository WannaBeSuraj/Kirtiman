import Hero from '../../components/Hero';
import IndustryCard from '../../components/IndustryCard';
import CTASection from '../../components/CTASection';
import { buildMetadata } from '../../lib/metadata';
import { organizationSchema } from '../../lib/schema';

export const metadata = buildMetadata({
  title: 'Industries Served | Corro Protection Engineering',
  description: 'Coating and pipeline protection solutions for water, wastewater, manufacturing, and infrastructure projects across India.',
  keywords: ['industrial coatings', 'pipeline protection industries', 'water wastewater coatings', 'manufacturing coatings'],
  url: 'https://corropaints.com/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="Engineered Protection Across Industries"
        subtitle="Tailored coating, lining, and fabrication solutions for water infrastructure, manufacturing, and civil projects."
        ctaText="Discuss Your Sector Needs"
        ctaLink="/contact"
        backgroundImage="/images/hero-pipeline.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <IndustryCard
              title="Water & Wastewater"
              description="Food-grade internal coatings and durable external protection for potable and sewage pipelines."
              link="/industries/water-wastewater"
            />
            <IndustryCard
              title="Manufacturing"
              description="Chemical-resistant coatings for process piping, storage, and plant utilities."
              link="/industries/manufacturing"
            />
            <IndustryCard
              title="Infrastructure"
              description="Long-life protection for utilities, bridges, and civil pipelines."
              link="/industries/infrastructure"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Need Industry-Specific Guidance?"
        subtitle="We align coating systems with your operating environment and compliance requirements."
        buttonText="Request Technical Consultation"
        buttonLink="/contact"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

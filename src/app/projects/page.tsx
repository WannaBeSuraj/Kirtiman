import CTASection from '../../components/CTASection';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';
import { buildMetadata } from '../../lib/metadata';
import { organizationSchema } from '../../lib/schema';

export const metadata = buildMetadata({
  title: 'Industrial Coating Projects & Case Studies | Corro Protection Engineering',
  description:
    'View our completed pipeline coating and fabrication projects. Real-world case studies demonstrating technical expertise and quality delivery.',
  keywords: ['pipeline projects India', 'coating case studies', 'industrial project portfolio'],
  url: 'https://corropaints.com/projects',
});

const projects = [
  {
    title: '65 KM Municipal Water Pipeline System',
    client: 'Sarthi Constructions',
    scope: 'MS pipe fabrication 600mm-2400mm, internal food-grade epoxy, external coal tar epoxy, wrapping tapes at joints',
    status: '90% Complete (Ongoing)',
    details:
      'Large-scale water transmission with multiple diameters, 100% UT of longitudinal welds, RT per spec, hydrostatic testing, and coordinated TPI witness points. Zero quality rejections to date.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Project Portfolio"
        subtitle="Executed with engineering discipline, documented quality, and schedule adherence."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
        backgroundImage="/images/hero-pipeline.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Project Portfolio</h2>
            <p className="mt-2 text-gray-700">
              Each project combines controlled fabrication, verified coatings, and ISO 9001:2015 quality procedures. Documentation is provided for every inspection point.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Similar Project?"
        subtitle="Engineering team can align fabrication, coating, and testing to your specification."
        buttonText="Discuss Your Project"
        buttonLink="/contact"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

import Link from 'next/link';
import CTASection from '../components/CTASection';
import Hero from '../components/Hero';
import IndustryCard from '../components/IndustryCard';
import ProjectCard from '../components/ProjectCard';
import SolutionCard from '../components/SolutionCard';
import TrustIndicators from '../components/TrustIndicators';
import Testimonials from '../components/Testimonials';
import CoatingShowcase from '../components/CoatingShowcase';
import FeatureHighlight from '../components/FeatureHighlight';
import ScrollReveal from '../components/ScrollReveal';
import { buildMetadata } from '../lib/metadata';

export const metadata = buildMetadata({
  title: 'Industrial & Anticorrosive Coating Solutions in India | Corro Protection Engineering',
  description:
    'ISO 9001:2015 certified provider of anticorrosive coatings, pipeline fabrication, and industrial protection systems across India. 18+ years experience.',
  keywords: [
    'industrial coating solutions',
    'anticorrosive coatings India',
    'pipeline fabrication',
    'coal tar epoxy',
    'polyurethane coating',
    'industrial corrosion protection',
    'pipeline protection',
    'surface preparation',
  ],
  url: 'https://corropaints.com',
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Protecting Industrial Assets from Corrosion"
        subtitle="Advanced anticorrosive and protective coating solutions for pipelines, tanks, and critical infrastructure across India."
        ctaText="Request Technical Consultation"
        ctaLink="/contact"
        backgroundImage="/images/hero-pipeline.webp"
        fullHeight
      />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Solutions Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-3 rounded-full bg-blue-100 text-blue-700 text-base font-bold mb-6 shadow-sm">
                Our Solutions
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Comprehensive Coating & Fabrication Solutions
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Integrated engineering, fabrication, and coating services designed to extend asset life and reduce lifecycle costs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <SolutionCard
                title="Anticorrosive Coatings"
                description="Polyurethane, coal tar epoxy, and food-grade coatings for long-term protection"
                link="/solutions/anticorrosive-coatings"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" delay={200}>
              <SolutionCard
                title="Pipe Coating Solutions"
                description="Internal and external coating systems for water, wastewater, and process piping"
                link="/solutions/pipe-coating-solutions"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" delay={300}>
              <SolutionCard
                title="Pipe Fabrication & Mechanical"
                description="Complete MS pipe fabrication from 600mm to 2400mm with UT/RT testing"
                link="/solutions/pipe-fabrication-mechanical"
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" delay={400}>
              <SolutionCard
                title="Surface Preparation & Application"
                description="Professional surface preparation, cement mortar lining, and field application services"
                link="/solutions/surface-preparation-application"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-3 rounded-full bg-blue-100 text-blue-700 text-base font-bold mb-6 shadow-sm">
                Market Segments
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tailored protection systems for critical infrastructure across India.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <IndustryCard
              title="Water & Wastewater"
              description="Potable water and sewage pipeline protection with food-grade internal coatings."
              link="/industries/water-wastewater"
            />
            <IndustryCard
              title="Manufacturing"
              description="Chemical-resistant coatings for process piping and plant infrastructure."
              link="/industries/manufacturing"
            />
            <IndustryCard
              title="Infrastructure"
              description="Long-life protection for utilities, bridges, and civil assets."
              link="/industries/infrastructure"
            />
            <IndustryCard
              title="Oil & Gas"
              description="Heavy-duty protection for pipelines and terminals."
              link="/solutions/anticorrosive-coatings"
            />
          </div>
        </div>
      </section>

      {/* Coating Showcase */}
      <CoatingShowcase />

      {/* Feature Highlight */}
      <FeatureHighlight
        title="Why Choose Corro Protection Engineering"
        description="We combine decades of expertise with cutting-edge coating technology to deliver superior protection and reliability."
        features={[
          {
            icon: '✓',
            title: 'ISO 9001:2015 Certified',
            description: 'Strict quality control and standardized processes across all operations.',
          },
          {
            icon: '✓',
            title: '18+ Years Experience',
            description: 'Proven track record with 500+ successfully completed projects.',
          },
          {
            icon: '✓',
            title: 'Advanced Testing',
            description: 'UT, RT, and hydrotest certification for maximum reliability.',
          },
          {
            icon: '✓',
            title: 'Integrated Solutions',
            description: 'Fabrication, coating, and testing under one roof.',
          },
          {
            icon: '✓',
            title: 'Long-Life Systems',
            description: '15-25 year asset life extension with validated coating systems.',
          },
          {
            icon: '✓',
            title: 'Expert Consultation',
            description: 'Detailed specification analysis and site-specific recommendations.',
          },
        ]}
        ctaText="Get Technical Consultation"
        ctaLink="/contact"
      />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Recent Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Completed Projects
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Major Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise across various industrial applications.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <ProjectCard
              title="65 KM Municipal Pipeline System"
              client="Sarthi Constructions"
              scope="MS Pipe Fabrication & Coating (600mm - 2400mm)"
              status="90% Complete"
              details="Integrated fabrication, coating, UT/RT testing, and hydrotest certification across multiple diameters with strict quality control."
            />
            <ProjectCard
              title="Industrial Water Treatment Plant"
              client="State Water Board"
              scope="Polyurethane Coating System"
              status="Completed"
              details="Complete surface preparation and polyurethane coating application for critical water treatment infrastructure with 15-year durability guarantee."
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Extend Your Asset Life?"
        subtitle="Let our expert team assess your corrosion protection needs and recommend the perfect solution."
        buttonText="Schedule Consultation Today"
        buttonLink="/contact"
      />
    </>
  );
}

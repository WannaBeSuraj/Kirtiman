import CTASection from '../../../components/CTASection';
import Hero from '../../../components/Hero';
import { buildMetadata } from '../../../lib/metadata';
import { buildArticleSchema, organizationSchema } from '../../../lib/schema';

export const metadata = buildMetadata({
  title: 'MS Pipe Fabrication Services | 600mm to 2400mm Diameter Pipes',
  description:
    'Complete MS pipe fabrication from cutting to testing. ISO certified manufacturing with UT/RT testing and hydrostatic testing facilities.',
  keywords: ['pipe fabrication India', 'MS pipe manufacturing', 'pipeline fabrication', 'UT RT testing'],
  url: 'https://corropaints.com/solutions/pipe-fabrication-mechanical',
});

const steps = [
  'Decoiling & cutting with dimensional verification',
  'Rolling & forming to specified diameters',
  'Longitudinal seam welding with qualified procedures',
  'Pipe fitting and alignment',
  'Internal welds (root passes) and inspection',
  'External welding (SAW/ARC) with profile verification',
  'Pipe doubling to full length and straightness checks',
  'NDT: UT and RT with documented results',
  'Weld repair and re-testing when required',
  'Hydrostatic testing at 1.5x design pressure',
  'Final inspection, marking, and protected storage',
];

export default function PipeFabricationPage() {
  return (
    <>
      <Hero
        title="Integrated MS Pipe Fabrication"
        subtitle="600mm to 2400mm diameter MS pipes with qualified welding, UT/RT, and hydrostatic testing ready for coating."
        ctaText="Schedule Production"
        ctaLink="/contact"
        backgroundImage="/images/factory-facility.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Pipe Fabrication Services</h2>
            <p className="mt-3 text-gray-700">
              Complete MS pipe fabrication for large-diameter projects, tightly integrated with coating services to deliver single-source responsibility and schedule certainty.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900">Process Overview</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {steps.map((item) => (
                <li key={item}>→ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Quality Assurance</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>ISO 9001:2015 quality management with approved WPS and welder qualifications.</li>
              <li>100% UT of longitudinal welds; RT per specification; hydrostatic testing of all pipes.</li>
              <li>Mill test certificates, NDT reports, hydrotest certificates, and final inspection reports.</li>
              <li>Third-party inspection coordination and witness points per client requirements.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Safety, Health & Environment</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Mandatory PPE, safety training, fire prevention, and emergency readiness.</li>
              <li>Waste management, emission controls, and responsible water handling for hydrotests.</li>
              <li>Health monitoring, noise and dust control, and ergonomic practices.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Capabilities & Capacity</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Pipe size: 600mm to 2400mm diameter; lengths 6m, 12m, or project-specific.</li>
              <li>Equipment: heavy-duty decoiler, automated rolling, MIG/ARC/SAW welding, UT/RT equipment, hydrotest bay.</li>
              <li>Materials: IS 2062 grade steel, ASTM A36/A53 equivalents, and client-specified grades.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-900">Integration with Coating</h3>
            <p className="mt-3 text-gray-700">
              Pipes move directly from hydrotesting to surface preparation and coating within the same facility, minimizing handling and maintaining surface integrity before coating application.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h3 className="text-2xl font-semibold text-gray-900">FAQs</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[{
              q: 'What pipe sizes can you fabricate?',
              a: 'Pipes from 600mm to 2400mm diameter; other sizes on request.',
            },
            {
              q: 'Do you provide certificates?',
              a: 'Yes. MTCs, welding records, NDT reports, hydrotest certificates, and final inspection documents are provided.',
            },
            {
              q: 'Can you handle third-party inspection?',
              a: 'Yes. We coordinate with TPI agencies and schedule witness points per the approved ITP.',
            },
            {
              q: 'Do you provide site installation?',
              a: 'Pipeline laying, erection, and EPC support are available for end-to-end delivery.',
            }].map((item) => (
              <div key={item.q} className="card">
                <p className="font-semibold text-primary">{item.q}</p>
                <p className="mt-2 text-sm text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Fabrication and Coating Under One Roof?"
        subtitle="Secure schedule, quality, and single-point accountability for your pipeline project."
        buttonText="Request a Production Slot"
        buttonLink="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            title: 'MS Pipe Fabrication Services',
            description: 'Complete fabrication from cutting to hydrotesting for 600mm-2400mm MS pipes.',
            image: 'https://corropaints.com/images/factory-facility.webp',
            date: '2025-01-15',
          })),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

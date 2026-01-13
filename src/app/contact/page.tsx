import ContactForm from '../../components/ContactForm';
import Hero from '../../components/Hero';
import { buildMetadata } from '../../lib/metadata';
import { localBusinessSchema, organizationSchema } from '../../lib/schema';

export const metadata = buildMetadata({
  title: 'Contact Corro Protection Engineering | Request Technical Consultation',
  description:
    'Contact our industrial coating and pipeline fabrication team. Request technical consultation, project quotation, or site visit.',
  keywords: ['contact industrial coating company', 'pipeline fabrication inquiry', 'coating consultation'],
  url: 'https://corropaints.com/contact',
});

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get In Touch With Our Technical Team"
        subtitle="Request technical consultation, project quotation, or site assessment."
        ctaText="Submit Your Requirements"
        ctaLink="#contact-form"
        backgroundImage="/images/factory-facility.webp"
      />

      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <ContactForm />
          </div>
          <div className="card h-full bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
            <div className="mt-4 space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-primary">Email</p>
                <p>corroengineering@yahoo.co.in</p>
                <p>corroeng@gmail.com</p>
                <p>corroengg@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Phone</p>
                <p>+91-9830374408</p>
                <p>+91-7352843932</p>
                <p>+91-9674488363</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Factory</p>
                <p>Plot No. 233, Durgapur Highway</p>
                <p>Vill. Joymollha, P.O. Beraberi</p>
                <p>P.S. Singur, Dist. Hooghly</p>
                <p>West Bengal 712407, India</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Registered Office</p>
                <p>107/B, D-Block, Baghajatin</p>
                <p>P.O. & P.S. Jadavpur</p>
                <p>Kolkata 700032, West Bengal</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Service Areas</p>
                <p>Pan-India operations with primary focus on Eastern India.</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Office Hours</p>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}

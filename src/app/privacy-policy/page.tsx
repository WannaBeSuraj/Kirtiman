import { buildMetadata } from '../../lib/metadata';
import { organizationSchema } from '../../lib/schema';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Corro Protection Engineering',
  description:
    'Privacy policy for Corro Protection Engineering website. How we collect, use, and protect your information.',
  keywords: ['privacy policy'],
  url: 'https://corropaints.com/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom space-y-4 text-gray-800">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p>Last Updated: January 12, 2026</p>
        <p>
          Corro Protection Engineering ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our services.
        </p>
        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <h3 className="text-xl font-semibold">Information You Provide</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>Contact information (name, email, phone number)</li>
          <li>Company details and project information</li>
          <li>Communication preferences</li>
          <li>Any other information you choose to provide through forms or emails</li>
        </ul>
        <h3 className="text-xl font-semibold">Automatically Collected Information</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>IP address and browser type</li>
          <li>Pages visited and time spent on site</li>
          <li>Referring website information</li>
          <li>Device information</li>
        </ul>
        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Respond to inquiries and provide customer support</li>
          <li>Send technical information and project updates</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
          <li>Send marketing communications (with your consent)</li>
        </ul>
        <h2 className="text-2xl font-semibold">Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information. We may share information with service providers, legal authorities when required, or business partners with your explicit consent.</p>
        <h2 className="text-2xl font-semibold">Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, or destruction. However, no internet transmission is completely secure.</p>
        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Access your personal information</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Lodge a complaint with data protection authorities</li>
        </ul>
        <h2 className="text-2xl font-semibold">Cookies</h2>
        <p>Our website uses cookies to enhance user experience and analyze site traffic. You can control cookie settings through your browser.</p>
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>For privacy-related questions or requests, contact us at corroengineering@yahoo.co.in or +91-9830374408.</p>
        <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. Continued use of our website after changes indicates acceptance of the updated policy.</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </section>
  );
}

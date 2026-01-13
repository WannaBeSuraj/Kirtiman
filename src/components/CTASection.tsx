import Link from 'next/link';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, subtitle, buttonText, buttonLink }: CTAProps) {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
        <div>
          <h2 className="leading-tight">{title}</h2>
          <p className="mt-4 text-lg text-blue-100">{subtitle}</p>
        </div>
        <div className="flex md:justify-end">
          <Link href={buttonLink} className="btn-secondary">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

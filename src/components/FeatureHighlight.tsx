import Link from 'next/link';

interface FeatureHighlightProps {
  title: string;
  description: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

export default function FeatureHighlight({
  title,
  description,
  features,
  ctaText,
  ctaLink,
}: FeatureHighlightProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-8">{description}</p>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {ctaText}
              </Link>
            )}
          </div>

          {/* Visual - Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

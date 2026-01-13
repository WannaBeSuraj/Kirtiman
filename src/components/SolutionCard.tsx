import Link from 'next/link';

interface SolutionCardProps {
  title: string;
  description: string;
  icon?: string;
  link: string;
}

export default function SolutionCard({ title, description, icon, link }: SolutionCardProps) {
  return (
    <Link 
      href={link} 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 h-full flex flex-col overflow-hidden hover:-translate-y-2 transform"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066CC] to-[#60A5FA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      
      {/* Icon with animation */}
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
        {icon ? (
          <img src={icon} alt={title} className="h-16 w-16" loading="lazy" />
        ) : (
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#0066CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0066CC] transition-colors duration-300">{title}</h3>
      <p className="text-base text-gray-600 flex-1 leading-relaxed">{description}</p>
      
      <span className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#0066CC] group-hover:gap-4 transition-all duration-300">
        Learn more 
        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
      
      {/* Background decoration */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Link>
  );
}

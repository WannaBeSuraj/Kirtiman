import Link from 'next/link';

interface IndustryCardProps {
  title: string;
  description: string;
  link: string;
}

export default function IndustryCard({ title, description, link }: IndustryCardProps) {
  return (
    <Link 
      href={link} 
      className="group relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col overflow-hidden"
    >
      {/* Animated top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066CC] to-[#60A5FA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 -mr-16 -mt-16 transition-all duration-500 transform group-hover:scale-150" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#0066CC] transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-4 text-base text-gray-600 flex-1 leading-relaxed">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[#0066CC]">
          Explore 
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

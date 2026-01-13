interface ProjectCardProps {
  title: string;
  client: string;
  scope: string;
  status: string;
  details: string;
}

export default function ProjectCard({ title, client, scope, status, details }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
      {/* Animated top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0066CC] to-[#60A5FA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 -ml-20 -mb-20 transition-all duration-500 transform group-hover:scale-150" />
      
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase text-[#0066CC] tracking-wider bg-blue-50 px-3 py-1.5 rounded-full inline-block">
          Case Study
        </p>
        <h3 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-[#0066CC] transition-colors duration-300">
          {title}
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-3 text-base text-gray-700">
          <p className="flex items-start gap-2">
            <span className="font-bold text-gray-900 min-w-[70px]">Client:</span> 
            <span className="flex-1">{client}</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-gray-900 min-w-[70px]">Scope:</span> 
            <span className="flex-1">{scope}</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-gray-900 min-w-[70px]">Status:</span> 
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
              {status}
            </span>
          </p>
        </div>
        <p className="mt-5 text-base text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
          {details}
        </p>
      </div>
    </div>
  );
}

const indicators = [
  { label: 'Years Experience', value: '18+ (Since 2006)' },
  { label: 'Pipeline Executed', value: '65+ KM' },
  { label: 'Certification', value: 'ISO 9001:2015' },
  { label: 'Operations', value: 'Pan-India' },
];

export default function TrustIndicators() {
  return (
    <section className="bg-white py-10 shadow-sm">
      <div className="container-custom grid grid-cols-2 gap-4 md:grid-cols-4">
        {indicators.map((item) => (
          <div key={item.label} className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-center">
            <p className="text-sm font-semibold text-primary">{item.label}</p>
            <p className="mt-2 text-lg font-bold text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

interface ColorCategory {
  id: string;
  name: string;
  description: string;
  colors: {
    name: string;
    code: string;
    hex: string;
    usage: string;
  }[];
}

const colorCategories: ColorCategory[] = [
  {
    id: 'industrial',
    name: 'Industrial Protection',
    description: 'Heavy-duty protective coatings',
    colors: [
      {
        name: 'Deep Steel',
        code: 'CPE-001',
        hex: '#2C3E50',
        usage: 'Pipe coating, industrial assets',
      },
      {
        name: 'Rust Guardian',
        code: 'CPE-002',
        hex: '#8B4513',
        usage: 'Metal protection, aging resistance',
      },
      {
        name: 'Ocean Blue',
        code: 'CPE-003',
        hex: '#1E5A8E',
        usage: 'Water infrastructure, moisture protection',
      },
    ],
  },
  {
    id: 'epoxy',
    name: 'Coal Tar Epoxy',
    description: 'Premium protective finishes',
    colors: [
      {
        name: 'Black Armor',
        code: 'CPE-201',
        hex: '#1A1A1A',
        usage: 'Corrosion resistance, maximum protection',
      },
      {
        name: 'Gray Guardian',
        code: 'CPE-202',
        hex: '#4A4A4A',
        usage: 'Industrial pipelines, infrastructure',
      },
    ],
  },
  {
    id: 'polyurethane',
    name: 'Polyurethane Systems',
    description: 'Durable long-lasting coatings',
    colors: [
      {
        name: 'Marine Blue',
        code: 'CPE-301',
        hex: '#006BA6',
        usage: 'Water-based applications',
      },
      {
        name: 'Sage Green',
        code: 'CPE-302',
        hex: '#6B8E23',
        usage: 'Environmental protection, durability',
      },
      {
        name: 'Platinum',
        code: 'CPE-303',
        hex: '#C0C0C0',
        usage: 'Aesthetic finishes, inspection visibility',
      },
    ],
  },
];

export default function CoatingShowcase() {
  const [activeCategory, setActiveCategory] = useState(colorCategories[0].id);

  const category = colorCategories.find((c) => c.id === activeCategory)!;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Coating Solutions
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Coating Systems & Colors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of protective coatings, each engineered for specific industrial needs
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {colorCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
          <p className="text-gray-600">{category.description}</p>
        </div>

        {/* Color Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.colors.map((color) => (
            <div
              key={color.code}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Color Preview */}
              <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                <div
                  className="w-full h-full transition-transform group-hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                />
              </div>

              {/* Color Info */}
              <div className="p-6 bg-white">
                <h4 className="font-bold text-gray-900 text-lg mb-2">{color.name}</h4>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Code:</span> {color.code}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-semibold">Hex:</span> {color.hex}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-blue-600 font-medium">{color.usage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Custom Color Solutions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our technical team can develop custom coating colors and formulations tailored to your specific industrial requirements.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Request Technical Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

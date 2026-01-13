'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  image?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    title: 'Plant Manager',
    company: 'National Water Authority',
    content:
      'Corro Protection provided exceptional coating services for our entire pipeline network. Their ISO 9001 certification ensures consistent quality and their technical expertise saved us significant maintenance costs.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Singh',
    title: 'Chief Engineer',
    company: 'Industrial Manufacturing Ltd',
    content:
      'The polyurethane coating system has withstood 5+ years of harsh industrial conditions without degradation. Excellent surface preparation and application standards.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    title: 'Operations Director',
    company: 'Infrastructure Solutions',
    content:
      'Outstanding service from consultation to completion. Their cement mortar lining application was flawless. Highly recommended for critical infrastructure projects.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Deepa Desai',
    title: 'Technical Lead',
    company: 'Water Treatment Facility',
    content:
      'The food-grade internal coating for our potable water pipes ensures safety and longevity. Professional team, exceptional results. Outstanding value for investment.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Client Success Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our coating and fabrication solutions have enhanced operations across India
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-8 italic">
              "{current.content}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                {current.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{current.name}</p>
                <p className="text-sm text-gray-600">{current.title}</p>
                <p className="text-sm text-blue-600 font-medium">{current.company}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div className="flex-1 flex gap-2 items-center justify-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>

          {/* Stats Below */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">18+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

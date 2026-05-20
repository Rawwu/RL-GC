'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';

const FEATURED = [
  {
    title: 'Weekly Lawn Care',
    description: 'Keep your lawn looking its best year-round with our reliable mowing, edging, and blowing service. We work around your schedule so your yard is always ready.',
    bullets: ['No contracts required', 'Edging & blowing included', 'Year-round availability'],
    badge: 'Most Popular',
    image: '/images/Front-lawn-2.jpg',
  },
  {
    title: 'Tree & Shrub Care',
    description: 'Expert trimming and shaping to keep your trees and shrubs healthy, safe, and looking sharp. We handle everything from small ornamentals to large overgrowth.',
    bullets: ['Expert pruning & shaping', 'Storm prep & cleanup', 'All tree & shrub sizes'],
    badge: null,
    image: '/images/Trimming-2.jpg',
  },
  {
    title: 'Garden Maintenance',
    description: 'Beautiful flower beds and garden areas require consistent care. We handle weeding, edging, seasonal planting, and mulch refresh to keep them thriving.',
    bullets: ['Weed control & edging', 'Seasonal planting', 'Mulch refresh'],
    badge: null,
    image: '/images/Flowerbed-2.jpg',
  },
];

const ADDITIONAL = [
  { icon: '🌱', title: 'Sod Laying',             description: 'Full sod installation for new lawns or bare patches.' },
  { icon: '🍂', title: 'Fall Clean Up',           description: 'Leaf removal, bed cleanup, and pre-winter yard prep.' },
  { icon: '💧', title: 'Fertilizer Application',  description: 'Seasonal treatments to keep your lawn thick and green.' },
  { icon: '🪵', title: 'Mulch Application',       description: 'Fresh mulch delivery and installation for beds and borders.' },
  { icon: '🏠', title: 'Gutter Clean Out',        description: 'Debris removal to protect your roof and foundation.' },
  { icon: '🔧', title: 'Sprinkler Repair',        description: 'System inspections, head replacements, and leak fixes.' },
];

const PROPERTIES = [
  { icon: '🏠', title: 'Residential Homes',      desc: 'Single-family homes and private residences.' },
  { icon: '🏢', title: 'Commercial Offices',     desc: 'Office buildings and business parks.' },
  { icon: '🏪', title: 'Retail Spaces',          desc: 'Storefronts, strip malls, and shopping centers.' },
  { icon: '🏘️', title: 'Apartment Communities', desc: 'Multi-unit residential and rental properties.' },
  { icon: '🌾', title: 'Large Land Plots',       desc: 'Acreage, vacant lots, and open land.' },
];

const TRUST = [
  { stat: '25+',    label: 'Years of Experience'  },
  { stat: 'Free',   label: 'Estimates Always'     },
  { stat: 'Local',  label: 'Family-Owned Business' },
  { stat: 'FW & ARL', label: 'Area Served'        },
];

const FAQS = [
  {
    q: 'How often should I schedule lawn mowing?',
    a: "Most lawns in the DFW area benefit from weekly mowing during the growing season (spring through fall) and bi-weekly cuts in winter. We'll help you find the right cadence for your grass type and yard size.",
  },
  {
    q: 'Do you offer free estimates?',
    a: "Yes — all estimates are completely free and come with no obligation. Reach out through our estimate form or give us a call and we'll get back to you within 24 hours.",
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Fort Worth, Arlington, Saginaw, North Richland Hills, Mansfield, and Haltom City. Not sure if we cover your area? Just ask.',
  },
  {
    q: 'Can I book a one-time service, or do I need a recurring contract?',
    a: 'One-time services are absolutely available — no contract required. Keep in mind that recurring customers receive a lower per-visit rate, so signing up for a regular schedule is a great way to save.',
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <>
      {/* Mini Hero */}
      <section className="relative h-64 md:h-72 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-55" />
        <div className="relative text-center px-4 max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-300 mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Landscaping Services
          </h1>
          <p className="text-lg text-gray-200">
            Serving Fort Worth, Arlington, Saginaw, &amp; and surrounding areas
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-gray-50 border-b border-gray-200">
        <FadeIn>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {TRUST.map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-green-800">{stat}</p>
                  <p className="text-sm text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Our Core Services</h2>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
              The services our customers rely on most — done right, every time.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED.map((service) => (
              <FadeIn key={service.title}>
                <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {service.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-green-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      fill
                      src={service.image}
                      alt={service.title}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-12 h-1 bg-green-700 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.bullets.map(b => (
                        <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-green-700 font-bold">&#10003;</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link href="/estimate">
                      <button className="w-full bg-green-800 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm">
                        Get a Free Estimate &rarr;
                      </button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Additional Services</h2>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
              From sod installation to sprinkler repairs — we handle it all.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADDITIONAL.map((service) => (
              <FadeIn key={service.title}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 flex flex-col h-full">
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                  <Link
                    href="/estimate"
                    className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm hover:text-green-900 transition mt-4"
                  >
                    Get Estimate &rarr;
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Properties We Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-green-700 text-center mb-2">Who We Serve</p>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Properties We Service</h2>
            <div className="w-12 h-1 bg-green-700 mx-auto mb-4" />
            <p className="text-center text-gray-500 max-w-xl mx-auto mb-10">
              From single-family homes to large commercial properties &mdash; if it has a yard, we&apos;ve got it covered.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROPERTIES.map(({ icon, title, desc }) => (
              <FadeIn key={title}>
                <div className="bg-white rounded-xl border-2 border-gray-100 p-6 text-center hover:border-green-700 hover:shadow-md transition-all duration-200 flex flex-col items-center h-full">
                  <span className="text-4xl mb-3">{icon}</span>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-center text-gray-500 mb-12">
              Have a question not listed here? Give us a call at{' '}
              <a href="tel:8174567068" className="text-green-700 font-semibold hover:text-green-900 transition">
                (817) 456-7068
              </a>
            </p>
          </FadeIn>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <span
                    className={`text-green-700 text-lg shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  >
                    ▾
                  </span>
                </button>
                {openIndex === i && (
                  <p className="pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-800 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-green-200 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate &mdash; we&apos;ll reach out within 24 hours.
          </p>
          <Link href="/estimate">
            <button className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-100 transition shadow-lg">
              Get a Free Estimate &rarr;
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

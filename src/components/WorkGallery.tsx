'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PHOTOS = [
  // Lawn Care
  { src: '/images/Front-lawn-1.jpg', service: 'Lawn Care',    location: 'Fort Worth, TX',           caption: 'Lawn maintenance with edging and cleanup' },
  { src: '/images/Front-lawn-2.jpg', service: 'Lawn Care',    location: 'Arlington, TX',            caption: 'Front lawn mowing and edging service' },
  { src: '/images/Front-lawn-3.jpg', service: 'Lawn Care',    location: 'Arlington, TX',            caption: 'Weekly lawn care with blowing and cleanup' },
  { src: '/images/Front-lawn-4.jpg', service: 'Lawn Care',    location: 'North Richland Hills, TX', caption: 'Residential lawn mowing and edging' },
  { src: '/images/Office-lawn-1.jpg', service: 'Lawn Care',   location: 'Mansfield, TX',            caption: 'Commercial property lawn maintenance' },
  // Flower Beds
  { src: '/images/Flowerbed-1.jpg', service: 'Flower Beds',   location: 'Arlington, TX',            caption: 'Flower bed cleanup and flower planting' },
  { src: '/images/Flowerbed-2.jpg', service: 'Flower Beds',   location: 'Fort Worth, TX',           caption: 'Seasonal flower bed mulch refresh' },
  { src: '/images/Flowerbed-3.jpg', service: 'Flower Beds',   location: 'Saginaw, TX',              caption: 'Flower bed installation and mulching' },
  { src: '/images/Flowerbed-4.jpg', service: 'Flower Beds',   location: 'Mansfield, TX',            caption: 'Flower bed cleanup and mulch application' },
  { src: '/images/Flowerbed-5.jpg', service: 'Flower Beds',   location: 'Arlington, TX',            caption: 'Flower bed installation and tilling' },
  // Tree & Shrub
  { src: '/images/Trimming-1.jpg',  service: 'Tree & Shrub',  location: 'Arlington, TX',            caption: 'Shrub trimming and edging service' },
  { src: '/images/Trimming-2.jpg',  service: 'Tree & Shrub',  location: 'Fort Worth, TX',           caption: 'Shrub shaping and pruning' },
  { src: '/images/Tree-trim-1.jpg', service: 'Tree & Shrub',  location: 'Mansfield, TX',            caption: 'Tree trimming and canopy cleanup' },
  { src: '/images/tree-care-hp.jpg', service: 'Tree & Shrub', location: 'Arlington, TX',            caption: 'Tree and shrub care service' },
  // Clean-up
  { src: '/images/Leaves-1.jpg',    service: 'Clean-up',      location: 'Arlington, TX',            caption: 'Fall leaf removal and yard cleanup' },
  { src: '/images/Leaves-2.jpg',    service: 'Clean-up',      location: 'Fort Worth, TX',           caption: 'Seasonal leaf removal service' },
  { src: '/images/Leaves-3.jpg',    service: 'Clean-up',      location: 'North Richland Hills, TX', caption: 'Fall yard cleanup and debris removal' },
  { src: '/images/Leaves-4.jpg',    service: 'Clean-up',      location: 'Saginaw, TX',              caption: 'Leaf blowing and yard clean-up' },
  { src: '/images/Leaves-5.jpg',    service: 'Clean-up',      location: 'Mansfield, TX',            caption: 'Pre-winter yard cleanup and leaf removal' },
  // Sod
  { src: '/images/Sod-1.jpg',       service: 'Sod',           location: 'Arlington, TX',            caption: 'Sod installation on residential lawn' },
  { src: '/images/Sod-5.jpg',       service: 'Sod',           location: 'Arlington, TX',            caption: 'Tilling before sod installment' },
  { src: '/images/Sod-7.jpg',       service: 'Sod',           location: 'Arlington, TX',            caption: 'New lawn sod installation' },
  { src: '/images/Sod-8.jpg',       service: 'Sod',           location: 'Arlington, TX',            caption: 'Sod replacement' },
  { src: '/images/Sod-2.jpg',       service: 'Sod',           location: 'Arlington, TX',            caption: 'New sod laying — front yard' },
  { src: '/images/Sod-3.jpg',       service: 'Sod',           location: 'Arlington, TX',            caption: 'Front yard sod installation' },
  { src: '/images/Sod-4.jpg',       service: 'Sod',           location: 'Arlington, TX',            caption: 'Full lawn sod replacement' },
];

const CATEGORIES = ['All', 'Lawn Care', 'Flower Beds', 'Tree & Shrub', 'Clean-up', 'Sod'];
const PAGE_SIZE = 9;

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const filtered = activeCategory === 'All'
    ? PHOTOS
    : PHOTOS.filter(p => p.service === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? Math.min(i + 1, filtered.length - 1) : null);
      if (e.key === 'ArrowLeft') setLightboxIndex(i => i !== null ? Math.max(i - 1, 0) : null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const prev = () => setLightboxIndex(i => i !== null ? Math.max(i - 1, 0) : null);
  const next = () => setLightboxIndex(i => i !== null ? Math.min(i + 1, filtered.length - 1) : null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { if (diff > 0) next(); else prev(); }
    touchStartX.current = null;
  };

  const currentPhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null;

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
          <p className="text-xs font-semibold uppercase tracking-widest text-green-300 mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Lawn Care &amp; Landscaping Portfolio
          </h1>
          <p className="text-lg text-gray-200">
            Serving Fort Worth, Arlington &amp; surrounding DFW communities
          </p>
        </div>
      </section>

      {/* Sticky Filter Tabs */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-green-800 text-white shadow-sm'
                    : 'text-gray-600 hover:text-green-800 hover:bg-green-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-400 mb-8">
            Showing {visible.length} of {filtered.length} projects
          </p>

          {/* Gallery grid — CSS Grid guarantees column count regardless of item quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {visible.map((photo, idx) => (
              <div
                key={`${photo.location}-${idx}`}
                className="relative aspect-[4/3] group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setLightboxIndex(idx)}
              >
                <Image
                  fill
                  src={photo.src}
                  alt={`${photo.service} in ${photo.location} — ${photo.caption}`}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-800 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-300 mb-1">
                      {photo.service}
                    </span>
                    <p className="text-white font-semibold text-sm leading-snug">{photo.caption}</p>
                    <p className="text-green-200 text-xs mt-1">{photo.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                className="border-2 border-green-800 text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-green-800 hover:text-white transition-all duration-200"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-green-800 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Like What You See?</h2>
          <p className="text-green-200 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s transform your yard. Get a free, no-obligation estimate today.
          </p>
          <Link href="/estimate">
            <button className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-100 transition shadow-lg">
              Get a Free Estimate &rarr;
            </button>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-92 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Prev */}
          {lightboxIndex > 0 && (
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white text-3xl w-12 h-12 flex items-center justify-center bg-white bg-opacity-15 hover:bg-opacity-30 rounded-full transition z-10"
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}

          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-11 right-0 text-white text-2xl w-10 h-10 flex items-center justify-center bg-white bg-opacity-15 hover:bg-opacity-30 rounded-full transition"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            <div className="relative w-full aspect-[4/3]">
              <Image
                fill
                src={currentPhoto.src}
                alt={`${currentPhoto.service} in ${currentPhoto.location}`}
                className="object-contain rounded-xl"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-green-400">
                {currentPhoto.service}
              </span>
              <p className="text-white font-medium mt-1">{currentPhoto.caption}</p>
              <p className="text-gray-400 text-sm mt-1">{currentPhoto.location}</p>
              <p className="text-gray-600 text-xs mt-3">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {lightboxIndex < filtered.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white text-3xl w-12 h-12 flex items-center justify-center bg-white bg-opacity-15 hover:bg-opacity-30 rounded-full transition z-10"
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}

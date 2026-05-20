'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Gallery() {
  const images = [
    { src: "/images/Front-lawn-1.jpg",  caption: "Lawn Maintenance — Fort Worth, TX" },
    { src: "/images/Tree-trim-1.jpg",   caption: "Tree Trimming — Mansfield, TX" },
    { src: "/images/Front-lawn-3.jpg",  caption: "Weekly Lawn Care — Arlington, TX" },
    { src: "/images/Office-lawn-1.jpg", caption: "Commercial Property — Mansfield, TX" },
    { src: "/images/Trimming-1.jpg",    caption: "Shrub & Edging Service — Arlington, TX" },
    { src: "/images/Sod-1.jpg",         caption: "Sod Installation — Arlington, TX" },
    { src: "/images/Front-lawn-4.jpg",  caption: "Residential Lawn Care — North Richland Hills, TX" },
    { src: "/images/Fertilizer-1.jpg",  caption: "Fertilizer Application — Arlington, TX" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-black text-3xl font-bold text-center mb-10">Our Work</h2>
        </FadeIn>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper pb-10"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center px-2">
                <div className="relative w-full max-w-4xl">
                  <img
                    src={image.src}
                    alt={`Work ${index + 1}`}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white py-3 px-5 rounded-b-xl">
                    <p className="text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-6">
          <Link href="/work">
            <button className="bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition">
              View All Work &rarr;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

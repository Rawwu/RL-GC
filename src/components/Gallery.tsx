'use client' // Mark this as a Client Component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function Gallery() {
    const images = [
        "/images/work1.jpg",
        "/images/work2.jpg",
        "/images/work3.jpg",
    ];
    
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto">
                {/* Section Heading */}
                <h2 className="text-black text-3xl font-bold text-center mb-8">Our Work</h2>
                    {/* Carousel Secion */}
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        autoplay={{
                            delay: 3000,    // Delay between slides in milliseconds (3 seconds)
                            disableOnInteraction: false,    // Continue autoplay after user interacts with carousel
                        }}
                    >
                        {/* Map of Images for Carousel */}
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center">
                                    <img 
                                        src={image} 
                                        alt={`Work ${index + 1}`} 
                                        className="w-full max-w-4xl h-97 object-cover rounded-lg shadow-lg" 
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </section>
        );
  }
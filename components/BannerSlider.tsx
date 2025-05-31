// components/BannerSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';




export default function BannerSlider() {  

  const slides = [
  {
    id: 1,
   imageUrl: '/images/whiteboard.jpg',
    title: 'Make your online',
    description: 'GMake your online presence a reality with us!',
  },
  {
    id: 2,
    imageUrl: '/images/whiteboard.jpg',
    title: 'Make your online',
    description: 'Make your online presence a reality with us!',
  },
  {
    id: 3,
imageUrl: '/images/whiteboard.jpg',
  },
];
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[400px]">
              <Image
                src={slide.imageUrl}
                alt={slide.title || ''}
                fill
                className="object-cover"
              />
              {(slide.title || slide.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  {slide.title && <h2 className="text-2xl font-bold">{slide.title}</h2>}
                  {slide.description && <p>{slide.description}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

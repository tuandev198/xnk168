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
      imageUrl: '/images/banner1.jpg',
      title: 'Make your online',
      description: 'Make your online presence a reality with us!',
    },
    {
      id: 2,
      imageUrl: '/images/banner1.jpg',
      title: 'Creative Solutions',
      description: 'Your digital success starts here.',
    },
    {
      id: 3,
      imageUrl: '/images/banner1.jpg',
      title: 'Boost Your Brand',
      description: 'Let’s build something great together.',
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px]">
              <Image
                src={slide.imageUrl}
                alt={slide.title || 'Banner'}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import React, { useState, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";

interface SlideData {
  title?: string;
  images: string[];
}

interface ImageSwiperProps {
  slides: SlideData[];
  primaryColor?: string;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({ slides, primaryColor = "#FF8D50", }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const hasTitle = slides.some((slide) => slide.title);

  if (!hasTitle) {
    return (
      <div className="lg:col-span-8 relative w-full content-container !px-0">
        <Swiper
          modules={[Scrollbar]}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.5 },
          }}
          spaceBetween={20}
          centeredSlides={false}
          className="mb-6 cursor-grab w-[100%]"
          scrollbar={{
            hide: false,
            draggable: true,
          }}
        >
          {slides.flatMap((slide, titleIndex) =>
            slide.images.map((image, imgIndex) => (
              <SwiperSlide key={`${titleIndex}-${imgIndex}`}>
                <div className="h-[450px] bg-gray-200 rounded-[1rem] overflow-hidden mb-12">
                  <img
                    src={image}
                    alt={`Slide ${titleIndex} Image ${imgIndex}`}
                    className="h-[450px] w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    );
  }

  const titleSlideIndexMap = slides.reduce<number[]>((acc, slide, idx) => {
    const previousIndex = acc[idx - 1] || 0;
    const startIndex = previousIndex + (slides[idx - 1]?.images.length || 0);
    acc.push(startIndex);
    return acc;
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentSlideIndex = swiper.activeIndex;
    const titleIndex = titleSlideIndexMap.findIndex(
      (startIndex, idx) =>
        currentSlideIndex >= startIndex &&
        (idx === titleSlideIndexMap.length - 1 ||
          currentSlideIndex < titleSlideIndexMap[idx + 1])
    );
    setActiveIndex(titleIndex);
  };

  const handleTitleClick = (index: number) => {
    setActiveIndex(index);
    const slideIndex = titleSlideIndexMap[index];
    swiperRef.current?.slideTo(slideIndex);
  };

  return (
    <div className="lg:grid lg:grid-cols-12 gap-8 mt-24">
      <div className=" lg:col-span-4 overflow-y-auto lg:pl-[10px] pr-8 lg:max-h-[450px] max-h-[200px] relative scrollbar scrollbar-none scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-200">
        {slides.map((slide, index) =>
          slide.title ? (
            <div
              key={index}
              onClick={() => handleTitleClick(index)}
              className={`cursor-pointer p-4 duration-300 rounded-xl mb-2 text-[1rem] tracking-wide leading-7  ${
                index === activeIndex
                  ? "font-bold text-white"
                  : "text-gray-600 hover:bg-gray-200 lg:hover:-translate-x-[8px]"
              }`}
              style={{
                backgroundColor: index === activeIndex ? primaryColor : "transparent",
              }}
            >
              {slide.title}
            </div>
          ) : null
        )}
        <div className="block sticky right-0 left-0 bottom-0 w-full h-20 bg-gradient-to-t from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div>
      </div>

      <div className="lg:col-span-8 relative lg:pr-8">
        <Swiper
          modules={[Scrollbar]}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1.2 },
          }}
          spaceBetween={20}
          centeredSlides={false}
          className="mb-24 cursor-grab  max-w-full"
          scrollbar={{
            hide: false,
            draggable: true,
          }}
        >
          {slides.map((slide, titleIndex) =>
            slide.images.map((image, imgIndex) => (
              <SwiperSlide key={`${titleIndex}-${imgIndex}`}>
                <div className="h-[450px] bg-gray-200 rounded-[1rem] overflow-hidden mb-12">
                  <img
                    src={image}
                    alt={`Slide ${titleIndex} Image ${imgIndex}`}
                    className="h-[450px] w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ImageSwiper;

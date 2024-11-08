import React, { useState, useRef, ReactNode } from "react";
import iconMap from "../components/utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

interface SlideData {
  title?: string;
  children: ReactNode;
  icon?: string;
}

interface PanelProps {
  slides: SlideData[];
}

const Panel: React.FC<PanelProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const titleSlideIndexMap = slides.map((_, idx) => idx);

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
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="grid lg:grid-cols-12   mt-24">
      <div className="lg:col-span-3 lg:pl-[10px] pr-8 lg:max-h-[450px] relative scrollbar lg:scrollbar-none scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-200 mb-8 lg:mb-0">
        
      <p className="font-light text-4xl tracking-wide">關注議題</p>
          <p className="mt-2 text-orange">Focus</p>
        {slides.map((slide, index) =>
          slide.title ? (
            <div
              key={index}
              onClick={() => handleTitleClick(index)}
              className={`cursor-pointer p-4 duration-300 rounded-xl mb-2 text-[1rem] tracking-wide leading-7  flex gap-4 items-center hover:bg-gray-100  ${
                index === activeIndex
                  ? "font-bold text-orange"
                  : "lg:hover:-translate-x-[8px]"
              }`}
            >
              {slide.icon && iconMap[slide.icon] && (
                <FontAwesomeIcon
                  icon={iconMap[slide.icon]}
                  className="lg:text-3xl"
                />
              )}
              {slide.title}
            </div>
          ) : null
        )}
      </div>

      <div className="lg:col-span-9 relative w-full">
        <Swiper
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          centeredSlides={false}
          allowTouchMove={false}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide.children}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Panel;

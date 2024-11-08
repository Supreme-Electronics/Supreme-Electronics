import React, { useState, useRef, ReactNode } from "react";
import iconMap from "../utils/icons";
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
  primaryColor?: string;
}

const Panel: React.FC<PanelProps> = ({ slides, primaryColor = "#FF8D50", }) => {
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
    <div className="lg:grid lg:grid-cols-12  mt-24">
      <div className="lg:col-span-3 overflow-y-auto lg:overflow-y-visible lg:pl-[10px] pr-8 lg:max-h-[450px] max-h-[200px] relative scrollbar lg:scrollbar-none scrollbar-thin scrollbar-thumb-orange scrollbar-track-gray-200 mb-8 lg:mb-0">
        {slides.map((slide, index) =>
          slide.title ? (
            <div
              key={index}
              onClick={() => handleTitleClick(index)}
              className={`cursor-pointer p-4 duration-300 rounded-xl mb-2 text-[1rem] tracking-wide leading-7  flex gap-4 items-center ${
                index === activeIndex
                  ? "font-bold text-white"
                  : "text-gray-600 hover:bg-gray-200 lg:hover:-translate-x-[8px]"
              }`}

              style={{
                backgroundColor: index === activeIndex ? primaryColor : "transparent",
              }}
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
        <div className="block sticky right-0 left-0 bottom-0 w-full h-20 bg-gradient-to-t from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div>
      </div>

      <div className="lg:col-span-9 relative w-full ">
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

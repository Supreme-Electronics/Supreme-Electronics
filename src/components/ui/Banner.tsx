import React from "react";
import { useEffect, useState } from "react";
import Breadcrumbs from "../nav/BreadCrumbs";
import navItems from '../../data/config/nav.json'

interface BannerProps {
  backgroundImage: string;
  title: string;
  description?: string;
  mask?: boolean;
  center?: boolean;
  fixed?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  title,
  description,
  mask = true,
  center = false,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scaleValue = 1 + scrollPosition * 0.0002;

  return (
    <div className="relative w-full h-[30vh] min-h-[450px] overflow-hidden mb-[2.5rem] xl:mb-[6rem]">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out"
        style={{
          transform: `scale(${scaleValue})`,
        }}
      />
      {/* Mask (Optional) */}
      {mask && <div className="absolute inset-0 bg-gray-700 opacity-60"></div>}
      
      {/* Content */}
      <div className="w-full h-full content-container">
        <div
          className={`relative w-full h-full flex flex-col justify-center  ${
            center ? "items-center" : "items-start"
          }  text-white`}
        >
            <div className="pt-16"></div>
              <Breadcrumbs items={navItems} />

          <h1 className="text-5xl font-light mb-4 tracking-widest pt-4">
            {title}
          </h1>
          {description && (
            <p
              className={`text-lg font-light mt-4 text-center max-w-[1000px] tracking-wide leading-8 ${
                center ? "text-center" : "text-left"
              } `}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useEffect, useRef, useState } from "react";

interface SectionProps {
  background?: string;
  children: React.ReactNode;
  type?: "basic" | "no-container";
  isFade?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  background,
  children,
  type = "basic",
  className = "",
  isFade = false,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const threshold = mediaQuery.matches ? 0.2 : 0.05;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-[40px] md:py-[100px] fade-in-up text-gray-600  ${className}  ${
        isVisible ? "is-visible" : ""
      } `}
    >
      {background && (
        <>
          <img
            src={background}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60 z-10" />
        </>
      )}
      <div
        className={`relative ${
          type === "basic" ? "content-container" : ""
        } z-20`}
      >
        {children}
      </div>

      {isFade && (
        <div className="hidden lg:block absolute left-0 top-0 right-0 w-fukk h-12  bg-gradient-to-b from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div>
      )}
      {isFade && (
        <div className="hidden lg:block absolute left-0 bottom-0 right-0 w-fukk h-12  bg-gradient-to-t from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div>
      )}
    </section>
  );
};

export default Section;

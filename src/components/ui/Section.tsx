import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  background?: string;
  children: React.ReactNode;
  type?: "basic" | "no-container"; // New prop to control container presence
}

const Section: React.FC<SectionProps> = ({ background, children, type = "basic" }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');
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
      style={{ background }}
      className={`py-[100px] fade-in-up ${isVisible ? 'is-visible' : ''}`}
    >
      {type === "basic" ? (
        <div className="content-container">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;

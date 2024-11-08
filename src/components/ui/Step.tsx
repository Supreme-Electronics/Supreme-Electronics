import { faArrowDown, faArrowRight } from "@fortawesome/pro-solid-svg-icons";
import iconMap from "../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface StepItem {
  step?: string;
  title: string;
  icon: string;
  description?: string;
}

interface StepProps {
  steps: StepItem[];
  primaryColor?: string;
}

const Step: React.FC<StepProps> = ({ steps, primaryColor = "#FF8D50" }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  if (steps[0].description) {
    return (
      <div ref={containerRef} className="flex flex-col gap-12 mt-24 mb-24 ">
        <div
          className="xl:grid flex flex-col gap-12 "
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((item, index) => (
            <div key={index} className="flex xl:flex-col gap-6 xl:gap-12 xl:gap-0 xl:items-center relative">
              <div className="flex  xl:justify-center items-center relative">
                <div className="glow-card aspect-square w-[80px] h-[80px] xl:w-[150px] xl:h-[150px] flex items-center justify-center text-white rounded-full z-10">
                  <FontAwesomeIcon
                    icon={iconMap[item.icon]}
                    style={{ color: primaryColor }}
                    className="xl:text-6xl text-4xl"
                  />
                </div>
              </div>
              <div className="flex xl:items-center gap-4 xl:mt-12">
                <div className="flex gap-8 items-center">
                  <p className="text-gray-200 text-7xl font-bold hidden lg:block">
                    {index + 1}
                  </p>
                  <div className="flex flex-col gap-2 ">
                    <p className="text-lg font-semibold tracking-wide">
                      {item.title}
                    </p>
                    <p className="text-[1rem] tracking-wide leading-7 ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    //   <div
    //     ref={containerRef}
    //     className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-6 justify-between mt-24"
    //   >
    //     {steps.map((item, index) => (
    //       <motion.div
    //         key={index}
    //         className="flex xl:flex-col gap-6 items-center"
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    //         transition={{ delay: index * 0.2, duration: 0.5 }}
    //       >
    //         <div className="h-[100px] w-[100px] rounded-full bg-gray-200 flex items-center justify-center">
    //           <FontAwesomeIcon icon={iconMap[item.icon]} className="text-4xl" />
    //         </div>
    //         <div className="flex xl:flex-col gap-4 items-center">
    //           <p className="text-orange">{item.step}</p>
    //           <p>{item.title}</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    <ul className="steps steps-vertical sm:steps-horizontal w-full pt-8 sm:pt-36">
      {steps.map((item, index) => (
        <li className="step relative  md:text-lg">
          {item.title}
          <span>
            <FontAwesomeIcon
              icon={iconMap[item.icon]}
              style={{ color: primaryColor }}
              className="hidden sm:block text-5xl sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-[150%]"
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Step;

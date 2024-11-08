import iconMap from "../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";




interface StepItem {
  step?: string;
  title: string;
  icon: string;
  text?: string;
}

interface StepProps {
  steps: StepItem[];
  primaryColor?: string;
}

const StepProcess: React.FC<StepProps> = ({
  steps,
  primaryColor = "#FF8D50",
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div ref={containerRef} className="flex flex-col gap-6 mt-12">
      {steps.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <div className="lg:flex hidden h-[100px] w-[100px] min-w-[100px] rounded-full  text-white flex-col gap-2 items-center justify-center relative" style={{backgroundColor:primaryColor}}>
            <FontAwesomeIcon
              icon={iconMap[item.icon]}
              className="text-4xl"
            />
          </div>
          <div className="hidden lg:block h-[1px] w-[40px] min-w-[40px]" style={{backgroundColor:primaryColor}}></div>
          <div className="bg-gray-50 p-8 flex-grow relative">
            <p className="text-[1.2rem] mb-3 font-light tracking-wide leading-7  flex items-center gap-4">
              {item.step && (
                <span className="text-sm " style={{color: primaryColor}}>{item.step}</span>
              )}
              <FontAwesomeIcon
                icon={iconMap[item.icon]}
                style={{ color: primaryColor }}
                className="text-2xl blokc lg:hidden"
              />
              {item.title}
            </p>
            <p className="text-[1rem] tracking-wide leading-7 ">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepProcess;

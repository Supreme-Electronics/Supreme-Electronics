import iconMap from "../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface IconGridItem {
  title: string;
  icon: string;
}

interface IconGridProps {
  steps: IconGridItem[];
  primaryColor?: string;
}

const IconGrid: React.FC<IconGridProps> = ({ steps, primaryColor = "#FF8D50" }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row gap-10 justify-center mt-12"
    >
      {steps.map((item, index) => (
        <motion.div
          key={index}
          className="flex xl:flex-col gap-6 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <div className="h-[100px] w-[100px] rounded-xl border  flex items-center justify-center" style={{borderColor: primaryColor}}>
            <FontAwesomeIcon
              icon={iconMap[item.icon]}
              className="text-4xl" style={{color: primaryColor}}
            />
          </div>
          <div className="flex xl:flex-col gap-4 items-center lg:max-w-[100px] text-center">
            <p>{item.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default IconGrid;

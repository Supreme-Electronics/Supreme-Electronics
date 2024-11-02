import {
    faBullseye,
    faClipboardList,
    faFileSignature,
    faMapMarked,
    faSearch,
    faChartPie,
  } from "@fortawesome/pro-light-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { motion, useInView } from "framer-motion";
  import React, { useRef } from "react";
  
  const steps = [
    { icon: faMapMarked, step: "Step 1", title: "稽核範圍" },
    { icon: faClipboardList, step: "Step 2", title: "稽核對象" },
    { icon: faBullseye, step: "Step 3", title: "稽核目的" },
    { icon: faSearch, step: "Step 4", title: "稽核方式" },
    { icon: faFileSignature, step: "Step 5", title: "稽核報告" },
    { icon: faChartPie, step: "Step 6", title: "稽核評估" },
  ];
  
  const AuditProcess: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
  
    return (
      <div ref={containerRef} className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-6 justify-between mt-24">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="flex xl:flex-col gap-6 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="h-[100px] w-[100px] rounded-full bg-gray-200 flex items-center justify-center">
              <FontAwesomeIcon icon={item.icon} className="text-4xl" />
            </div>
            <div className="flex xl:flex-col gap-4 items-center">
              <p className="text-orange">{item.step}</p>
              <p>{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default AuditProcess;
  
import {
    faBullseye,
    faAnalytics,
    faCheckCircle,
    faCog,
    faComments,
    faExclamationCircle,
    faEye,
    faLightbulb,
    faShieldAlt,
  } from "@fortawesome/pro-light-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { motion, useInView } from "framer-motion";
  import React, { useRef } from "react";
  
  const steps = [
    { icon: faLightbulb, step: "Step 1", title: "意識建立" },
    { icon: faBullseye, step: "Step 2", title: "目標設定" }, 
    { icon: faExclamationCircle, step: "Step 3", title: "事件辨識" }, 
    { icon: faAnalytics, step: "Step 4", title: "風險分析" }, 
    { icon: faCheckCircle, step: "Step 5", title: "風險評估" }, 
    { icon: faShieldAlt, step: "Step 6", title: "風險應變" }, 
    { icon: faCog, step: "Step 7", title: "控制作業" }, 
    { icon: faComments, step: "Step 8", title: "資訊溝通" }, 
    { icon: faEye, step: "Step 9", title: "風險監控" }, 
  ];
  
  const RiskProcess: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
  
    return (
      <div ref={containerRef} className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-6 justify-between mt-12">
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
  
  export default RiskProcess;
  
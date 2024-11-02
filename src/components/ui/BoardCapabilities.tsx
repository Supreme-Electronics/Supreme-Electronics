import {
    faBalanceScale,
    faLifeRing,
    faGlobe,
    faChartLine,
    faIndustry,
    faUsersCog,
    faProjectDiagram,
    faGavel,
    faChessKnight,
  } from "@fortawesome/pro-light-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { motion, useInView } from "framer-motion";
  import React, { useRef } from "react";
  
  const steps = [
    { icon: faBalanceScale, title: "營運判斷能力" },
    { icon: faLifeRing,  title: "危機處理能力" },
    { icon: faGlobe,  title: "國際市場觀" },
    { icon: faChartLine,  title: "會計及財務分析能力" },
    { icon: faIndustry, title: "產業知識" },
    { icon: faUsersCog,  title: "領導能力" },
    { icon: faProjectDiagram,  title: "經營管理能力" },
    { icon: faGavel,  title: "法律知識" },
    { icon: faChessKnight, title: "決策能力" },
  ];
  
  const BoardCapabilities: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
  
    return (
      <div ref={containerRef} className="grid grid-cols-2 xl:flex xl:flex-row gap-6 justify-between mt-12">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="flex xl:flex-col gap-6 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="h-[100px] w-[100px] rounded-xl border border-orange flex items-center justify-center">
              <FontAwesomeIcon icon={item.icon} className="text-4xl text-orange" />
            </div>
            <div className="flex xl:flex-col gap-4 items-center">
              <p>{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default BoardCapabilities;
  
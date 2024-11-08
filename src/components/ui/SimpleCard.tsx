import {
  faFileSignature,
  faCogs,
  faChartLine,
  faGavel,
  faSync,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import iconMap from "../utils/icons";

interface StepItem {
  title: string;
  icon: string;
}

interface StepProps {
  steps: StepItem[];
  primaryColor?: string;
}

const SimpleCard: React.FC<StepProps> = ({
  steps,
  primaryColor = "#FF8D50",
}) => {
  return (
    <div className="grid  lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4 ">
      {steps.map((item, index) => (
        <div className="bg-gray-50 rounded-xl px-6 py-4 flex gap-6 items-center ">
          <FontAwesomeIcon
            icon={iconMap[item.icon]}
            style={{ color: primaryColor }}
            className="text-4xl"
          />
          <p className="text-[1rem] tracking-wide leading-7 ">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SimpleCard;

import iconMap from "../utils/icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faGavel,
  faEarth,
  faHandsHelping,
  faChartBar,
} from "@fortawesome/pro-solid-svg-icons";

interface SustainabilitySectionProps {
  title: string;
  description: string;
  icon: string;
  iconBackgroundColor?: string;
}

interface SustainabilityOverviewGridProps {
  sections: SustainabilitySectionProps[];
  centerText: string;
  primaryColor?: string;
}

const OverviewGrid: React.FC<SustainabilityOverviewGridProps> = ({
  sections,
  centerText,
  primaryColor = "#FF8D50",
}) => {
  return (
    <div className="xl:grid grid-cols-2 my-36 gap-4 relative text-[1rem] tracking-wide leading-7 ">
      <div className="grid grid-cols-8 gap-8 group relative">
        <div className="border-r-[1px] border-t-[1px] border-[#D9D9D9] w-[60%] h-[50px] hidden xl:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full">
          <FontAwesomeIcon
            icon={faCircle}
            className="text-[#D9D9D9] xl:block absolute left-0 top-0 text-sm -translate-y-1/2 -translate-x-1/2 hidden"
          />
        </div>
        <div className="col-span-8 xl:col-span-5 content py-8 ">
          <p
            className="text-xl font-semibold mb-4"
            style={{ color: primaryColor }}
          >
            {sections[0].title}
          </p>
          <p>{sections[0].description}</p>
        </div>
        <div className="col-span-3 w-full bg-gray-100 rounded-xl hidden xl:flex justify-center items-center aspect-square ">
          <FontAwesomeIcon
            icon={iconMap[sections[0].icon]}
           
            className="h-[60px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-8 relative group">
        <div className="border-l-[1px] border-t-[1px] border-[#D9D9D9] w-[60%] h-[50px] hidden xl:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full">
          <FontAwesomeIcon
            icon={faCircle}
            className="text-[#D9D9D9] absolute right-0 top-0 text-sm -translate-y-1/2 translate-x-1/2"
          />
        </div>
        <div className="col-span-3 w-full bg-[#EBF2FC] rounded-xl aspect-square  hidden xl:flex justify-center items-center ">
        <FontAwesomeIcon
            icon={iconMap[sections[1].icon]}
           
            className="h-[60px]"
          />
        </div>

        <div className=" col-span-8 xl:col-span-5 content py-8 ">
          <p
            className="text-xl font-semibold mb-4"
            style={{ color: primaryColor }}
          >
            {sections[1].title}
          </p>
          <p>{sections[1].description}</p>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-8 relative group">
        <div className="w-[60%] h-[50px]  hidden xl:block absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full border-r-[1px] border-b-[1px] border-[#D9D9D9]">
          <FontAwesomeIcon
            icon={faCircle}
            className="text-[#D9D9D9] absolute left-0 bottom-0 text-sm translate-y-1/2 -translate-x-1/2"
          />
        </div>

        <div className="col-span-8 xl:col-span-5 content py-8 ">
          <p
            className="text-xl font-semibold mb-4"
            style={{ color: primaryColor }}
          >
            {sections[2].title}
          </p>
          <p>{sections[2].description}</p>
        </div>
        <div className="col-span-3 w-full bg-[#EBF2FC] rounded-xl aspect-square  hidden xl:flex justify-center items-center ">
        <FontAwesomeIcon
            icon={iconMap[sections[2].icon]}
          
            className="h-[60px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-8 gap-8 relative group">
        <div className="w-[60%] h-[50px]  hidden xl:block absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full border-l-[1px] border-b-[1px] border-[#D9D9D9]">
          <FontAwesomeIcon
            icon={faCircle}
            className="text-[#D9D9D9] absolute right-0 bottom-0 text-sm translate-y-1/2 translate-x-1/2"
          />
        </div>
        <div className="col-span-3 w-full bg-gray-100 rounded-xl aspect-square   hidden xl:flex justify-center items-center ">
        <FontAwesomeIcon
            icon={iconMap[sections[3].icon]}
          
            className="h-[60px]"
          />
        </div>

        <div className="col-span-8 xl:col-span-5 content py-8 ">
          <p
            className="text-xl font-semibold mb-4"
            style={{ color: primaryColor }}
          >
            {sections[3].title}
          </p>
          <p>{sections[3].description}</p>
        </div>
      </div>
      <div
        className="rounded-full bg-white font-bold tracking-widest text-2xl  hidden xl:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px]  items-center justify-center "
        style={{ color: primaryColor }}
      >
        {centerText}
      </div>
    </div>
  );
};

export default OverviewGrid;

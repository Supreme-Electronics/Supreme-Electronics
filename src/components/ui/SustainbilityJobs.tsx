import {
    faFileSignature,
    faCogs,
    faChartLine,
    faGavel,
    faSync,
  } from "@fortawesome/pro-light-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";

  
  const SustainbilityJobs: React.FC = () => {
  
    return (
      <div className="grid  lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4 ">
        <div className="bg-gray-50 rounded-xl px-6 py-4 flex gap-6 items-center ">
            <FontAwesomeIcon icon={faCogs} className="text-orange text-4xl" />
            <p className="text-[1rem] tracking-wide leading-7 ">擬定永續發展相關制度</p>
        </div>
        <div className="bg-gray-50 rounded-xl px-6 py-4 flex gap-6 items-center ">
            <FontAwesomeIcon icon={faChartLine} className="text-orange text-4xl" />
            <p className="text-[1rem] tracking-wide leading-7 ">定期評估永續計劃執行成效，且每年向董事會報告年度執行成果</p>
        </div>
        <div className="bg-gray-50 rounded-xl px-6 py-4 flex gap-6 items-center ">
            <FontAwesomeIcon icon={faGavel} className="text-orange text-4xl" />
            <p className="text-[1rem] tracking-wide leading-7 ">其他經董事會決議指示本委員會應辦理之事項</p>
        </div>
        <div className="bg-gray-50 rounded-xl px-6 py-4 flex gap-6 items-center ">
            <FontAwesomeIcon icon={faSync} className="text-orange text-4xl" />
            <p className="text-[1rem] tracking-wide leading-7 ">監督永續發展政策方向與推動計劃，且定期追蹤執行進度</p>
        </div>
        <div className="bg-gray-50 rounded-xl px-6 py-4 flex gap-6 items-center ">
            <FontAwesomeIcon icon={faFileSignature} className="text-orange text-4xl" />
            <p className="text-[1rem] tracking-wide leading-7 ">審定永續報告書</p>
        </div>
      </div>
    );
  };
  
  export default SustainbilityJobs;
  
import { faCheckCircle, faCircleCaretUp } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ValueChainTable: React.FC = () => {
  return (

    <div>
        <div className="flex justify-end items-center gap-6">
            <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" />
            <p className=" text-[1rem] tracking-wide leading-7 text-gray-600">直接影響</p>
            </div>
            <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCircleCaretUp} className="text-xl text-blue" />
            <p className=" text-[1rem] tracking-wide leading-7 text-gray-600">間接影響</p>
            </div>
        </div>
    <table className="min-w-full mt-4">
      <thead className="bg-orange text-white">
        <tr>
          <th
            className="px-4 py-2 border-r border-white font-medium"
            rowSpan={2}
          >
            面向
          </th>
          <th
            className="px-4 py-2  border-r border-white font-medium"
            rowSpan={2}
          >
            重大主題
          </th>
          <th
            className="px-4 py-2 border-b border-white font-medium"
            colSpan={3}
          >
            價值鏈邊界影響
          </th>
        </tr>
        <tr>
          <th className="px-4 py-2  border-r border-white font-medium">上游</th>
          <th className="px-4 py-2  border-r border-white font-medium">
            至上電子營運
          </th>
          <th className="px-4 py-2 font-medium">下游</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-300">
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600" rowSpan={4}>治理/經濟</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">誠信經營</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCircleCaretUp} className="text-xl text-blue" /></td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">公司治理</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCircleCaretUp} className="text-xl text-blue" /></td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">經營績效</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">風險管理</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600" rowSpan={2}>治理</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">資訊安全</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCircleCaretUp} className="text-xl text-blue" /></td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">產品與客戶服務</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCircleCaretUp} className="text-xl text-blue" /></td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600" rowSpan={2}>社會</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">人才培育與留任</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCircleCaretUp} className="text-xl text-blue" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"></td>
        </tr>
        <tr className="border-b border-gray-300">
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">勞雇與勞資關係</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCircleCaretUp} className="text-xl text-blue" /></td>
        </tr>
        <tr className="border-b border-gray-300">
        <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">環境</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600">氣候變遷對策及溫室氣體管理與能源管理</td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCircleCaretUp} className="text-xl text-blue" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCheckCircle} className="text-xl text-orange" /></td>
          <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 text-center"><FontAwesomeIcon icon={faCircleCaretUp} className="text-xl text-blue" /></td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default ValueChainTable;

import {
  faCheckCircle,
  faCircleCaretUp,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

const ValueChainTable: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-end items-center gap-6">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-xl text-orange"
          />
          <p className="text-[1rem] tracking-wide leading-7">
            {t("common.directImpact")}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faCircleCaretUp}
            className="text-xl text-blue"
          />
          <p className="text-[1rem] tracking-wide leading-7">
            {t("common.indirectImpact")}
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full mt-4">
          <thead className="bg-[#4694d1] text-white">
            <tr>
              <th
                className="px-4 py-2 border-r border-white font-medium"
                rowSpan={2}
              >
                {t("common.orientation")}
              </th>
              <th
                className="px-4 py-2 border-r border-white font-medium"
                rowSpan={2}
              >
                {t("common.majorTopics")}
              </th>
              <th
                className="px-4 py-2 border-b border-white font-medium"
                colSpan={3}
              >
                {t("common.valueChainImpact")}
              </th>
            </tr>
            <tr>
              <th className="px-4 py-2 border-r border-white font-medium">
                {t("common.upstream")}
              </th>
              <th className="px-4 py-2 border-r border-white font-medium">
                {t("common.inhouseOperations")}
              </th>
              <th className="px-4 py-2 font-medium">
                {t("common.downstream")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td
                className="px-4 py-5 text-[1rem] tracking-wide leading-7"
                rowSpan={4}
              >
                {t("common.governanceEconomy")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.integrityManagement")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCircleCaretUp}
                  className="text-xl text-blue"
                />
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.corporateGovernance")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCircleCaretUp}
                  className="text-xl text-blue"
                />
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.businessPerformance")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.riskManagement")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td
                className="px-4 py-5 text-[1rem] tracking-wide leading-7"
                rowSpan={2}
              >
                {t("common.governance")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.informationSecurity")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center"></td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCircleCaretUp}
                  className="text-xl text-blue"
                />
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.productsAndCustomerService")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCircleCaretUp}
                  className="text-xl text-blue"
                />
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td
                className="px-4 py-5 text-[1rem] tracking-wide leading-7"
                rowSpan={2}
              >
                {t("common.society")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.talentDevelopmentAndRetention")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCircleCaretUp}
                  className="text-xl text-blue"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center"></td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.laborRelations")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center"></td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCircleCaretUp}
                  className="text-xl text-blue"
                />
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.environment")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7">
                {t("common.climateChangeAndGHGManagement")}
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCircleCaretUp}
                  className="text-xl text-blue"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-xl text-orange"
                />
              </td>
              <td className="px-4 py-5 text-[1rem] tracking-wide leading-7 text-center">
                <FontAwesomeIcon
                  icon={faCircleCaretUp}
                  className="text-xl text-blue"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ValueChainTable;

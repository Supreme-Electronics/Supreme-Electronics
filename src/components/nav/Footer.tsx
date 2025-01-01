import React from "react";
import SupremeLogo from "../../assets/img/logo/supreme.png";
import { Link } from "react-router-dom";
import {
  faClipboardListCheck,
  faCloudArrowDown,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full bg-gray-200  py-20  text-gray-600 rounded-t-[2rem]">
        <div className="content-container">
          <div className="flex lg:flex-row flex-col justify-between gap-6  lg:items-center">
            <div className="flex gap-6 items-center">
              <a
                href="http://www.supreme.com.tw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={SupremeLogo}
                  alt="Supreme Logo"
                  className="lg:w-[230px] w-[150px]"
                />
              </a>
              <div className="w-[1px] h-full bg-gray-300">&nbsp;</div>
              <Link to="/">
                <p className="">{t("common.esgSupreme")}</p>
              </Link>
            </div>
            <div className="flex lg:flex-row flex-col gap-6  tracking-wide text-lg mt-8 lg:mt-0">
              <Link to="/sustainability/survey">
                <div className="group hover:shadow cursor-pointer justify-between  flex text-lg tracking-wide items-center pl-5 py-2 pr-2 bg-white bg-opacity-60 overflow-hidden text-gray-600 rounded-full backdrop-filter backdrop-blur-lg transition duration-300">
                  <div>{t("common.stakeholderQuestionnaire")}</div>
                  <div className="ml-6 bg-white h-[35px] w-[35px] rounded-full flex items-center justify-center text-orange-400 duration-300 group-hover:ml-8 group-hover:bg-orange-400 group-hover:text-white">
                    <FontAwesomeIcon
                      icon={faClipboardListCheck}
                      className="transform transition-transform duration-500"
                    />
                  </div>
                </div>
              </Link>
              <Link
                to="http://www.supreme.com.tw/File/ESG/2023ESG%E6%B0%B8%E7%BA%8C%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf"
                target="_blank"
              >
                <div className="group hover:shadow cursor-pointer justify-between  flex text-lg tracking-wide items-center pl-5 py-2 pr-2 bg-white bg-opacity-60 overflow-hidden text-gray-600 rounded-full backdrop-filter backdrop-blur-lg transition duration-300">
                  {t("common.esgReportDownload")}
                  <div className="ml-6 bg-white h-[35px] w-[35px] rounded-full flex items-center justify-center text-orange-400 duration-300 group-hover:ml-8 group-hover:bg-orange-400 group-hover:text-white">
                    <FontAwesomeIcon
                      icon={faCloudArrowDown}
                      className="transform transition-transform duration-500"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-400 my-10 bg-opacity-50"></div>

          <div className="flex md:flex-row flex-col justify-between gap-12 md:gap-24 tracking-wide">
            <div className="flex flex-col gap-4 ">
              <Link to={"/news"} className="font-bold text-xl cursor-pointer">
                {" "}
                {t("common.latestNews")}
              </Link>
            </div>
            <div className="flex flex-col gap-4 ">
              <Link
                to={"/enterprise"}
                className="font-bold text-xl cursor-pointer"
              >
                {" "}
                {t("common.happyEnterprise")}
              </Link>
              <Link
                to={"/enterprise/occupational-safety"}
                className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.friendlyWorkplace")}
              </Link>
              <Link
                to={"/enterprise/welfare-care"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.employeePolicy")}
              </Link>
              <Link
                to={"/enterprise/diverse-growth"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.talentDevelopment")}
              </Link>
              <Link
                to={"/enterprise/hr-distribution"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.humanResourcesDistribution")}
              </Link>
            </div>
            <div className="flex flex-col gap-4 ">
              <Link
                to={"/sustainability"}
                className="font-bold text-xl cursor-pointer"
              >
                {t("common.sustainableManagement")}
              </Link>
              <Link
                to={"/sustainability/message-from-chairman"}
                className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.messageFromManagement")}
              </Link>
              <Link
                to={"/sustainability/compensation-committee"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.functionalCommittee")}
              </Link>
              <Link
                to={"/sustainability/stakeholder-engagement"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.stakeholderSection")}
              </Link>
              <Link
                to={"/sustainability/intellectual-property"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.technologyRisk")}
              </Link>
              <Link
                to={"/sustainability/supply-chain"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.sustainableSupplyChain")}
              </Link>
            </div>
            <div className="flex flex-col gap-4 ">
              <Link
                to={"/symbiosis"}
                className="font-bold text-xl cursor-pointer"
              >
                {" "}
                {t("common.sustainableCoexistence")}
              </Link>
              <Link
                to={"/symbiosis/climate-change"}
                className="mt-2 opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.climateChangeStrategy")}
              </Link>
              <Link
                to={"/symbiosis/greenhouse-gases"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.greenhouseGasAndActionPlan")}
              </Link>
              <Link
                to={"/symbiosis/green-energy"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.greenEnergyLowCarbonPlan")}
              </Link>
              <Link
                to={"/symbiosis/energy-management"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.energyManagement")}
              </Link>
              <Link
                to={"/symbiosis/waste-management"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.wasteManagement")}
              </Link>
              <Link
                to={"/symbiosis/water-management"}
                className="opacity-70 duration-300 hover:opacity-100 cursor-pointer"
              >
                {t("common.waterResourceManagement")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange text-white text-center text-xs py-8 tracking-wide">
        © 2024 Supreme Electronics Co., Ltd.. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

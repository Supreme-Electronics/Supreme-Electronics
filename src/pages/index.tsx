import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from "../components/ui/Tab";
import { Stat } from "../components/ui/StateDisplay";
import "swiper/css";
import "swiper/css/scrollbar";
import { faCloudArrowDown } from "@fortawesome/pro-solid-svg-icons";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import Panel from "./Panel";
import { motion } from "framer-motion";
import NewsSwiper from "./NewsSwiper";
import PrizeSwiper from "./PrizeSwiper";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { Scrollbar } from "swiper/modules";
import { faArrowUpRight, faDownload } from "@fortawesome/pro-light-svg-icons";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
}
const LandingPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useIntersectionObserver(videoRef, { threshold: 0.5 }); 

  
const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true
    });
  }, []);

  const translations: Record<string, string> = {
    "Enterprise": "幸福企業",
    "Governance": "永續經營",
    "Environment": "永續共生",
    "Society": "社會共榮"
  };

  const [activeCategory, setActiveCategory] = useState("幸福企業");
  const images = {
    永續經營:
      "https://res.cloudinary.com/dvgxlmyje/image/upload/v1730444504/bg-occupational-safety_w10jx9.webp",
    永續共生:
      "https://res.cloudinary.com/dvgxlmyje/image/upload/v1730305453/bg-sustainbility-committee_t5tpmw.webp",
    幸福企業:
      "https://res.cloudinary.com/dvgxlmyje/image/upload/v1730397956/bg-hr-distribution_v1txni.webp",
    社會共榮:
      "https://res.cloudinary.com/dvgxlmyje/image/upload/v1730624485/bg-greenhouse-gases_vqmzrr.webp",
  };

  useEffect(() => {
    if (translations[activeCategory]) {
      setActiveCategory(translations[activeCategory]);
    }
  }, [activeCategory]);

  useEffect(() => {
    Object.values(images).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);


  type Category = keyof typeof images;

  return (
    <div className="relative text-[#555555] ">
      <div
        className=" w-full h-[80vh] overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed sticky top-0"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dvgxlmyje/image/upload/v1730174034/bg-governance_dmksj5.webp)`,
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white mt-12">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4  tracking-wide"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            {t("landing.sustainability_priority")}
          </h1>

          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-1 text-md md:text-2xl font-en tracking-wide mt-4">
              Make the world better.
            </h1>
          </div>

          <Link
            to="http://www.supreme.com.tw/File/ESG/2023ESG%E6%B0%B8%E7%BA%8C%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf"
            target="_blank"
          >
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="mt-8 group hover:shadow-xl cursor-pointer  flex text-lg tracking-wide items-center pl-5 py-2 pr-2 bg-white bg-opacity-20 overflow-hidden text-white rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300"
            >
              {t("landing.sustainability_report_download")}
              <div className="ml-6 bg-white h-[40px] w-[40px] rounded-full flex items-center justify-center text-orange-400 duration-300 group-hover:ml-8 group-hover:bg-orange-400 group-hover:text-white">
                <FontAwesomeIcon
                  icon={faCloudArrowDown}
                  className="transform transition-transform duration-500"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
      </div>
      <div className="rounded-t-[2rem]  bg-[#F5F5F5] z-10 relative sticky top-12 ">
        <div className="content-container py-24">
          <p className="font-light text-4xl tracking-wide" data-aos="fade-in">
          {t("landing.sustainability_highlights")}
          </p>
          <p className="mt-2 text-orange" data-aos="fade-in">
            What We Do
          </p>
          <div className="pb-24">
            <div className="" data-aos="fade-in" data-aos-delay="400">
              <Tab
                categories={[t("landing.governance_economy"), t("landing.environment"), t("landing.social_employee"), t("landing.product_service")]}
              >
                <div data-category={t("landing.governance_economy")}>
                  <div className="flex gap-6">
                    <Swiper
                      modules={[Scrollbar]}
                      breakpoints={{
                        640: { slidesPerView: 1.2 },
                        1024: { slidesPerView: 4 },
                      }}
                      spaceBetween={20}
                      centeredSlides={false}
                      className="mb-6 cursor-grab w-[100%] relative"
                      scrollbar={{
                        hide: false,
                        draggable: true,
                      }}
                    >
                      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={1521.45} suffix=  {t("landing.unit_billion")} decimals={2} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.company_revenue")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={97.27} suffix={"%"} decimals={2} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.board_self_evaluation")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={95} suffix={"%"} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.committee_evaluation")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={95.46} suffix={"%"} decimals={2} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.director_self_evaluation")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={80} suffix={t("landing.unit_hour")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.integrity_training")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={0} suffix={t("landing.unit_case")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.ethical_violation")}
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div data-category={t("landing.environment")}>
                  <div className="flex gap-6">
                    <Swiper
                      modules={[Scrollbar]}
                      breakpoints={{
                        640: { slidesPerView: 1.2 },
                        1024: { slidesPerView: 4 },
                      }}
                      spaceBetween={20}
                      centeredSlides={false}
                      className="mb-6 cursor-grab w-[100%] relative"
                      scrollbar={{
                        hide: false,
                        draggable: true,
                      }}
                    >
                      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={474526} suffix={t("landing.unit_page")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.digital_approval")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={37.5} suffix={t("landing.unit_kg")} decimals={1} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.beach_cleanup")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={56.94} suffix={t("landing.unit_tree")} decimals={2} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.paperless_policy")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={15} suffix={t("landing.unit_box")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.water_saving_paper")}
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div data-category={t("landing.social_employee")}>
                  <div className="flex gap-6">
                    <Swiper
                      modules={[Scrollbar]}
                      breakpoints={{
                        640: { slidesPerView: 1.2 },
                        1024: { slidesPerView: 4 },
                      }}
                      spaceBetween={20}
                      centeredSlides={false}
                      className="mb-6 cursor-grab w-[100%] relative"
                      scrollbar={{
                        hide: false,
                        draggable: true,
                      }}
                    >
                      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={1.73} suffix={t("landing.times")} decimals={2} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.entry_level_salary")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={3527} suffix={t("landing.unit_hour")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.training_hours")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={0.92} suffix={""} decimals={2} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.gender_pay_ratio")}
                          </p>
                        </div>
                      </SwiperSlide>
                  
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={3636000} suffix={"NT$"} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.donation_amount")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={39} suffix={t("landing.unit_times")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.health_consultation")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={0} suffix={t("landing.unit_case")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.occupational_illness")}
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div data-category={t("landing.product_service")}>
                  <div className="flex gap-6">
                    <Swiper
                      modules={[Scrollbar]}
                      breakpoints={{
                        640: { slidesPerView: 1.2 },
                        1024: { slidesPerView: 4 },
                      }}
                      spaceBetween={20}
                      centeredSlides={false}
                      className="mb-6 cursor-grab w-[100%] relative"
                      scrollbar={{
                        hide: false,
                        draggable: true,
                      }}
                    >
                      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={100337} suffix={t("landing.unit_thousand")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.r_and_d_spending")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={0} suffix={t("landing.unit_case")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.privacy_violation")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex flex-col justify-between h-[190px] rounded-xl p-8 bg-white mb-12">
                          <div className="font-semibold text-4xl">
                            <Stat num={0} suffix={t("landing.unit_case")} decimals={0} />
                          </div>
                          <p className="text-[1rem] tracking-wide leading-7  text-gray-500">
                          {t("landing.info_security_violation")}
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </Tab>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-t-[2rem]  bg-white  z-20 relative lg:sticky block lg:top-24 -mt-[2rem] relative overflow-hidden">
        {/* <img
          src={
            "https://res.cloudinary.com/dvgxlmyje/image/upload/v1730305453/bg-sustainbility-committee_t5tpmw.webp"
          }
          className="absolute left-0 top-0 w-full z-0 h-full object-cover"
        /> */}

        {Object.keys(images).map((category) => (
          <motion.img
            key={category}
            src={images[category as Category]}
            alt={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCategory === category ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: activeCategory === category ? "block" : "none",
            }}
            className="absolute left-0 top-0 w-full z-0 h-full object-cover"
          />
        ))}

        <div className="w-full absolute h-full z-10 bg-gray-800 bg-opacity-70 rounded-[1rem]"></div>

        <div
          className="content-container pt-36 pb-64 relative z-30 text-white "
          data-aos="fade-in"
          data-aos-delay="400"
        >
          <p className="font-light text-4xl tracking-wide text-center">
           {t("landing.focus_issues")}
          </p>
          <p className="mt-2 text-orange  text-center">Focus</p>
          <Tab
            categories={[t("common.happyEnterprise"), t("common.sustainableManagement"), t("common.sustainableCoexistence"), t("common.society")]}
            onCategoryChange={setActiveCategory}
            hover={false}
          >
            <div data-category={t("common.happyEnterprise")} className="">
              <div className="flex flex-col justify-between min-h-[350px]  text-[1rem] tracking-wide leading-7 ">
                <div>
                  <p className="font-light text-4xl tracking-wide mb-8 mt-12">
                  {t("common.happyEnterprise")}
                  </p>
                  <p>
                    {t("landing.employees_as_assets")}
                       </p>
                </div>
                <div className="text-right mt-12">
                  <Link
                    className=" cursor-pointer rounded-full border-white border px-6 py-2 w-fit duration-300 hover:bg-orange hover:border-orange mt-24"
                    to="/enterprise"
                  >
                    {t("landing.learn_more")}
                  </Link>
                </div>
              </div>
            </div>
            <div data-category={t("common.sustainableManagement")} className="">
              <div className="flex flex-col justify-between min-h-[350px]  text-[1rem] tracking-wide leading-7 ">
                <div>
                  <p className="font-light text-4xl tracking-wide mb-8 mt-12">
                    {t("common.sustainableManagement")}
                  </p>
                  <p>
                    {t("landing.balanced_development")}
                       </p>
                </div>
                <div className="text-right mt-12">
                  <Link
                    className=" cursor-pointer rounded-full border-white border px-6 py-2 w-fit duration-300 hover:bg-orange hover:border-orange mt-24"
                    to="/sustainability"
                  >
                        {t("landing.learn_more")}
                  </Link>
                </div>
              </div>
            </div>
            <div data-category={t("common.sustainableCoexistence")} className="">
              <div className="flex flex-col justify-between min-h-[350px]  text-[1rem] tracking-wide leading-7 ">
                <div>
                  <p className="font-light text-4xl tracking-wide mb-8 mt-12">
                    {t("common.sustainableCoexistence")}
                  </p>
                  <p>
                    {t("landing.symbiotic_relationship")}
                       </p>
                </div>
                <div className="text-right mt-12">
                  <Link
                    className=" cursor-pointer rounded-full border-white border px-6 py-2 w-fit duration-300 hover:bg-orange hover:border-orange mt-24"
                    to="/symbiosis"
                  >
                       {t("landing.learn_more")}
                  </Link>
                </div>
              </div>
            </div>
            <div data-category={t("common.society")} className="">
              <div className="flex flex-col justify-between min-h-[350px]  text-[1rem] tracking-wide leading-7 ">
                <div>
                  <p className="font-light text-4xl tracking-wide mb-8 mt-12">
                    {t("common.society")}
                  </p>
                  <p>
                    {t("landing.social_responsibility")}
                       </p>
                </div>
                <div className="text-right mt-12">
                  <Link
                    className=" cursor-pointer rounded-full border-white border px-6 py-2 w-fit duration-300 hover:bg-orange hover:border-orange mt-24"
                    to="/society"
                  >
                         {t("landing.learn_more")}
                  </Link>
                </div>
              </div>
            </div>
          </Tab>
        </div>
      </div>
      <div className="rounded-t-[2rem]  bg-[#F5F5F5] z-30 relative -mt-[2rem] overflow-x-hidden">
        <div className="content-container py-36">
          <div
            className="flex flex-col lg:grid grid-cols-11 gap-12"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <div className="col-span-5 flex flex-col justify-between">
              <div>
                <p className="font-light text-4xl tracking-wide">{t("landing.focus_story")}</p>
                <p className="mt-2 text-orange">Story</p>

                <p className="font-semibold mt-8">
                {t("landing.steam_project")}
                </p>
                <p className="mt-2 tracking-wide leading-7 ">
                {t("landing.project_description")}     </p>
              </div>
              <Link to={"/news/1"}>
                <div className="w-fit group cursor-pointer  flex text-lg tracking-wide items-center pl-5 py-2 pr-2 border border-orange text-orange  overflow-hidden rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
                  More
                  <div className="ml-6 h-[30px] w-[30px] rounded-full flex items-center justify-center text-white bg-orange duration-300 group-hover:ml-8">
                    <FontAwesomeIcon
                      icon={faArrowUpRight}
                      className="transform transition-transform duration-500"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-6 relative ">
              <div className="h-[450px]overflow-hidden">
                <video
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  className="rounded-[2rem] object-cover w-full h-full border border-orange"
                  loop
                  muted
                  controls
                  src="https://res.cloudinary.com/dvgxlmyje/video/upload/v1730745507/%E9%95%B7%E5%AE%89%E4%BB%BF%E7%94%9F%E7%8D%B8%E5%B7%A5%E4%BD%9C%E5%9D%8A_%E8%A8%98%E8%80%85%E6%9C%83_xr7hwb.mp4"
                  title="長安仿生獸工作坊 記者會"
                ></video>
              </div>
              {/* <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F5] z-10 to-transparent pointer-events-none"></div> */}
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <NewsSwiper />
          </div>
        </div>

        <div className="pt-24">
          <p className="font-light text-4xl tracking-wide text-center">
          {t("landing.achievements_and_recognition")} 
          </p>
          <p className="mt-2 text-orange  text-center">Award</p>
          <PrizeSwiper />
        </div>

        <div className="content-container py-36">
          <p className="font-light text-4xl tracking-wide">{t("landing.report_download")}  </p>
          <p className="mt-2 text-orange ">Download</p>
          <div
            className="flex flex-col lg:grid grid-cols-2 gap-4 mt-8"
            id="download"
          >
            <a
              href={t("landing.sustainability_link_2023")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-6 py-4 group shadow rounded-xl text-lg tracking-wide duration-300 hover:bg-orange hover:text-white cursor-pointer flex justify-between items-center"
            >
              {t("landing.sustainability_report_2023")} 
              <FontAwesomeIcon
                icon={faDownload}
                className="text-xl text-orange group-hover:text-white duration-300"
              />
            </a>
            <a
              href={t("landing.sustainability_link_2022")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-6 py-4 group shadow rounded-xl text-lg tracking-wide duration-300 hover:bg-orange hover:text-white cursor-pointer flex justify-between items-center"
            >
            {t("landing.sustainability_report_2022")} 
              <FontAwesomeIcon
                icon={faDownload}
                className="text-xl text-orange group-hover:text-white duration-300"
              />
            </a>
            <a
              href={t("landing.sustainability_link_2021")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-6 py-4 group shadow rounded-xl text-lg tracking-wide duration-300 hover:bg-orange hover:text-white cursor-pointer flex justify-between items-center"
            >
             {t("landing.sustainability_report_2021")} 
              <FontAwesomeIcon
                icon={faDownload}
                className="text-xl text-orange group-hover:text-white duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import AwardImage01 from "../../assets/img/awards/img_Charity16.jpg";
import AwardImage02 from "../../assets/img/awards/img_Charity15.jpg";
import AwardImage03 from "../../assets/img/awards/img_Charity14.jpg";
import AwardImage04 from "../../assets/img/awards/img_Charity13.jpg";
import AwardImage05 from "../../assets/img/awards/img_Charity12.png";
import AwardImage06 from "../../assets/img/awards/img_Charity11.png";
import AwardImage07 from "../../assets/img/awards/img_Charity10.png";
import AwardImage08 from "../../assets/img/awards/img_Charity09.png";
import AwardImage09 from "../../assets/img/awards/img_Charity08.jpg";
import AwardImage10 from "../../assets/img/awards/img_Charity07.png";
import AwardImage11 from "../../assets/img/awards/img_Charity06.png";
import AwardImage12 from "../../assets/img/awards/img_Charity03.jpg";
import AwardImage13 from "../../assets/img/awards/img_Charity02.jpg";
import AwardImage14 from "../../assets/img/awards/img_Charity01.jpg";

interface Award {
  image: string;
  description: string;
  title?: string;
}

const awards: Award[] = [
  {
    image:
      "https://res.cloudinary.com/dvgxlmyje/image/upload/v1729130783/%E6%88%AA%E5%9C%96_2024-10-17_%E4%B8%8A%E5%8D%8810.03.32_pv3zhq.png",
    description: "2024台灣企業領袖100強",
    title: "哈佛商業評論",
  },
  { image: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1729130782/%E6%88%AA%E5%9C%96_2024-10-17_%E4%B8%8A%E5%8D%8810.03.22_hyo4bl.png", description: "培養學生國際觀與創造力讓世界看見台灣", title:"IEYI世界青少年發明展" },
  { image: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1729130781/%E6%88%AA%E5%9C%96_2024-10-17_%E4%B8%8A%E5%8D%8810.02.58_wzb0aq.png", description: "號召員工參與【愛心一日捐】共捐助新台幣100萬元" ,title:"中華民國紅十字會" },
  { image: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1729130781/%E6%88%AA%E5%9C%96_2024-10-17_%E4%B8%8A%E5%8D%8810.02.29_mxzfqb.png", description: "關懷弱勢學生並重視弱勢學生授教權，與台師大、長安國中合作，推動【特殊教育-生涯發展】", title:"長安國中" },
  { image: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1729130780/%E6%88%AA%E5%9C%96_2024-10-17_%E4%B8%8A%E5%8D%8810.02.47_batrfj.png", description: "響應隨手作公益，捐贈113年度1~2月發票，共780張", title:"中華民國兒童癌症基金會" },
  { image: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1729130781/%E6%88%AA%E5%9C%96_2024-10-17_%E4%B8%8A%E5%8D%8810.03.09_zwqlxs.png", description: "致力照顧員工、積極回饋社會、善盡企業之責，榮獲2023幸福企業銀獎" , title:"1111人力銀行" },
  { image: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1729130780/%E6%88%AA%E5%9C%96_2024-10-17_%E4%B8%8A%E5%8D%8810.02.06_jhqfxq.png", description: "致力推動零菸職場並促進職場健康榮獲健康職場認證健康啟動標章", title:"衛生福利部國民健康署" },
  { image: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1729130780/%E6%88%AA%E5%9C%96_2024-10-17_%E4%B8%8A%E5%8D%8810.01.48_zhxngf.png", description: "榮獲2023綠色企業", title:"中華民國有機生活環境教育推廣協會" },
];

const PrizeSwiper: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <>
      <Swiper
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        centeredSlides={false}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper mb-24 cursor-grab"
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index} style={{ width: "300px" }}>
            <div
              className={`w-[300px] h-[200px] rounded-xl my-8 flex items-center justify-center duration-500 py-4 shadow-xl relative ${
                hoverIndex === index ? "bg-orange" : "bg-white"
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {hoverIndex === index ? (
                <div className="absolute inset-0 flex flex-col items-center  text-white p-6">
                  {award.title && <div className="w-full font-bold mb-2 text-xl">{award.title}</div>}
                  <div className="w-full">{award.description}</div>
                </div>
              ) : (
                <img
                  src={award.image}
                  alt={`Award ${index + 1}`}
                  className="max-h-[180px] max-w-[200px] object-contain"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PrizeSwiper;


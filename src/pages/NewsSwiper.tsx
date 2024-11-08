import Img07 from "../../assets/img/story/07.jpg";
import Img08 from "../../assets/img/story/08.jpg";
import Img09 from "../../assets/img/story/09.jpg";
import Img10 from "../../assets/img/story/10.jpg";
import Img11 from "../../assets/img/story/11.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import newsData from "../data/news.json";
import newsDataEN from "../data/news-en.json"
import {
  faArrowUpRight,
  faCloudArrowDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-solid-svg-icons";
import i18n from "../i18n";
import { t } from "i18next";

interface NewsItem {
  id: number;
  title: string;
  thumbnail: string;
  summary: string;
  category: string;
  date: string; // 格式 YYYY-MM-DD
}
function NewsSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activityNews, setActivityNews] = useState([]);

  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  let swiperRef = null;

  useEffect(() => {
    const data = i18n.language === "en" ? newsDataEN : newsData;
    const category = i18n.language === "en" ? "Sustainability News" : "永續消息";
    
    const filteredNews = data.filter((item) => item.category === category);
    setNewsItems(filteredNews);
  }, [i18n.language]); 

  return (
    <div className="flex flex-col lg:grid  grid-cols-11 gap-12 mt-36">
      <div className="col-span-6 relative h-[500px]">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={false}
          className="mySwiper mb-24 cursor-grab"
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          onSlideChange={(swiper: SwiperClass) =>
            setActiveIndex(swiper.activeIndex)
          }
          modules={[Scrollbar]}
          onSwiper={(swiper: SwiperClass) => (swiperRef = swiper)}
        >
          {newsItems.map((news, index) => (
            <SwiperSlide key={news.id}>
              <div className="h-[450px] bg-gray-200 rounded-[1rem] overflow-hidden mb-12">
                <img
                  src={news.thumbnail}
                  className="h-[450px] w-full object-cover"
                  alt={news.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F1F1F1] z-10 to-transparent pointer-events-none"></div>
      </div>

      <div className="col-span-5 flex flex-col justify-between">
        <div>
          <p className="font-light text-4xl tracking-wide">{t("landing.sustainability_news")}</p>
          <p className="mt-2 text-orange">News</p>

          {newsItems[activeIndex] && (
            <>
              <motion.p
                className="font-semibold mt-8 "
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {newsItems[activeIndex].title}
              </motion.p>

              <motion.p
                className="mt-2 tracking-wide leading-7 "
                key={`sentence-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {newsItems[activeIndex].summary}
              </motion.p>
            </>
          )}
        </div>

        {newsItems[activeIndex] && (
          <motion.div
            key={`link-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-end">
              <Link to={`/news/${newsItems[activeIndex].id}`}>
                <div className="w-fit group cursor-pointer flex text-lg tracking-wide items-center pl-5 py-2 pr-2 border border-orange text-orange overflow-hidden rounded-full backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition duration-300">
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
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default NewsSwiper;

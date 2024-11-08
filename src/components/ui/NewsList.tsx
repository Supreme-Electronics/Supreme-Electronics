import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface NewsItem {
  id: number;
  title: string;
  thumbnail: string;
  summary: string;
  category: string;
  date: string;
}

interface Filter {
  category?: string;
  year?: string;
}

interface NewsListProps {
  initialFilter?: Filter;
  isYearFilter?: boolean;
  isCategoryFilter?: boolean;
  selectType?: string
}

const NewsList: React.FC<NewsListProps> = ({
  initialFilter,
  isYearFilter = true,
  isCategoryFilter = false,
  selectType = ""
}) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [filter, setFilter] = useState<Filter>(initialFilter || {});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fileName = i18n.language === "zh_TW" ? "news.json" : "news-en.json";

    import(`../../data/${fileName}`)
      .then((data) => {
        setNewsItems(data.default);
        setFilteredNews(data.default);
      })
      .catch((error) => console.error("Error loading news:", error));
  }, [i18n.language]);

  useEffect(() => {
    let filtered = newsItems;

    const category = filter.category || t("common.all");
    const year = filter.year || t("common.all");


    if(selectType != ""){
      filtered = filtered.filter((news) => news.category === selectType);
    }

    if (category !== t("common.all")) {
      filtered = filtered.filter((news) => news.category === category);
    }

    if (year !== t("common.all")) {
      filtered = filtered.filter((news) => news.date.startsWith(year));
    }

    setFilteredNews(filtered);
  }, [filter, newsItems]);

  const handleCategoryChange = (category: string) => {
    setFilter((prev) => ({ ...prev, category }));
    setCurrentPage(1);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({ ...prev, year: event.target.value }));
  };

  const handleNewsClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  const categories = [
    t("common.all"),
    ...Array.from(new Set(newsItems.map((news) => news.category))),
  ];
  const years = Array.from(
    new Set(newsItems.map((news) => news.date.split("-")[0]))
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {isCategoryFilter && (
        <div className="tabs tabs-bordered mb-8 overflow-x-auto">
          {categories.map((category, index) => (
            <a
              key={index}
              className={`tab  text-[1rem] whitespace-nowrap ${
                filter.category === category ? "tab-active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </a>
          ))}
        </div>
      )}
      {isYearFilter && (
        <label className="block text-sm font-medium text-gray-600 trackling-wide leading-8 mb-6">
          {t("common.filterByYear")}
         
          <select
            value={filter.year || t("common.all")}
            onChange={handleYearChange}
            className="mt-1 block w-full pl-3 pr-10 py-4 text-base  focus:outline-none  sm:text-sm rounded-md cursor-pointer"
          >
            <option value={t("common.all")}>{t("common.all")}</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      )}

      <AnimatePresence>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={filter.category || t("common.all") + currentPage}
        >
          {currentNews.map((news) => (
            <div
              key={news.id}
              className="group cursor-pointer"
              onClick={() => handleNewsClick(news.id)}
            >
              <div className="aspect-[5/3] rounded-md overflow-hidden ">
                <img
                  src={news.thumbnail}
                  alt={news.title}
                  className=" object-cover h-full w-full group-hover:scale-[1.08] duration-300"
                />
              </div>

              <h2 className="mt-4 text-xl font-semibold tracking-wide group-hover:text-orange duration-300">
                {news.title}
              </h2>
              <p className="mt-2 text-sm tracking-wide text-gray-400">
                {t("common.date")} | {news.date}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <div className="mt-24 flex justify-center">
          <div className="join">
            {[...Array(totalPages)].map((_, index) => (
              <button
                className="join-item btn"
                key={index}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsList;

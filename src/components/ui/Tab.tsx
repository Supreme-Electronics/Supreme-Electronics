import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import iconMap from "../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface TabProps {
  categories: string[];
  children: React.ReactNode;
  primaryColor?: string;
  icons?: string[];
  hover?: boolean;
  onCategoryChange ?:(category: string) => void;
}

const Tab: React.FC<TabProps> = ({
  categories,
  children,
  primaryColor = "#FF8D50",
  icons = [],
  hover = true,
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("category") || categories[0];
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");
    if (category && category !== selectedCategory) {
      setSelectedCategory(category);
    }
  }, [location.search, selectedCategory]);

  const handleTabClick = (category: string) => {
    setSelectedCategory(category);
    navigate(`?`, { replace: true });
    if (onCategoryChange) onCategoryChange(category);
  };

  return (
    <div className="mt-12 ">
      <div className="flex border-b-2 border-gray-300 justify-between overflow-x-auto overflow-y-hidden">
        {categories.map((category, index) => (
          <div
            key={category}
            onClick={() => handleTabClick(category)}
            className={`relative text-center w-full px-2 lg:px-6 font-semibold text-sm xl:text-lg tracking-wide py-3 cursor-pointer duration-300  ${hover&&'hover:bg-[#f0f0f0]'} hover:shadow  rounded-t-xl group  ${
              selectedCategory === category
                ? "text-[tabColor]"
                : "text-gray-300"
            }`}
            style={{
              color: selectedCategory === category ? primaryColor : "",
            }}
          >
            <div className="flex flex-col gap-5">
              {icons[index] && iconMap[icons[index]] && (
                <FontAwesomeIcon
                  icon={iconMap[icons[index]]}
                  className="text-xl sm:text-3xl lg:text-5xl"
                />
              )}
              <span className="relative z-10 ">{category}</span>
            </div>
            <span
              className={`absolute -bottom-[2px] left-0 w-full h-[4px] border-box duration-300  ${
                selectedCategory === category
                  ? "bg-[tabColor]"
                  : "bg-transparent"
              }`}
              style={{
                backgroundColor: selectedCategory === category ? primaryColor : "",
              }}
            />
          </div>
        ))}
      </div>
      <section className="pt-6">
        <AnimatePresence mode="wait">
          {React.Children.toArray(children)
            .filter(
              (child) =>
                React.isValidElement(child) &&
                child.props["data-category"] === selectedCategory
            )
            .map((filteredChild) => (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className=""
              >
                {filteredChild}
              </motion.div>
            ))}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Tab;

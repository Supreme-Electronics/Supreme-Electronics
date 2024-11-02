import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface TabProps {
  categories: string[];
  children: React.ReactNode;
  tabColor?: string;
}

const SideTab: React.FC<TabProps> = ({
  categories,
  children,
  tabColor = "#FF8D50",
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
  };

  return (
    <div className="mt-12">
      <div className="flex border-b-2 border-gray-300 justify-between">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleTabClick(category)}
            className={`relative text-center w-full px-6 font-semibold text-lg tracking-wide py-3 cursor-pointer duration-300 hover:bg-[#f0f0f0] hover:shadow  rounded-t-xl hover:text-orange group  ${
              selectedCategory === category ? "text-[tabColor]" : "text-gray-300"
            }`}
            style={{
              color: selectedCategory === category ? tabColor : "",
            }}
          >
            <span className="relative z-10 ">{category}</span>
            <span
              className={`absolute -bottom-[2px] left-0 w-full h-[4px] border-box duration-300 group-hover:bg-orange ${
                selectedCategory === category ? "bg-[tabColor]" : "bg-transparent"
              }`}
              style={{
                backgroundColor:
                selectedCategory === category ? tabColor : "",
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
              >
                {filteredChild}
              </motion.div>
            ))}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default SideTab;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faTrees, faTreeDeciduous } from "@fortawesome/pro-light-svg-icons";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';

interface TreeData {
  year: number;
  trees: number;
}

interface TreeProps {
  data: TreeData[];
}

const TreeItem: React.FC<{ item: TreeData; maxTrees: number; treeIcons: any[] }> = ({ item, maxTrees, treeIcons }) => {
  const percentage = (item.trees / maxTrees) * 100;
  const [treeCount, setTreeCount] = useState(Math.ceil(percentage / 4));


  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const { t } = useTranslation();

  useEffect(() => {
    const updateTreeCount = () => {
      if (window.innerWidth >= 1024) { // 大螢幕，例如桌面裝置
        setTreeCount(Math.ceil(percentage / 4));
      } else if (window.innerWidth >= 768) { // 中等螢幕，例如平板
        setTreeCount(Math.ceil(percentage / 6));
      } else { // 小螢幕，例如手機
        setTreeCount(Math.ceil(percentage / 12));
      }
    };

    // 初始化設定
    updateTreeCount();

    // 當螢幕大小變化時，更新 treeCount
    window.addEventListener("resize", updateTreeCount);
    return () => window.removeEventListener("resize", updateTreeCount);
  }, [percentage]);

  return (
    <div ref={ref} className="flex items-end space-x-4 w-[80%] mt-12">
      {/* 年分 */}
      <span className="font-bold pr-4 ">{item.year}</span>

      {/* 樹木比例條 */}
      <div className="relative flex-1 h-[2px] max-w-[60%] lg:max-w-[80%]">
        <motion.div
          className="bg-orange-300 h-full rounded-full relative"
          initial={{ width: "1px" }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }} // 延長動畫時間
        >
          {/* 最後的樹木數量顯示，增加淡入延遲 */}
          <motion.span
            className="absolute right-0 top-0 translate-x-[100%] -translate-y-[80%] px-8 flex items-end text-lg opacity-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }} // 延遲數字出現
          >
            {item.trees}
            <span className="text-xs ml-2 tracking-wide text-orange">{t("common.trees")}</span>
          </motion.span>
        </motion.div>

        {/* 樹木圖標，使用 staggered delay */}
        <motion.div
          className="absolute top-0 left-0 -translate-y-[100%] flex flex-wrap justify-between"
          style={{ width: `${percentage}%` }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05, // 增加每個樹木圖標的延遲
                delayChildren: 0.5, // 圖標動畫的整體延遲
              },
            },
          }}
        >
          {Array.from({ length: treeCount }).map((_, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FontAwesomeIcon
                icon={treeIcons[index % treeIcons.length]}
                className="text-green-700 h-[16px]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Tree: React.FC<TreeProps> = ({ data }) => {
  const maxTrees = Math.max(...data.map((item) => item.trees));
  const treeIcons = [faTree, faTrees, faTreeDeciduous];

  return (
    <div className="space-y-12">
      {data.map((item) => (
        <TreeItem key={item.year} item={item} maxTrees={maxTrees} treeIcons={treeIcons} />
      ))}
    </div>
  );
};

export default Tree;

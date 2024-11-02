import React, { useState } from "react";
import { motion } from "framer-motion";

interface Layer {
  url: string;
  label: string;
  color: string;
}

interface KeyTopicsMatrixProps {
  layers: Layer[];
}


interface Point {
    text: string;
    color: string;
    number: string;
}




const KeyTopicsMatrix: React.FC<KeyTopicsMatrixProps> = ({ layers }) => {
  const [layerIndex, setLayerIndex] = useState<number | "all">("all"); // 'all' shows all layers

  const handleLayerChange = (index: number | "all") => {
    setLayerIndex(index);
  };

  return (
    <div className=" text-[1rem] tracking-wide leading-7 text-justify text-gray-600 flex items-center flex-col">
      <div className="flex flex-col sm:flex-row  justify-center sm:items-center sm:space-x-4 mb-4 lg:w-[80%] w-full mt-12">

        <div className="flex items-center gap-2 hover:bg-gray-200 px-6 py-2 rounded-xl cursor-pointer duration-300"  onClick={() => handleLayerChange("all")}>
          <div className="w-[10px] h-[10px] rounded-full bg-blue"></div>
          <div>全部</div>
        </div>

        {layers.map((layer, index) => (
          <div className="flex items-center gap-2  hover:bg-gray-200 px-6 py-2 rounded-xl cursor-pointer duration-300"  key={index} onClick={() => handleLayerChange(index)}>
            <div
              className="w-[10px] h-[10px] rounded-full"
              style={{ backgroundColor: layer.color }}
            ></div>
            <div>
              {layer.label}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-6 w-full lg:w-[80%]">
        <img
          src="https://res.cloudinary.com/dvgxlmyje/image/upload/v1730375550/key-topic-matrix-bg_bxq18p.svg"
          className=" h-full"
        />

        {layers.map(
          (layer, index) =>
            (layerIndex === "all" || layerIndex === index) && (
              <motion.img
                key={index}
                src={layer.url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=" h-full absolute left-0 top-0 z-10"
              />
            )
        )}
      </div>

    </div>
  );
};

export default KeyTopicsMatrix;

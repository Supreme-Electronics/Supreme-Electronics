import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface StatProps {
  num: number;
  suffix: string;
  decimals?: number;
  color?: string;
}

const formatNumberWithCommas = (value: number, decimals: number) => {
  const fixedValue = value.toFixed(decimals);
  const [integerPart, decimalPart] = fixedValue.split('.');
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

export const Stat: React.FC<StatProps> = ({
  num,
  suffix,
  decimals = 0,
  color = '#FF8D50',  
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    animate(0, num, {
      duration: 1.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = formatNumberWithCommas(value, decimals);
      },
    });
  }, [num, decimals, isInView, hasAnimated]);

  return (
    <>
      <span ref={ref} className="mr-1" style={{ color }}></span>
      <span style={{ color }} className="text-sm ml-2">{suffix}</span>
    </>
  );
};


interface StatDisplayProps {
  stats: Array<{
    text: string;
    num: number;
    suffix: string;
    describtion?: string;
  }>;
  primaryColor?: string;
}

const StatDisplay: React.FC<StatDisplayProps> = ({ stats, primaryColor = '#FF8D50' }) => {
  return (
    <div className="bg-gray-50 rounded-[30px] flex flex-col xl:flex-row justify-between px-12 py-8 items-center">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="xl:flex justify-center w-full border-b-[1px] py-4 xl:border-none xl:py-0 xl:w-fit max-w-[200px]">
            <div className="text-left text-[16px] text-[#5b5b5b] w-full">
              <p
                className="text-[32px] font-semibold"
                style={{ color: primaryColor }}
              >
                {stat.describtion ? (
                  stat.describtion
                ) : (
                  <Stat
                    key={`stat-${stat.num}-${stat.suffix}-${index}`} 
                    num={stat.num}
                    suffix={stat.suffix}
                    decimals={stat.num % 1 !== 0 ? 1 : 0}
                    color={primaryColor}
                  />
                )}
              </p>
              <p className="text-sm">{stat.text}</p>
            </div>
          </div>
          {index < stats.length - 1 && (
            <div className="bg-[#d9d9d9] w-[1px] h-[80px] hidden xl:block"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatDisplay;


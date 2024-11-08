import iconMap from "../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface CardProps {
  title: string;
  text?: string;
  list?: string[];
}

interface CardListProps {
  cards: CardProps[];
  icons?: string[];
  className?: string;
  primaryColor?: string;
}

const CardList: React.FC<CardListProps> = ({
  cards,
  className = "",
  icons = [],
  primaryColor = "#FF8D50",
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const renderCards = () => {
    switch (cards.length) {
      case 2:
        return (
          <div className="flex flex-col lg:grid mt-8 grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                icon={icons[index]}
                index={index}
                isInView={isInView}
                primaryColor={primaryColor}
              />
            ))}
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col lg:grid mt-8  grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                icon={icons[index]}
                index={index}
                isInView={isInView}
                primaryColor={primaryColor}
              />
            ))}
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col lg:grid mt-8  grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                icon={icons[index]}
                index={index}
                isInView={isInView}
                primaryColor={primaryColor}
              />
            ))}
          </div>
        );
      case 5:
        return (
          <>
            <div className="flex flex-col lg:grid mt-8  grid-cols-2 gap-6 mb-6">
              {cards.slice(0, 2).map((card, index) => (
                <Card
                  key={index}
                  card={card}
                  icon={icons[index]}
                  index={index}
                  isInView={isInView}
                  primaryColor={primaryColor}
                />
              ))}
            </div>
            <div className="flex flex-col lg:grid mt-8  grid-cols-3 gap-6">
              {cards.slice(2).map((card, index) => (
                <Card
                  key={index + 2}
                  card={card}
                  icon={icons[index + 2]}
                  index={index + 2}
                  isInView={isInView}
                  primaryColor={primaryColor}
                />
              ))}
            </div>
          </>
        );
      case 7:
        return (
          <>
            <div className="flex flex-col lg:grid mt-8  grid-cols-3 gap-6 mb-6">
              {cards.slice(0, 3).map((card, index) => (
                <Card
                  key={index}
                  card={card}
                  icon={icons[index]}
                  index={index}
                  isInView={isInView}
                  primaryColor={primaryColor}
                />
              ))}
            </div>
            <div className="flex flex-col lg:grid mt-8  grid-cols-4 gap-6">
              {cards.slice(3).map((card, index) => (
                <Card
                  key={index + 3}
                  card={card}
                  icon={icons[index + 3]}
                  index={index + 3}
                  isInView={isInView}
                  primaryColor={primaryColor}
                />
              ))}
            </div>
          </>
        );
      default:
        return (
          <div
            className={`flex flex-col lg:grid mt-8  grid-cols-${Math.min(
              cards.length,
              3
            )} gap-6`}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                icon={icons[index]}
                index={index}
                isInView={isInView}
                primaryColor={primaryColor}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div
      className={`flex flex-col lg:grid mt-8  flex-col ${className}`}
      ref={containerRef}
    >
      {renderCards()}
    </div>
  );
};

interface SingleCardProps {
  card: CardProps;
  icon?: string;
  index: number;
  isInView: boolean;
  primaryColor?: string;
}

const Card: React.FC<SingleCardProps> = ({ card, icon, index, isInView, primaryColor = "#FF8D50", }) => (
  <motion.div
    className="bg-white shadow-md rounded-[1.5rem] p-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold  flex justify-between items-center">
      {card.title}
      {icon && iconMap[icon] && (
        <FontAwesomeIcon
          icon={iconMap[icon]}
          className="lg:text-4xl"
          style={{color: primaryColor}}
        />
      )}
    </h3>
    <div className="w-full h-[1px] my-4 bg-gray-300"></div>
    {card.text && (
      <p className="text-[1rem] tracking-wide leading-7 ">
        {card.text}
      </p>
    )}
    {card.list && (
      <ul className="list-disc ml-6 space-y-4 text-[1rem] tracking-wide leading-7 ">
        {card.list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
  </motion.div>
);

export default CardList;

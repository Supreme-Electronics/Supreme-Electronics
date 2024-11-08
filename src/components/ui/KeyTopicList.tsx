import React from "react";

interface Topic {
  number: number;
  description: string;
  category: "primary" | "secondary" | "monitor";
}

interface KeyTopicsProps {
  topics: Topic[];
}

const KeyTopicsList: React.FC<KeyTopicsProps> = ({ topics }) => {
  const groupedTopics = {
    primary: topics.filter((topic) => topic.category === "primary"),
    secondary: topics.filter((topic) => topic.category === "secondary"),
    monitor: topics.filter((topic) => topic.category === "monitor"),
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "primary":
        return "6項 主要的負面衝擊主題";
      case "secondary":
        return "11項 次要的負面衝擊主題";
      case "monitor":
        return "6項 持續追蹤的負面衝擊主題";
      default:
        return "";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "primary":
        return "bg-[#ff5050]";
      case "secondary":
        return "bg-[#ff8d50]";
      case "monitor":
        return "bg-[#ffbe50]";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="space-y-6 w-full lg:w-[80%] bg-gray-50 rounded-xl p-8">
        {Object.keys(groupedTopics).map((category) => (
          <div key={category}>
            <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {groupedTopics[category as keyof typeof groupedTopics].map(
                (topic) => (
                  <li
                    key={topic.number}
                    className="flex items-center space-x-2"
                  >
                    <span
                      className={`text-white rounded-full h-[30px] w-[30px] flex items-center justify-center ${getCategoryColor(
                        topic.category
                      )}`}
                    >
                      {topic.number}
                    </span>
                    <span className="text-[1rem] tracking-wide leading-7 ">{topic.description}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyTopicsList;

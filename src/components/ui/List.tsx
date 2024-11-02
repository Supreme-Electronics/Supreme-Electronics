import React from "react";

interface ListItem {
  label: string;
  value?: string | number;
  title?: string;
}

interface ListProps {
  items: ListItem[];
  className?: string;
  type?: "basic" | "detailed" | "title";
}

const List: React.FC<ListProps> = ({
  items,
  className = "",
  type = "detailed",
}) => {
  if (type === "basic") {
    return (
      <ul className={`pl-5 ${className}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className="text-gray-600 text-[1rem] tracking-wide leading-7 mb-4"
          >
            {item.label}
          </li>
        ))}
      </ul>
    );
  }

  if (type === "title") {
    return (
      <div className={`mt-12 border-t-[4px] border-t-gray-200 ${className}`}>
      <table className="w-full border-collapse">
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b-[1px] text-[1rem] tracking-wide leading-7 text-gray-600">
              <td className="text-orange sm:text-xl py-6 items-center font-light pr-8 whitespace-nowrap align-top"> 
                {item.title}
              </td>
              <td className="text-justify align-to py-6 items-center">
                {item.label}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    );
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between border-b-[1px] py-6 items-center"
        >
          <span
            className={`text-[1rem] tracking-wide leading-7 text-justify text-gray-600 ${
              item.value !== undefined ? "max-w-[70%]" : "max-w-full"
            }`}
          >
            {item.label}
          </span>
          {item.value !== undefined && (
            <span className="font-bold text-orange text-xl">{item.value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;

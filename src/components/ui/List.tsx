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
  primaryColor?: string;
}

const List: React.FC<ListProps> = ({
  items,
  className = "",
  type = "detailed",
  primaryColor='#FF8D50'
}) => {
  if (type === "basic") {
    return (
      <ul className={`list-disc ml-6 space-y-4 text-[1rem] tracking-wide leading-7  ${className}`}>
        {items.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    );
  }

  if (type === "title") {
    return (
      <div className={`mt-12 border-t-[4px] border-t-gray-200 overflow-x-auto ${className}`}>
        <table className="w-full border-collapse">
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b-[1px] text-[1rem] tracking-wide leading-7"
              >
                <td className="sm:text-xl py-6 items-center font-light pr-8 w-[150px] lg:w-[250px] align-top" style={{color: primaryColor}}>
                  {item.title}
                </td>
                <td className=" align-to py-6 items-center whitespace-pre-wrap">
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
            className={`text-[1rem] tracking-wide leading-7  ${
              item.value !== undefined ? "max-w-[70%]" : "max-w-full"
            }`}
          >
            {item.label}
          </span>
          {item.value !== undefined && (
            <span className="font-bold text-xl" style={{color: primaryColor}}>{item.value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;

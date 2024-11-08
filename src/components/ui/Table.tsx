import React from "react";
import { useTranslation } from "react-i18next";

interface TextContent {
  type: "text";
  value: string;
}

interface NumberContent {
  type: "number";
  value: number;
}

interface ListContent {
  type: "list";
  items: string[];
}

interface DotContent {
  type: "dot";
  value: boolean;
}

type CellContent =
  | TextContent
  | NumberContent
  | ListContent
  | DotContent
  | string
  | number;

interface Cell {
  content: CellContent;
  rowSpan?: number;
  colSpan?: number;
  noWrap?: boolean;
}

interface TableProps {
  headers: (Cell | string)[];
  rows: Cell[][];
  primaryColor?: string;
  unit?: string;
  notes?: string[];
}

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  primaryColor = "#FF8D50",
  unit = "",
  notes = [],
}) => {
  const renderContent = (content: CellContent) => {
    if (typeof content === "string" || typeof content === "number") {
      return <span>{content}</span>;
    }

    switch (content.type) {
      case "text":
        return <span>{content.value}</span>;
      case "number":
        return <span>{content.value}</span>;
      case "list":
        return (
          <ul className="list-disc pl-5 space-y-2">
            {content.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      case "dot":
        return (
          <span className="text-4xl" style={{ color: primaryColor }}>
            {content.value ? "•" : ""}
          </span>
        );
      default:
        return null;
    }
  };

  
  const { t } = useTranslation();

  return (
    <div className="relative mt-4 overflow-x-auto">
      <p className="text-sm  text-gray-500 text-right">{unit}</p>
      <table className="min-w-full mt-2">
        <thead>
          <tr>
            {headers.map((header, index) => {
              if (typeof header === "string") {
                // Render simple headers
                return (
                  <th
                    key={index}
                    className="px-4 py-2 text-white font-medium whitespace-nowrap"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {header}
                  </th>
                );
              } else {
                // Render headers with rowSpan or colSpan
                return (
                  <th
                    key={index}
                    rowSpan={header.rowSpan || 1}
                    colSpan={header.colSpan || 1}
                    className="px-4 py-2 text-white font-medium"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {renderContent(header.content)}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-300">
              {row.map((cell, cellIndex) => {
                const isDotContent =
                  typeof cell.content === "object" &&
                  cell.content.type === "dot";

                return (
                  <td
                    key={cellIndex}
                    rowSpan={cell.rowSpan || 1}
                    colSpan={cell.colSpan || 1}
                    className={`px-4 py-5 text-[1rem] tracking-wide leading-7  ${
                      cell.noWrap ? "whitespace-nowrap" : "whitespace-pre-wrap"
                    } ${isDotContent ? "text-center" : ""}`}
                  >
                    {renderContent(cell.content)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        {notes &&
          notes.map((note, index) => {
            return <p className="text-sm text-gray-400  tracking-wide mb-2">{t("common.note")}{index+1} : {note}</p>;
          })}
      </div>
    </div>
  );
};

export default Table;

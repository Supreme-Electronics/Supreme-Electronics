import React from 'react';

interface TextContent {
  type: 'text';
  value: string;
}

interface NumberContent {
  type: 'number';
  value: number;
}

interface ListContent {
  type: 'list';
  items: string[];
}

interface DotContent {
  type: 'dot';
  value: boolean;
}

type CellContent = TextContent | NumberContent | ListContent | DotContent | string | number;

interface Cell {
  content: CellContent;
  rowSpan?: number;
  colSpan?: number;
  noWrap?: boolean;
}

interface TableProps {
  headers: (Cell | string)[]; // Allow headers to be either Cell or string
  rows: Cell[][];
}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  const renderContent = (content: CellContent) => {
    if (typeof content === 'string' || typeof content === 'number') {
      return <span>{content}</span>;
    }

    switch (content.type) {
      case 'text':
        return <span>{content.value}</span>;
      case 'number':
        return <span>{content.value}</span>;
      case 'list':
        return (
          <ul className="list-disc pl-5 space-y-2">
            {content.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      case 'dot':
        return (
          <span className={content.value ? 'text-orange text-4xl' : 'text-red-500'}>
            {content.value ? '•' : ''}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <table className="min-w-full mt-10">
      <thead>
        <tr>
          {headers.map((header, index) => {
            if (typeof header === 'string') {
              // Render simple headers
              return (
                <th key={index} className="px-4 py-2 bg-orange text-white font-medium">
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
                  className="px-4 py-2 bg-orange text-white font-medium"
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
              const isDotContent = typeof cell.content === 'object' && cell.content.type === 'dot';

              return (
                <td
                  key={cellIndex}
                  rowSpan={cell.rowSpan || 1}
                  colSpan={cell.colSpan || 1}
                  className={`px-4 py-5 text-[1rem] tracking-wide leading-7 text-gray-600 ${
                    cell.noWrap ? 'whitespace-nowrap' : 'whitespace-pre-wrap'
                  } ${isDotContent ? 'text-center' : 'text-justify'}`}
                >
                  {renderContent(cell.content)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

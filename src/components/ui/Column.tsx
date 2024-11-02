import React from 'react';

interface ColumnProps {
  columns: number;
  children: React.ReactNode;
  position?: 'start' | 'center' | 'end';
}

const Column: React.FC<ColumnProps> = ({ columns, children, position = 'start' }) => {
  const alignmentClass = position === 'center' ? 'items-center' : position === 'end' ? 'items-end' : 'items-start';
  console.log(position)

  return (
    <div
      className={`flex-col flex gap-y-12 xl:grid gap-6 xl:gap-12 ${alignmentClass}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {children}
    </div>
  );
};

export default Column;

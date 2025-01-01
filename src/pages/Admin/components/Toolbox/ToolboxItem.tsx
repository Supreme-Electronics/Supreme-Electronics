// src/components/Toolbox/ToolboxItem.tsx
import React from 'react';
import { useDrag } from 'react-dnd';
import { ComponentType } from '../../types';

interface ToolboxItemProps {
  type: ComponentType;
  label: string;
}

const ToolboxItem: React.FC<ToolboxItemProps> = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BOX',
    item: { type },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 mb-2 bg-white border rounded shadow cursor-pointer ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {label}
    </div>
  );
};

export default ToolboxItem;

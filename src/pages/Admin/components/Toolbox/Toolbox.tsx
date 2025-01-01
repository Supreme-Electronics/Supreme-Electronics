// src/components/Toolbox/Toolbox.tsx
import React from 'react';
import ToolboxItem from './ToolboxItem';
import { ComponentType } from '../../types';

const toolboxItems: { type: ComponentType; label: string }[] = [
  { type: 'text', label: '文字' },
  { type: 'header', label: '標題' },
  // 可以逐步添加更多項目
];

const Toolbox: React.FC = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">工具箱</h2>
      {toolboxItems.map(item => (
        <ToolboxItem key={item.type} type={item.type} label={item.label} />
      ))}
    </div>
  );
};

export default Toolbox;

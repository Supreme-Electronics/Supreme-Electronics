// src/components/Preview/Preview.tsx
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ComponentItem, ComponentType } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import PreviewItem from './PreviewItem';

const Preview: React.FC = () => {
  const [components, setComponents] = useState<ComponentItem[]>([]);

  const [, drop] = useDrop(() => ({
    accept: 'BOX',
    drop: (item: { type: ComponentType }) => {
      const newComponent: ComponentItem = {
        id: uuidv4(),
        type: item.type,
        props: {
          text: item.type === 'header' ? '標題' : '文字內容',
        },
      };
      setComponents(prev => [...prev, newComponent]);
    },
  }));

  const moveComponent = (dragIndex: number, hoverIndex: number) => {
    const updatedComponents = [...components];
    const [removed] = updatedComponents.splice(dragIndex, 1);
    updatedComponents.splice(hoverIndex, 0, removed);
    setComponents(updatedComponents);
  };

  const updateComponent = (id: string, newProps: Partial<ComponentItem['props']>) => {
    setComponents(prev =>
      prev.map(comp => (comp.id === id ? { ...comp, props: { ...comp.props, ...newProps } } : comp))
    );
  };

  return (
    <div ref={drop} className="w-3/4 p-4 bg-white overflow-auto">
      <h2 className="text-xl font-bold mb-4">頁面預覽</h2>
      {components.map((component, index) => (
        <PreviewItem
          key={component.id}
          index={index}
          id={component.id}
          type={component.type}
          props={component.props}
          moveComponent={moveComponent}
          updateComponent={updateComponent}
        />
      ))}
    </div>
  );
};

export default Preview;

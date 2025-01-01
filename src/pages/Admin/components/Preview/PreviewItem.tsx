// src/components/Preview/PreviewItem.tsx
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ComponentType, ComponentItem } from '../../types';
import TextEditor from '../Eidtor/Editor';

interface PreviewItemProps extends ComponentItem {
  index: number;
  moveComponent: (dragIndex: number, hoverIndex: number) => void;
  updateComponent: (id: string, newProps: Partial<ComponentItem['props']>) => void;
}

const PreviewItem: React.FC<PreviewItemProps> = ({ id, type, props, index, moveComponent, updateComponent }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'PREVIEW_ITEM',
    hover(item: { index: number }, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      // Get bounding rectangle
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the item's height
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveComponent(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'PREVIEW_ITEM',
    item: { id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0 : 1;

  const renderComponent = () => {
    switch (type) {
      case 'text':
        return (
          <TextEditor
            text={props.text}
            onChange={newText => updateComponent(id, { text: newText })}
          />
        );
      case 'header':
        return (
          <TextEditor
            text={props.text}
            onChange={newText => updateComponent(id, { text: newText })}
            isHeader
          />
        );
      default:
        return null;
    }
  };

  return (
    <div ref={ref} style={{ opacity }} className="p-2 mb-2 border rounded shadow bg-gray-50 cursor-move">
      {renderComponent()}
    </div>
  );
};

export default PreviewItem;

import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Toolbox from './components/Toolbox/Toolbox';
import Preview from './components/Preview/Preview';

const AdminPage: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen">
        <Toolbox />
        <Preview />
      </div>
    </DndProvider>
  );
};

export default AdminPage;
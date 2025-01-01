// src/components/Editor/TextEditor.tsx
import React, { useState } from 'react';

interface TextEditorProps {
  text: string;
  onChange: (newText: string) => void;
  isHeader?: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({ text, onChange, isHeader = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  const handleBlur = () => {
    setIsEditing(false);
    onChange(currentText);
  };

  return (
    <div onClick={() => setIsEditing(true)} className="w-full">
      {isEditing ? (
        <input
          type="text"
          value={currentText}
          onChange={e => setCurrentText(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          className="w-full border-b-2 border-blue-500 focus:outline-none"
        />
      ) : isHeader ? (
        <h2 className="text-2xl font-semibold">{currentText}</h2>
      ) : (
        <p>{currentText}</p>
      )}
    </div>
  );
};

export default TextEditor;

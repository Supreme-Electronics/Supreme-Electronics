import React from 'react';

interface PProps {
  paragraphs: string[];
  className?: string;
}

const P: React.FC<PProps> = ({ paragraphs, className }) => {
  return (
    <div className={className}>
      {paragraphs.map((text, index) => (
        <p key={index} className="mb-4 text-[1rem] tracking-wide leading-7 text-justify text-gray-600">
          {text}
        </p>
      ))}
    </div>
  );
};

export default P;
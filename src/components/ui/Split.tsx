import React from "react";

interface SplitProps {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
}

const Split: React.FC<SplitProps> = ({ leftChildren, rightChildren }) => (
  <div className="grid md:grid-cols-2 md:gap-24 bg-gray-50 rounded-xl pt-4 pb-12 px-8">
    <div className="">
      {leftChildren}
    </div>
    <div className="">
      {rightChildren}
    </div>
  </div>
);

export default Split;

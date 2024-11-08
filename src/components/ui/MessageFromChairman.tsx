import React from "react";

interface MessageFromChairmanProps {
  title: string;
  paragraphs: string[];
  jobTitle: string;
  name: string;
  photo: string;
  className?: string;
}

const MessageFromChairman: React.FC<MessageFromChairmanProps> = ({
  paragraphs,
  className,
  title,
  jobTitle,
  name,
  photo,
}) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-5 gap-12 relative">
        <div className="col-span-5 md:col-span-3">
          <p className="font-light text-4xl tracking-wide mb-10 ">{title}</p>
          {paragraphs.map((text, index) => (
            <p
              key={index}
              className="mb-4 text-[1rem] tracking-wide leading-7 "
            >
              {text}
            </p>
          ))}

          <p className="mt-24 font-light tracking-wide text-[18px] ">
            {jobTitle}
            <span className="ml-6 text-3xl font-light tracking-wdiest">
              {name}
            </span>
          </p>
        </div>
        <div className="col-span-2 h-full items-end md:flex hidden">
          <img src={photo} className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default MessageFromChairman;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownToLine } from "@fortawesome/pro-light-svg-icons";

interface DownloadButtonProps {
  href: string;
  text: string;
  className?: string;
  color?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  text,
  className,
}) => {
  return (
    <a
      href={href}
      download
      className={`w-full rounded mt-2 font-light flex gap-2 block items-center justify-center text-center bg-white py-2 shadow tracking-wide hover:text-blue duration-300 ${className || ""}`}
      role="button"
    >
      <FontAwesomeIcon
        icon={faArrowDownToLine}
        className="text-xl group-hover:ml-4"
      />
      {text}
    </a>
  );
};

export default DownloadButton;

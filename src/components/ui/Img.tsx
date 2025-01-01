import { faCaretUp } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  desc?: string;
  className?: string;
}

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width = "",
  desc,
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="flex justify-center">
      {!isLoaded && (
        <div
          className={`mt-4 object-cover h-[700px] w-full bg-gray-300 animate-pulse flex items-center justify-center ${className}`}
        >
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        className={`mt-4 object-cover transition-opacity duration-500 ease-in-out w-full ${
          className ? className : "w-full"
        } ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={handleImageLoad}
      />

      {desc && (
        <p className="my-2 text-gray-400 tracking-wide flex items-center gap-2 ">
          <FontAwesomeIcon icon={faCaretUp} />
          {desc}
        </p>
      )}
    </div>
  );
};

export default Img;

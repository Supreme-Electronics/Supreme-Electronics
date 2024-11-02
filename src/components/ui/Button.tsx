import { faPaperPlane } from "@fortawesome/pro-light-svg-icons";
import { faDownload, faFilePdf } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface DownloadProps {
  text: string;
  href?: string;
  className?: string;
  type?: "basic" | "date";
  date?: string;
}

const Button: React.FC<DownloadProps> = ({
  text,
  href = "",
  className = "",
  type = "basic",
  date = "",
}) => {
  if (type === "basic") {
    return (
      <a
        className="bg-orange text-white px-6 py-2 font-en rounded-full flex items-center group cursor-pointer hover-shadow w-fit"
        href={href}
        target="_blank"
      >
        {text}
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="text-xl ml-2 group-hover:ml-4 duration-300"
        />
      </a>
    );
  } else if (type === "date") {
    return (
      <div className="flex items-center gap-6 mb-2">
        <div className="text-orange py-4 px-6 rounded-xl border border-orange xl:min-w-[140px] text-center hidden xl:block">
          {date}
        </div>
        <Link to={href} target="_blank" className="flex-grow">
          <div
            className={`tracking-wide text-center duration-300 px-6 py-4 shadow w-full group hover:text-orange rounded-xl   ${className}`}
          >
            {text}
            <FontAwesomeIcon
              icon={faDownload}
              className="text-2xl ml-6 group-hover:ml-8 group-hover:text-orange text-gray-300 duration-300"
            />
          </div>
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default Button;

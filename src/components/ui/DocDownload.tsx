import { faDownload, faFilePdf } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface DownloadProps {
  text: string;
  href: string;
  className?: string;
  type?: "basic" | "date";
  date?: string;
}

const DocDownload: React.FC<DownloadProps> = ({
  text,
  href,
  className = "",
  type = "basic",
  date = "",
}) => {
  if (type === "basic") {
    return (
      <Link to={href} target="_blank">
        <div
          className={`tracking-wide text-center duration-300 px-6 py-4 shadow w-full group hover:text-orange rounded-xl bg-white mb-4 ${className}`}
        >
          {text}
          <FontAwesomeIcon
            icon={faFilePdf}
            className="text-2xl ml-6 group-hover:ml-8 group-hover:text-orange text-gray-300 duration-300"
          />
        </div>
      </Link>
    );
  } else if (type === "date") {
    return (
      <div className="flex items-center gap-6 mb-2">
      <div className="text-orange py-4 px-6 rounded-xl border border-orange xl:min-w-[140px] text-center hidden xl:block">{date}</div>
        <Link to={href} target="_blank" className="flex-grow">
          <div
            className={`tracking-wide text-center duration-300 px-6 py-4 shadow w-full group hover:text-orange rounded-xl bg-white   ${className}`}
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
    return null; // Fallback for unsupported type values
  }
};

export default DocDownload;

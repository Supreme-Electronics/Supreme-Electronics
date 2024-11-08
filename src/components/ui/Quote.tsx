import { faQuoteLeft, faQuoteRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TextProps {
  text: string;
  className?: string;
}

const Quote: React.FC<TextProps> = ({ text, className = "" }) => {
  return (
    <div className="relative xl:px-36 xl:py-6 px-12 my-24">
      <p
        className={`font-light text-2xl tracking-wide text-center  ${className}`}
      >
        {text}
      </p>
      <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-orange absolute left-0 top-0" />
      <FontAwesomeIcon icon={faQuoteRight} className="text-3xl text-orange absolute right-0 bottom-0" />
    </div>
  );
};

export default Quote;

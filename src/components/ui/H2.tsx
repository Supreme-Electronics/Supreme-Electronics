interface TextProps {
  text: string;
  subItems?: TextProps[];
  className?: string;
  type?: "basic" | "underline";
}

const H2: React.FC<TextProps> = ({ text, className = "", type = "basic" }) => {
  if (type === "underline") {
    return (
      <p
        className={` text-lg tracking-wide mb-4 mt-12 border-b-[1px] border-orange pb-2 text-orange   ${className}`}
      >
        {text}
      </p>
    );
  }
  return (
    <p
      className={` text-lg tracking-wide mb-3 mt-12  text-gray-600 border-l-[2px] pl-4 border-orange   ${className}`}
    >
      {text}
    </p>
  );
};

export default H2;

interface TextProps {
  text: string;
  subItems?: TextProps[];
  className?: string;
  type?: "basic" | "underline";
  primaryColor?: string;
}

const H2: React.FC<TextProps> = ({
  text,
  className = "",
  type = "basic",
  primaryColor = "#FF8D50",
}) => {
  if (type === "underline") {
    return (
      <p
        className={` text-lg tracking-wide mb-4 mt-12 border-b-[1px] pb-2 text-orange   ${className}`}
        style={{ color: primaryColor }}
      >
        {text}
      </p>
    );
  }
  return (
    <p
      className={` text-lg tracking-wide mb-3 mt-12  border-l-[2px] pl-4    ${className}`}
      style={{ borderColor: primaryColor }}
    >
      {text}
    </p>
  );
};

export default H2;

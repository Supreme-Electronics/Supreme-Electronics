interface TextProps {
    text: string
    subItems?: TextProps[]
    className?: string
  }
  
  const H3: React.FC<TextProps> = ({ text, className = "text-[#555555]" }) => {
    return (
      <p className={`font-bold text-5xl tracking-wide mb-8 ${className}`}>
        {text}
      </p>
    )
  }
  
  export default H3
  
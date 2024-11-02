interface TextProps {
    text: string
    className?: string
  }
  
  const Note: React.FC<TextProps> = ({ text, className = "" }) => {
    return (
      <p className={`font-light  text-gray-500 tracking-wide my-5 ${className}`}>
        {text}
      </p>
    )
  }
  
  export default Note
  
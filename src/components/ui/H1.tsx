interface TextProps {
  text: string
  subItems?: TextProps[]
  className?: string
}

const H1: React.FC<TextProps> = ({ text, className = "text-[#555555]" }) => {
  return (
    <p className={`font-light text-4xl tracking-wide mb-10 text-center ${className}`}>
      {text}
    </p>
  )
}

export default H1

interface TextProps {
  text: string
  subItems?: TextProps[]
  className?: string
}

const H1: React.FC<TextProps> = ({ text, className = "" }) => {
  return (
    <p className={`font-light lg:text-4xl text-3xl tracking-wide mb-10 text-center ${className}`}>
      {text}
    </p>
  )
}

export default H1

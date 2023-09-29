interface ButtonProps {
  color?: string
  width?: number
  height?: number
  className?: string
  text?: string
  bg?: string
  border?: string
  m?: string
  onClick?: () => void
  borderRadius?: number
}

export const Button = ({
  bg = '#6E9C9F',
  color = '#fff',
  width = 100,
  height = 100,
  className,
  text,
  border,
  m,
  borderRadius,
  onClick,
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        width,
        height,
        color,
        transition: '.3s',
        border,
        margin: m,
        borderRadius,
      }}
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

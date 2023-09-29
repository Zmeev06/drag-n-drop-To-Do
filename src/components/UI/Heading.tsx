interface HeadingProps {
  children?: string | JSX.Element | JSX.Element[]
  color?: string
  fontSize?: number
  mt?: number
  mb?: number
  fontWeight?: number
  ml?: number
  mr?: number
}

export const Heading = ({
  children,
  color = 'black',
  fontSize,
  mt,
  mb,
  ml,
  mr,
  fontWeight = 400,
}: HeadingProps) => {
  return (
    <h1
      style={{
        color,
        fontSize,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        fontWeight,
      }}
    >
      {children}
    </h1>
  )
}

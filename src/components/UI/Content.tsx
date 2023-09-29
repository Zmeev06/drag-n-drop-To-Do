interface ContentProps {
  children: string | boolean | JSX.Element | JSX.Element[]
  maxW?: 'sm' | 'md' | 'lg'
  mt?: number
  className?: string
  mb?: number
  pt?: number
  pb?: number
}

export const Content = ({
  children,
  maxW,
  mt,
  className,
  mb,
  pt,
  pb,
}: ContentProps) => {
  return (
    <div
      className={className}
      style={{
        maxWidth:
          maxW === 'sm'
            ? '50vw'
            : maxW === 'md'
            ? '65vw'
            :
            maxW === 'lg'
            ? '80vw'
            : '100vw',
        margin: '0 auto',
        marginTop: mt,
        marginBottom: mb,
        paddingTop: pt,
        paddingBottom: pb,
      }}
    >
      {children}
    </div>
  )
}

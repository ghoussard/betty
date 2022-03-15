type TitleProps = Record<string, unknown>

const Title = ({ children }: React.PropsWithChildren<TitleProps>) => {
  return <h1>{children}</h1>
}

export { Title }

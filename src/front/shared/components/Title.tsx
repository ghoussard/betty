type TitleProps = Record<string, unknown>

const Title = ({ children }: React.PropsWithChildren<TitleProps>) => {
  return <h1 className="text-3xl leading-normal font-semibold">{children}</h1>
}

export { Title }

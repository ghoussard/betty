type ButtonProps = {
  onClick: () => void
}

const Button = ({
  children,
  onClick,
}: React.PropsWithChildren<ButtonProps>) => {
  return <button onClick={onClick}>{children}</button>
}

export { Button }

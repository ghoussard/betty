type ButtonProps = {
  onClick: () => void
}

const Button = ({
  children,
  onClick,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <div
      className="rounded bg-gray-800 text-lg w-24 p-1 text-center text-slate-50 focus:text-white focus:bg-gray-900 md:hover:text-white md:hover:bg-gray-900"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export { Button }

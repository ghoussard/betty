type TextInputProps = {
  name: string
  value: string
  onChange: (value: string) => void
}

const TextInput = ({
  children,
  name,
  value,
  onChange,
}: React.PropsWithChildren<TextInputProps>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input
        id={name}
        name={name}
        className="block border leading-normal text-gray-700 md:shadow"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export { TextInput }

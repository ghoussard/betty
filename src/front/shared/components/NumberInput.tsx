type NumberInputProps = {
  name: string
  value: number
  onChange: (value: number) => void
}

const NumberInput = ({
  children,
  name,
  value,
  onChange,
}: React.PropsWithChildren<NumberInputProps>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value || '0')
    onChange(value)
  }

  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input
        className="block border leading-normal text-gray-700 md:shadow"
        type="number"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export { NumberInput }

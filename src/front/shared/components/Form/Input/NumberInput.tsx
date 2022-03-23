import { Container, InputProps } from './common'

const NumberInput = ({ onChange, ...props }: InputProps<number>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const value = parseInt(e.target.value || '0', 10)
      onChange(value)
    }
  }

  return <Container type="number" onChange={handleChange} {...props} />
}

export { NumberInput }

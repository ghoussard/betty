import { Container, InputProps } from './common'

const TextInput = ({ onChange, ...props }: InputProps<string>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return <Container type="text" onChange={handleChange} {...props} />
}

export { TextInput }

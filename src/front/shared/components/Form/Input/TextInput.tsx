import { Error } from '../Error'
import { Input, InputProps } from './common'

const TextInput = ({
  onChange,
  error = null,
  ...props
}: InputProps<string>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <>
      <Input
        type="text"
        onChange={handleChange}
        hasError={null !== error}
        {...props}
      />
      {error && <Error>{error}</Error>}
    </>
  )
}

export { TextInput }

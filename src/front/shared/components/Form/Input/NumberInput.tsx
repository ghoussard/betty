import { Error } from '../'
import { InputProps, Input } from './common'

const NumberInput = ({
  onChange,
  error = null,
  ...props
}: InputProps<number>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const value = parseInt(e.target.value || '0', 10)
      onChange(value)
    }
  }

  return (
    <>
      <Input
        type="number"
        onChange={handleChange}
        hasError={null !== error}
        {...props}
      />
      {error && <Error>{error}</Error>}
    </>
  )
}

export { NumberInput }

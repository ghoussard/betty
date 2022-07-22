import styled from 'styled-components'
import { InputHTMLAttributes } from 'react'
import { Override } from '../../../utils'
import { colors } from '../../../theme'

type InputProps<T> = Override<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
  {
    value?: T
    onChange?: (value: T) => void
    error?: string | null
  }
>

const getInputColor = (hasError: boolean): string => {
  return hasError ? colors.red : colors.green
}

const Input = styled.input<
  Override<
    InputHTMLAttributes<HTMLInputElement>,
    {
      hasError: boolean
    }
  >
>`
  border: 0.1rem solid ${({ hasError }) => getInputColor(hasError)};
  border-radius: 0.25rem;
  padding: 0.5rem;

  &:focus {
    outline-color: ${colors.green};
  }
`

export type { InputProps }
export { Input, getInputColor }

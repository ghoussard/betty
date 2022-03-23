import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Override } from '../../../utils'
import { colors } from '../../../theme'

const Container = styled.input`
  border: 0.1rem solid ${colors.green};
  border-radius: 0.25rem;
  padding: 0.5rem;

  &:focus {
    outline-color: ${colors.green};
  }
`

type InputProps<T> = Override<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
  {
    value?: T
    onChange?: (value: T) => void
  }
>

export type { InputProps }
export { Container }

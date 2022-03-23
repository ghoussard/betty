import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

const Container = styled.button`
  appareance: none;
  border: none;
  border-radius: 0.25rem;

  padding: 0.5rem 1rem;
  font-size: 1rem;

  color: ${colors.white};
  background-color: ${colors.green};

  cursor: pointer;

  &:focus {
    box-shadow: 0 0 3px ${colors.green};
  }
`

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => (
  <Container {...props}>{children}</Container>
)

export { Button }

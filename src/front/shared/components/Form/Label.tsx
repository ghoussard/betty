import { LabelHTMLAttributes } from 'react'
import styled from 'styled-components'

const Container = styled.label`
  font-weight: 500;
`

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

const Label = ({ children, ...props }: LabelProps) => (
  <Container {...props}>{children}</Container>
)

export type { LabelProps }
export { Label }

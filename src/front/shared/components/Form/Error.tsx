import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'

const Container = styled.div`
  color: ${colors.red};
`

type ErrorProps = HTMLAttributes<HTMLDivElement>

const Error = ({ children, ...props }: ErrorProps) => (
  <Container {...props}>{children}</Container>
)

export type { ErrorProps }
export { Error }

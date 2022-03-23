import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, Override } from '@/front/shared'

const Container = styled.div`
  padding: 0.5rem;
  color: ${colors.green};
  font-weight: 500;
`

type ToggleProps = Override<HTMLAttributes<HTMLDivElement>, { open: boolean }>

const Toggle = ({ open, ...props }: ToggleProps) => (
  <Container {...props}>{open ? 'Close' : 'Open'}</Container>
)

export { Toggle }

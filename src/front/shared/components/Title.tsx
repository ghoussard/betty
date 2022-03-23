import { ReactText, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Override } from '../utils'

const Container = styled.h1`
  line-height: 1.5;
`

type TitleProps = Override<HTMLAttributes<HTMLElement>, { children: ReactText }>

const Title = ({ children, ...props }: TitleProps) => (
  <Container {...props}>{children}</Container>
)

export { Title }

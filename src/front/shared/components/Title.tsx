import { ReactText, HTMLAttributes } from 'react'
import styled from 'styled-components'

const Container = styled.h1`
  line-height: 1.5;
`

type TitleProps = HTMLAttributes<HTMLElement> & {
  children: ReactText
}

const Title = ({ children, ...props }: TitleProps) => {
  return <Container {...props}>{children}</Container>
}

export { Title }

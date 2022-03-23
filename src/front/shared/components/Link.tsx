import { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { colors } from '../theme'
import { Override } from '../utils'

const Container = styled.a`
  text-decoration: none;
  color: ${colors.green};
  font-weight: 500;
`

type LinkProps = Override<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  Pick<NextLinkProps, 'href'>
>

const Link = ({ children, href, ...props }: LinkProps) => (
  <NextLink href={href} passHref>
    <Container {...props}>{children}</Container>
  </NextLink>
)

export { Link }

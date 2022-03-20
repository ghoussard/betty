import { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { colors } from '@/front/shared'

const Container = styled.a`
  text-decoration: none;
  color: ${colors.green};
  font-weight: 500;
`

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<NextLinkProps, 'href'>

const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Container {...props}>{children}</Container>
    </NextLink>
  )
}

export { Link }

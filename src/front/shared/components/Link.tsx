import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type LinkProps = NextLinkProps

const Link = (props: React.PropsWithChildren<LinkProps>) => {
  const nextLinkProps = {
    ...props,
    children: undefined,
  }

  return (
    <NextLink {...nextLinkProps}>
      <a className="text-gray-900 font-medium underline">{props.children}</a>
    </NextLink>
  )
}

export { Link }

import type { ComponentProps } from 'react'
import Link from 'next/link'

type Props = ComponentProps<'button'> & ComponentProps<'a'>

export interface ButtonOrLinkProps extends Props {}

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
export function ButtonOrLink({ href, ref, ...props }: ButtonOrLinkProps) {
  const isLink = typeof href !== 'undefined'

  let content = <button ref={ref} {...props} />

  if (isLink) {
    return <Link href={href} {...props} />
  }

  return content
}

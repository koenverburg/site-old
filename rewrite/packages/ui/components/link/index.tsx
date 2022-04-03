import * as React from 'react'
import NextLink from 'next/link'

export type Props = {
  label: string
  href: string
}

export const Link = ({
  label,
  href
}: Props) =>
  !href ? null : (
    <NextLink href={href} passHref>
      <a className="w-max pb-8">{label}</a>
    </NextLink>
  )

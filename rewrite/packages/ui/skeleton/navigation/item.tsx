import * as React from 'react'
import Link from 'next/link'

export type Props = {
  to: string
  label: string
}

export const NavigationItem = ({ to, label}: Props) => {
  return (
    <li className="text-xl">
      <Link href={to}>
        {label}
      </Link>
    </li>
  )
}

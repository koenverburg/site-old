import * as React from 'react'
import Link from 'next/link'

export type Props = {
  children: React.ReactNode
}

export const Navigation = (props: Props) => {
  return (
    <nav className="flex justify-between">
      <Link href="/">
        <span className="text-xl" style={{ cursor: "pointer" }}>
          <span className="font-bold">Koen</span>
          {' '}
          <span>Verburg</span>
        </span>
      </Link>
      <ul className="flex space-x-4">
        {props.children}
      </ul>
    </nav>
  )
}

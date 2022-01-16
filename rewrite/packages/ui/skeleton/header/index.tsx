import * as React from 'react'
import { Navigation } from '../navigation'

export type Props = {}

export const Header = (props: Props) => {
  return (
    <header>
      <a href="/">Koen Verburg</a>
      <Navigation>
        <li>link 1</li>
      </Navigation>
    </header>
  )
}

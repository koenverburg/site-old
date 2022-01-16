import * as React from 'react'

export type Props = {
  children: React.ReactChild | React.ClassicElement
}

export const Navigation = (props: Props) => {
  return (
    <nav>
      <ul>
        {props.children}
      </ul>
    </nav>
  )
}

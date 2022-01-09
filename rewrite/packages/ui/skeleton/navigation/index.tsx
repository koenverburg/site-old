import * as React from 'react'

export type Props = {
  children: React.ReactChildren
}

export const Navigation = (props: Props) => {
  return (
    <nav>{props.children}</nav>
  )
}

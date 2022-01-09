import * as React from 'react'
import { Header, Section } from '..'

export type Props = {
  children: React.ReactChildren
}

export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Section />
    </>
  )
}

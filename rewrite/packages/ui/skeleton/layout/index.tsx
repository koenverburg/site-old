import * as React from 'react'
import { Header, Footer } from '..'

export type Props = {
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  return (
    <>
      <Header />

      {props.children}

      <Footer />
    </>
  )
}

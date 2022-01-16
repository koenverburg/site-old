import * as React from 'react'
import { Header, Footer, Navigation, NavigationItem } from '..'

export type Props = {
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  return (
    <div className="container mx-auto px-6 sm:px-3 md:px-0">
      <Navigation>
        <NavigationItem to="/blog" label="Blog" />
        <NavigationItem to="/kit" label="Kit" />
        <NavigationItem to="/links" label="Links" />
      </Navigation>

      <Header />

      {props.children}

      <Footer />
    </div>
  )
}

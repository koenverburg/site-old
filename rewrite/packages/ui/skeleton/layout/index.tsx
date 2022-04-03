import * as React from 'react'
import { Footer, Navigation, NavigationItem, Theme } from '..'
import { Social } from '../../types'

export type NavigationLinks = {
  to: string
  label: string
}

export type Props = {
  links?: NavigationLinks[]
  socials?: Social[] 
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto sm:max-w-screen-sm px-6 sm:px-3 md:px-0">
      <Navigation>
        {props.links && props.links.map(link => (
          <NavigationItem key={link.to} to={link.to} label={link.label} />
        ))}
      </Navigation>

      <main className="flex-grow">
        {props.children}
      </main>

      <Footer socials={props.socials}/>
      <Theme />
    </div>
  )
}

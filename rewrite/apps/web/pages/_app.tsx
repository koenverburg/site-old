import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from '@packages/ui/skeleton'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const links = [
    { to: "/blog", label: "Blog" },
    { to: "/uses", label: "Uses" },
    // { to: "/kit", label: "Kit" }, -> sub domains like kit.koenverburg.dev
    // { to: "/links", label: "Links" } -> links.koenverburg.dev
  ]

  const socials = [
    { url: "https://www.twitter.com/koenverburg", handle: "@koenverburg", icon: 'twitter' },
    { url: "https://github.com/koenverburg", handle: "@koenverburg", icon: 'github' },
    { url: "https://www.instagram.com/koenverburg.tech", handle: "@koenverburg.tech", icon: 'instagram' },
    { url: "https://koenverburg.medium.com", handle: "@koenverburg", icon: 'medium-m' },
    { url: "https://twitch.tv", handle: "@koenverburg", icon: 'twitch' },
  ]

  return (
    <ThemeProvider>
      <Head>
        <title>{'Koen Verburg'}</title>
      </Head>
      <Layout
        links={links}
        socials={socials}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

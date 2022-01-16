import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from '@packages/ui/skeleton'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>{'Koen Verburg'}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout, Navigation } from '@packages/ui/skeleton'


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>{'Koen Verburg'}</title>
      </Head>
      <Layout>
        <Navigation>
          <ul>
            <li>link 1</li>
          </ul>
        </Navigation>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

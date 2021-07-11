import React from 'react'
import Head from 'next/head'
import '../styles/root.scss'
import ErrorPage from 'next/error'
import {data} from '../data/static'
import type {AppProps} from 'next/app'
import {ErrorBoundary} from '@components'
import {ApolloProvider} from '@apollo/client'
import {useApollo} from '../lib/apolloClient'

export default function App({Component, pageProps}: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState)

  if (pageProps.statusCode && pageProps.statusCode >= 400) {
    return <ErrorPage statusCode={pageProps.statusCode} />
  }

  return (
    <React.Fragment>
      <Head>
        <title>{data.name}</title>
      </Head>
      <ErrorBoundary fallback={'Error happened...'}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} client={apolloClient} />
        </ApolloProvider>
      </ErrorBoundary>
    </React.Fragment>
  )
}

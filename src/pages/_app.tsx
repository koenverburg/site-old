import React from 'react'
import Head from 'next/head'
import '../styles/root.scss'
import ErrorPage from 'next/error'
// import {data} from '../data/static'
import type {AppProps} from 'next/app'
import {ErrorBoundary, Layout} from '@components'
import {ApolloProvider, useQuery} from '@apollo/client'
import {useApollo} from '../lib/apolloClient'
import {rootQuery} from 'rootQuery'

export default function App({Component, pageProps}: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const {error, data} = useQuery(rootQuery, {client: apolloClient})

  if (pageProps.statusCode && pageProps.statusCode >= 400) {
    return <ErrorPage statusCode={pageProps.statusCode} />
  }

  if (error) return(<div>Graphql error<pre><code>{JSON.stringify(error, null, 2)}</code></pre></div>)

  return (
    <React.Fragment>
      <Head>
        <title>{'Koen Verburg'}</title>
      </Head>
      <ErrorBoundary fallback={'Error happened...'}>
        <ApolloProvider client={apolloClient}>
          <Layout {...data}>
            <Component {...pageProps} client={apolloClient} />
          </Layout>
        </ApolloProvider>
      </ErrorBoundary>
    </React.Fragment>
  )
}

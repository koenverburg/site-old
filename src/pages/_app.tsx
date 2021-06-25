import React from 'react'
import Head from 'next/head'
import ErrorPage from 'next/error'
import {MDXProvider} from '@mdx-js/react'
import {ApolloProvider} from '@apollo/react-hooks'
import {AppProps} from 'next/dist/next-server/lib/router/router'

import '../styles/root.scss'
import {data} from '../data/static'
import {useApollo} from '../lib/apolloClient'
import {ErrorBoundary} from '@components'
import {MarkdownComponents} from 'components/MarkdownComponents'

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
        <MDXProvider components={MarkdownComponents}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} client={apolloClient} />
          </ApolloProvider>
        </MDXProvider>
      </ErrorBoundary>
    </React.Fragment>
  )
}

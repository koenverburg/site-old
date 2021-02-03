import React from 'react'
import Head from 'next/head'
import ErrorPage from 'next/error'
import {preToCodeBlock} from 'mdx-utils'
import {AppProps} from 'next/dist/next-server/lib/router/router'
import {MDXProvider} from '@mdx-js/react'
import {ApolloProvider} from '@apollo/react-hooks'

import '../styles/root.scss'
import {data} from '../data/static'
import {useApollo} from '../lib/apolloClient'
import {ErrorBoundary, Code} from '@components'

export default function App({Component, pageProps}: AppProps): React.ReactNode {
  const apolloClient = useApollo(pageProps.initialApolloState)

  if (pageProps.statusCode && pageProps.statusCode >= 400) {
    return <ErrorPage statusCode={pageProps.statusCode} />
  }

  const components = { 
    pre: (preProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement>) => {
      const props = preToCodeBlock(preProps)
      if (props) {
        return <Code {...props} />
      } else {
        return <pre {...preProps} />
      }
    },
  }

  return (
    <React.Fragment>
      <Head>
        <title>{data.name}</title>
      </Head>
      <ErrorBoundary fallback={'Error happened...'}>
        <MDXProvider components={components}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} client={apolloClient} />
          </ApolloProvider>
        </MDXProvider>
      </ErrorBoundary>
    </React.Fragment>
  )
}

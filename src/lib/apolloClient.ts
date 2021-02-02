import {useMemo} from 'react'
import {ApolloClient, InMemoryCache, NormalizedCacheObject} from '@apollo/react-hooks'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    uri: process.env.GRAPHCMS_URL,
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null): ApolloClient<NormalizedCacheObject> {
  const localApolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = localApolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    localApolloClient.cache.restore({...existingCache, ...initialState})
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return localApolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = localApolloClient

  return localApolloClient
}

export function useApollo(initialState: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}

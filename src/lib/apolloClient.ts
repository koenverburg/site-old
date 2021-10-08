import {useMemo} from 'react'
import {ApolloClient, InMemoryCache, NormalizedCacheObject} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
  })
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null): ApolloClient<NormalizedCacheObject> {
  const localApolloClient = apolloClient ?? createApolloClient()

  // Hydrate the state when its present
  if (initialState) {
    const existingCache = localApolloClient.extract()
    localApolloClient.cache.restore({...existingCache, ...initialState})
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return localApolloClient
  }

  if (!apolloClient) {
    apolloClient = localApolloClient
  }

  return localApolloClient
}

export function useApollo(initialState: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}

import {GraphQLClient} from 'graphql-request'

let protocol = 'https'

if (process.env.NODE_ENV === 'development') {
  protocol = 'http'
}

export const client = new GraphQLClient(`${protocol}://${process.env.VERCEL_URL}/api/graphql`)


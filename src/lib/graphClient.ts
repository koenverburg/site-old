import {GraphQLClient} from 'graphql-request'

export const client = new GraphQLClient(`${process.env.VERCEL_URL}/api/graphql`)


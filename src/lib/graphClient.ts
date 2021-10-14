import {getHost} from './helpers'
import {GraphQLClient} from 'graphql-request'

export const client = new GraphQLClient(`${getHost()}/api/graphql`)


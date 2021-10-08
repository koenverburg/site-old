import fetch from 'isomorphic-fetch'
import {GraphQLSchema, print} from 'graphql'
import {ApolloServer} from 'apollo-server-micro'
import {introspectSchema, wrapSchema} from '@graphql-tools/wrap'

const executor = async ({document, variables}) => {
  const query = print(document)
  const fetchResult = await fetch(process.env.GRAPHCMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
    body: JSON.stringify({query, variables}),
  })
  return fetchResult.json()
}

const createRemoteSchema = async (): Promise<GraphQLSchema> =>
  wrapSchema({
    // @ts-ignore // The typing of this function is off
    schema: await introspectSchema(executor),
    // @ts-ignore
    executor,
  })

const apolloServer = new ApolloServer({
  schema: await createRemoteSchema(),
})

export const config = {
  api: {
    bodyParser: false,
  },
}

await apolloServer.start()

export default apolloServer.createHandler({path: '/api/graphql'})

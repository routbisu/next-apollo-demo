import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import fetch from 'cross-fetch'

const GRAPHQL_HOST =
  process.env.NODE_ENV === 'production'
    ? 'https://apollo-next-demo-server.herokuapp.com'
    : 'http://localhost:4000'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_HOST, fetch }),
  cache: new InMemoryCache()
})

export default client

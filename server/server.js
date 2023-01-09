const { ApolloServer } = require('apollo-server')

// Get fake data from graphql
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({ token: req.headers.token })
})

const port = process.env.PORT || 4000

const startApolloServer = async () => {
  const { url } = await server.listen(port)
  console.log(`🚀  Server running at ${url}`)
}

startApolloServer()

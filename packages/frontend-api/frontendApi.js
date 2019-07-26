const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World :)'}`
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })

const options = {
  port: 7001,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
}

server.start(options, ({ port }) =>
  console.log(
    `GraphQL Server started, listening on port ${port} for incoming requests.`
  )
)

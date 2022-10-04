import { ApolloServer } from 'apollo-server'
import * as dotenv from 'dotenv'
dotenv.config()
import './src/db/mongoose.js'
import typeDefs from './src/graphql/typeDefs.js'
import resolvers from './src/graphql/resolvers.js'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})

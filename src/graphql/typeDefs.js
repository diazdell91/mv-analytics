import { gql } from 'apollo-server'

const typeDefs = gql`
  enum Status {
    ACTIVE
    INACTIVE
    CANCLED
  }
  enum Category {
    PAIDSOCIAL
    PAIDSEARCH
    WEBSITE
    BRANDING
    LISTING
    SOCIALMEDIA
    HOSTING
  }

  type Client {
    id: ID!
    bussinessName: String!
    name: String!
    email: String!
    phone: String
    status: Status!
    services: [Service]
    apiKeyHl: String
  }

  type Success{
    success: Boolean!
  }

  type Service {
    id: ID
    name: String
    description: String
    category: Category
    price: Float
    subcription: Boolean
  }

  type Query {
    clients: [Client]
    client(id: ID!): Client
    services: [Service]
    service(id: ID!): Service
  }

  input ClientInput {
    bussinessName: String!
    name: String!
    email: String!
    phone: String
    status: Status!
    apiKeyHl: String
  }

  input ServiceInput {
    name: String!
    description: String!
    category: Category!
    price: Float!
    subcription: Boolean!
  }

  type Mutation {
    # Clients
    createClient(input: ClientInput): Client
    updateClient(id: ID!, input: ClientInput): Client
    deleteClient(id: ID!): String
    clientAddService(id: ID!, serviceId: String!): Success
    clientRemoveService(id: ID!, serviceId: String!): Success
    # Services
    createService(input: ServiceInput): Service
    updateService(id: ID!, input: ServiceInput): Service
    deleteService(id: ID!): String
  }
`
export default typeDefs

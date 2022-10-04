import {
  clients,
  createClient,
  updateClient,
  deleteClient,
  clientAddService,
  clientRemoveService
} from './resolvers/clientResolvers.js'
import {
  services,
  createService,
  deleteService,
  updateService
} from './resolvers/servicesResolvers.js'

const resolvers = {
  Query: {
    // Clients
    clients,
    // Services
    services
  },
  Mutation: {
    // Clients
    createClient,
    updateClient,
    deleteClient,
    clientAddService,
    clientRemoveService,

    // Services
    createService,
    deleteService,
    updateService
  }
}

export default resolvers

import Client from '../../models/clientModels.js'

const createClient = async (_, args) => {
  console.log(args)
  const client = new Client(args.input)
  return client.save()
}

const updateClient = async (_, args) => {
  return Client.findByIdAndUpdate(args.id, args.input, { new: true })
}

const deleteClient = async (_, args) => {
  await Client.findByIdAndDelete(args.id)
}

const clients = async () => {
  return Client.find().populate('services')
}

const clientAddService = async (_, args) => {
  const { id, serviceId } = args
  const client = await Client.findById(id)
  if (!client) {
    return {
      success: false
    }
  }
  if (client.services.includes(serviceId)) {
    return {
      success: false
    }
  }
  const newClient = await Client.findByIdAndUpdate(id, {
    $push: { services: serviceId }
  })
  if (!newClient.services.includes(serviceId)) {
    return {
      success: false
    }
  }
  return {
    success: true
  }
}

const clientRemoveService = async (_, args) => {
  const { id, serviceId } = args
  const client = await Client.findById(id)
  if (!client) {
    return {
      success: false
    }
  }
  if (!client.services.includes(serviceId)) {
    return {
      success: false
    }
  }
  const newClient = await Client.findByIdAndUpdate(id, {
    $pull: { services: serviceId }
  })
  if (newClient.services.includes(serviceId)) {
    return {
      success: false
    }
  }
  return {
    success: true
  }
}

export {
  clients,
  createClient,
  updateClient,
  deleteClient,
  clientAddService,
  clientRemoveService
}

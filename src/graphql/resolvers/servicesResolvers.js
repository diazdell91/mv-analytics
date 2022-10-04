import Service from '../../models/serviceModels.js'

const createService = async (_, args) => {
  const service = new Service(args.input)
  return service.save()
}

const updateService = async (_, args) => {
  return Service.findByIdAndUpdate(args.id, args.input, { new: true })
}

const deleteService = async (_, args) => {
  await Service.findByIdAndDelete(args.id)
}

//Query
const services = async () => {
  return Service.find()
}

export { createService, updateService, deleteService, services }

import { Schema, model, ObjectId } from 'mongoose'

ObjectId.prototype.valueOf = function () {
  return this.toString()
}

const clientSchema = new Schema(
  {
    bussinessName: { type: String, required: true, trim: true, unique: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: false, trim: true },
    status: { type: String, required: true, trim: true },
    services: [{ type: ObjectId, ref: 'Service' }],
    apiKeyHl: { type: String, required: false, trim: true, unique: true }
  },
  { versionKey: false, timestamps: true }
)

clientSchema.set('toJSON', {
  transform: (_, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
  }
})

const Client = model('Client', clientSchema)

export default Client

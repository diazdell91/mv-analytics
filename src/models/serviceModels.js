import { Schema, model } from 'mongoose'

const serviceSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    description: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    subcription: { type: Boolean, required: true, trim: true }
  },
  { versionKey: false, timestamps: true }
)

serviceSchema.set('toJSON', {
  transform: (_, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
  }
})

const Service = model('Service', serviceSchema)

export default Service

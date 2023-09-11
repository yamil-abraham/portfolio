import mongoose, { Model, Schema } from 'mongoose'

const emailSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

const EmailModel = mongoose.models.Email || mongoose.model('Email', emailSchema)

export default EmailModel

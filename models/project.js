import mongoose, { Model, Schema } from 'mongoose'

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
  urlDeploy: {
    type: String,
    default: '',
  },
  videoDemo: { type: String, default: '' },
  description: { type: String, required: true },

  tecnologies: {
    type: [String],
    required: true,
  },
  types: { type: [String], required: true },
  company: {
    type: String,
    required: true,
  },
})

const ProjectModel =
  mongoose.models.Project || mongoose.model('Project', projectSchema)

export default ProjectModel

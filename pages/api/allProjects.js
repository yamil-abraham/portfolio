import { db } from '../../database'
import Project from '../../models/project'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getAllProjects(res)
    default:
      return res.status(400).json({ message: "Endpoint doesn't exists" })
  }
}

const getAllProjects = async (res) => {
  try {
    await db.connect()

    const projects = await Project.find()

    await db.disconnect()

    res.status(200).json(projects)
  } catch (error) {
    await db.disconnect()
    res.status(500).json({ message: 'Error al obtener los proyectos' })
  }
}

import { db } from '../../database'
import Email from '../../models/Emails'

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return sendEmail(req, res)
    default:
      return res.status(400).json({ message: "Endpoint doesn't exists" })
  }
}

const sendEmail = async (req, res) => {
  try {
    await db.connect()
    console.log(req.body)
    const { firstName, lastName, email, message } = req.body

    // Buscar si el correo electrónico ya existe en la base de datos
    const existingEmail = await Email.findOne({ email })

    if (existingEmail) {
      // El correo electrónico ya se encuentra en la base de datos, realizar alguna acción o enviar una respuesta correspondiente
      res.status(203).json({ error: true, message: 'Email already has sended' })
    } else {
      const newEmail = new Email({
        firstName,
        lastName,
        email,
        message,
      })

      await newEmail.save()

      res
        .status(200)
        .json({ error: false, message: 'Email sent successfully!' })
    }

    await db.disconnect()
  } catch (error) {
    await db.disconnect()
    res.status(500).json({ message: 'Error al eviar mail' })
  }
}

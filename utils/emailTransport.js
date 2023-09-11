const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PW,
  },
})

module.exports = transporter

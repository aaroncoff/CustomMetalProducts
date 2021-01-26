const nodemailer = require('nodemailer')

const smtpConfig = {
  service: 'Yahoo',
  auth: {
    user: process.env.NODEMAILER_ADDRESS,
    pass: process.env.NODEMAILER_PASSWORD
  }
}
let transporter = nodemailer.createTransport(smtpConfig)

function mailer(from, to, subject, html) {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from,
      to,
      subject,
      html
    }
    transporter.sendMail(mailOptions)
      .then(result => {
        return resolve(result)
      })
      .catch(err => {
        console.log('failed to send email: ', err)
        return reject(err)
      })
  })
}

module.exports = {mailer}

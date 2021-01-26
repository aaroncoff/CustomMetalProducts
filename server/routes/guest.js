const express = require('express')
const router = express.Router()
const {mailer} = require('../lib/mailer')

router.post('/contact', (req, res) => {
  const {name, email, text} = req.body
  const from = `"CustomMetalProducts" <${process.env.NODEMAILER_ADDRESS}>`
  const messageUpdated = `<b>Name: </b>${name}<br><b>Email: </b>${email}<br><br>${text}`

  // send mail our website
  mailer(from, process.env.NODEMAILER_ADDRESS, 'Contact Us', messageUpdated)
    .then(result => {
      return res.status(200).json({
        message: result.response
      })
    })
    .catch(err => {
      console.log('guest.js mailer() failed to send email to website admin')
      return res.status(500).json(err)
    })
})

module.exports = router

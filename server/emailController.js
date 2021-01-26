const nodemailer = require('nodemailer');
// const xoauth2 = require('xoauth2');
require('dotenv').config()

module.exports = {
    sendEmail: (req,res) => {
        console.log('-----hit', req.body)
        const { name, email, text } = req.body
        console.log('req.body', name, email, text)

        let transporter = nodemailer.createTransport({
            service: "yahoo",

            auth: {
                    user: process.env.NODEMAILER_ADDRESS,
                    pass: process.env.NODEMAILER_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        })
        console.log('transporter', transporter)

        let mailOptions = {
            from: name + ' ' + process.env.NODEMAILER_ADDRESS,
            to: process.env.NODEMAILER_ADDRESS,
            text: name + ' ' + email + ' ' + text
        }

        

    console.log('process.env.NODEMAILER_ADDRESS', process.env.NODEMAILER_ADDRESS)

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log("----error", error)
            }else{
                console.log("Message was sent", info.response)
                transporter.close()
                res.redirect('/')
            }
        })
    }
}




// require('dotenv').config()
// var nodemailer = require('nodemailer');


// module.exports = {
//     sendEmail: (req) => {
//         console.log('-----hit', req.body)
//         const { name, email, text } = req.body
//         console.log('req.body', name, email, text)

// var transporter = nodemailer.createTransport({
//   service: 'yahoo',
//   auth: {
//     user: process.env.NODEMAILER_ADDRESS,
//     pass: process.env.NODEMAILER_PASSWORD
//   },
//   tls: {
//     rejectUnauthorized: false
// }
// })


// var mailOptions = {
//   from: name + ' ' + process.env.NODEMAILER_ADDRESS,
//   to: process.env.NODEMAILER_ADDRESS,
//   subject: 'New Message From ' + name,
//   text: name + ' ' + email + ' ' + text
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// })
// }}
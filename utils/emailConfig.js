// const { EmailClient } = require("@azure/communication-email");
// const nodemailer = require('nodemailer');

// const connectionString = 'endpoint=https://eazyvc-communication.communication.azure.com/;accesskey=YIa7RUQg7wj13CvkjLtx0aGnD7QLeXf1a+4OeYctYF4Xr/w9OFgcba+2w8+S8b9kvTfMl5KWVj//2AIWhOAqCg=='
// const client = new EmailClient(connectionString);
// const sender = "DoNotReply@eazyvc.com";

// const transporter = nodemailer.createTransport({
//     host: 'email-smtp.us-east-1.amazonaws.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'AKIAR7NUTGEW4AQI35PU',
//         pass: 'BN6xi2dxLRDgwy+oFKvrINmqgJk/9zwBLTk4fYcg4/cr'
//     }
// })

let client = "test",
   sender = "test",
   transporter = "data"

module.exports = { client, sender, transporter }
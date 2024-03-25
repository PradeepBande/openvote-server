const jwt = require('jsonwebtoken');
const Admin = require('../models/admins');
const sha256 = require('sha256');

const createJwtToken = (admin) => {
   return jwt.sign({ admin }, process.env.JWT_SECRET, { expiresIn: '1d' });
}



exports.register = (req, res) => {
   let { email, password, phone, name, city, district, state, address, pincode, country } = req.body;
   password = sha256(password)

   let newAdmin = new Admin({ email, password, phone, name, city, district, state, address, pincode, country })

   newAdmin.save(async (err, admin) => {
      if (!err || admin) {
         let adminData = JSON.parse(JSON.stringify(admin))
         // adminData.password = null
         delete adminData.password
         let token = createJwtToken(adminData)
         return res.json({
            code: 'success',
            message: 'Registered successfully',
            status: 200,
            token,
            admin: adminData
         })
      } else {
         return res.json({
            code: 'failed',
            message: 'server error',
            status: 500
         })
      }
   })
}


exports.signin = (req, res) => {
   let { email, password } = req.body;
   email = email.trim()

   let data = {
      email: email
   }
   if (parseInt(email) == email) {
      data = {
         phone: email
      }
   }

   Admin.findOne(data)
      .exec(async (err, admin) => {
         if (err) {
            return res.json({
               code: 'failed',
               message: 'server error',
               status: 500,
               err
            })
         } else if (admin) {
            password = sha256(password)
            if (password === admin.password) {
               let adminData = JSON.parse(JSON.stringify(admin))
               // adminData.password = null
               delete adminData.password
               let token = createJwtToken(adminData)
               return res.json({
                  code: 'success',
                  message: 'Authenticated successfully',
                  status: 200,
                  token,
                  admin: adminData
               })
            } else {
               return res.json({
                  code: 'invalid_credentials',
                  message: 'Inavlid email/password',
                  status: 402
               })
            }
         } else {
            return res.json({
               code: 'not_registered',
               message: 'User not registered',
               status: 402
            })
         }
      })
}


exports.validateToken = (req, res, next) => {
   const { token } = req.body
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.userData = decoded
      return res.status(200).json({
         code: 'success',
         message: 'Authorized User',
         status: 200
      })
   } catch (error) {
      return res.status(401).json({
         message: 'Auth failed',
         code: 'failed',
         status: 402
      })
   }
}
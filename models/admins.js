const mongoose = require('mongoose');
const moment = require('moment')

const adminSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         trim: true,
         default: ''
      },
      email: {
         type: String,
         trim: true,
         lowercase: true,
         default: ''
      },
      phone: {
         type: Number,
         trim: true,
      },
      password: {
         type: String,
         trim: true,
      },
      city: {
         type: String,
         default: ''
      },
      district: {
         type: String,
         default: ''
      },
      state: {
         type: String,
         default: '',
      },
      country: {
         type: String,
         default: '',
      },
      pincode: {
         type: Number,
         trim: true,
      },
      address: {
         type: String,
         default: '',
      },
      registered_at: {
         type: Date,
         default: moment(),
      }
   },
   { timestamp: true }
);
module.exports = mongoose.model('Admin', adminSchema);

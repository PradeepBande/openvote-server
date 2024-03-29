const mongoose = require('mongoose');
const moment = require('moment')

const constituencySchema = new mongoose.Schema(
   {
      constituency: {
         type: String,
         trim: true,
         default: ''
      },
      city: {
         type: String,
         default: ''
      },
      union_territory: {
         type: Boolean,
         default: false
      },
      state: {
         type: String,
         default: '',
      },
      created_at: {
         type: Date,
         default: moment(),
      }
   },
   { timestamp: true }
);
module.exports = mongoose.model('Constituency', constituencySchema);

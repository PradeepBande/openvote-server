const mongoose = require('mongoose');
const moment = require('moment')

const constituencySchema = new mongoose.Schema(
   {
      constituency_name: {
         type: String,
         trim: true,
         default: ''
      },
      created_at: {
         type: Date,
         default: moment(),
      }
   },
   { timestamp: true }
);
module.exports = mongoose.model('Constituency', constituencySchema);

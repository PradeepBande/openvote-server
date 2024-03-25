const mongoose = require('mongoose');
const moment = require('moment')

const partySchema = new mongoose.Schema(
    {
        party_name: {
            type: String,
            trim: true,
            default: ''
        },
        party_logo: {
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'Party',
            // trim: true,
            // required: true
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
module.exports = mongoose.model('Party', partySchema);

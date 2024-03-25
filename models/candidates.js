const mongoose = require('mongoose');
const moment = require('moment')

const candidateSchema = new mongoose.Schema(
    {
        candidate_name: {
            type: String,
            trim: true,
            default: ''
        },
        candidate_image: {
            // type: mongoose.Schema.Types.ObjectId,
            // ref: 'Party',
            // trim: true,
            // required: true
            type: String,
            trim: true,
            default: ''
        },
        party: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Party',
            trim: true,
            required: true
        },
        created_at: {
            type: Date,
            default: moment(),
        }
    },
    { timestamp: true }
);
module.exports = mongoose.model('Candidate', candidateSchema);

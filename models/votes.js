const mongoose = require('mongoose');
const moment = require('moment')

const voteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            default: ''
        },
        candidate_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Candidate',
            trim: true,
            required: true
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
        pincode: {
            type: Number,
            trim: true,
        },
        location: {
            type: String,
            default: '',
        },
        voted_at: {
            type: Date,
            default: moment(),
        }
    },
    { timestamp: true }
);
module.exports = mongoose.model('Vote', voteSchema);

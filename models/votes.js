const mongoose = require('mongoose');
const moment = require('moment')

const voteSchema = new mongoose.Schema(
    {
        resolution: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Resolution',
            default: ''
        },
        constituency: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Constituency',
            trim: true,
            required: true
        },
        candidate: {
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
        ip_address: {
            type: String,
            trim: true,
        },
        mac_address: {
            type: String,
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

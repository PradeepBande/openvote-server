const mongoose = require('mongoose');
const moment = require('moment')

const resolutionSchema = new mongoose.Schema(
    {
        resolution_name: {
            type: String,
            trim: true,
            default: ''
        },
        constituency: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Party',
            trim: true,
            required: true
        },
        candidates: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Candidate',
            trim: true,
            required: true
        }],
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
        created_at: {
            type: Date,
            default: moment(),
        }
    },
    { timestamp: true }
);
module.exports = mongoose.model('Resolution', resolutionSchema);

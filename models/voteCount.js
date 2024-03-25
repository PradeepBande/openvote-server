const mongoose = require('mongoose');
const moment = require('moment')

const voteSchema = new mongoose.Schema(
    {
        resolution: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Resolution',
            trim: true,
            required: true
        },
        constituency: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Party',
            trim: true,
            required: true
        },
        party: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Party',
            trim: true,
            required: true
        },
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Candidate',
            trim: true,
            required: true
        },
        count: {
            type: Number,
            trim: true,
            default: 0
        }
    },
    { timestamp: true }
);
module.exports = mongoose.model('Vote', voteSchema);

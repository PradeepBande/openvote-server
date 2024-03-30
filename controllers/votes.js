const VoteCount = require('../models/voteCount')
const Vote = require('../models/votes')

exports.vote = async (req, res) => {
    const { resolution, candidate, constituency, ip_address, mac_address, location } = req.body
    let data = await VoteCount.findOneAndUpdate({ resolution, candidate, constituency }, { $inc: { 'count': 1 } }).exec();
    return res.json({
        data
    })
}

exports.voteResults = (req, res) => {

}
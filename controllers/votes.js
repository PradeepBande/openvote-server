const VoteCount = require('../models/voteCount')
const Vote = require('../models/votes')

exports.vote = async (req, res) => {
    const { resolution, candidate, constituency, mac_address, location } = req.body

    let ipData = req.socket.remoteAddress.split(':');
    const ip_address = ipData[ipData.length - 1]

    await VoteCount.findOneAndUpdate({ resolution, candidate, constituency }, { $inc: { 'count': 1 } }).exec();

    let newVote = new Vote({ resolution, candidate, constituency })
    newVote.save(async (err, vote) => {
        if (!err || vote) {
            VoteCount.find({ resolution, constituency }).exec((err, data) => {
                if (err) {
                    return res.json({
                        code: 'failed',
                        status: 500,
                        message: 'internal server error',
                        err
                    })
                }
                return res.json({
                    code: 'success',
                    status: 200,
                    message: 'Vote cast has been successfull',
                    voteCount: data
                })
            })

        } else {
            return res.json({
                code: 'failed',
                message: 'server error',
                status: 500,
                err
            })
        }
    })
}

exports.voteResults = (req, res) => {

}

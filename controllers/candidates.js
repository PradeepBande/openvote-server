const Candidate = require('../models/candidates')
const { upload } = require('./files');
const moment = require('moment')

exports.addCandidate = async (req, res) => {
    const { candidate_name, candidate_info, city, district, state, party, constituency } = req.body
    let candidate_image_url = ''
    if (req?.files) {
        let { candidate_image } = req?.files
        let { name } = candidate_image
        name = moment().unix() + '-' + name
        candidate_image_url = await upload(name, candidate_image, 'candidates')
    }
    let newCandidate = new Candidate({
        candidate_image: candidate_image_url, candidate_name,
        candidate_info, city, district, state, party, constituency
    })

    newCandidate.save(async (err, candidate) => {
        if (!err || candidate) {
            return res.json({
                code: 'success',
                status: 200,
                message: 'Candidate added successfully'
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

exports.getCandidates = async(req, res) => {
    let candidates = await Candidate.find({})
    .populate('party')
    .populate('constituency')
    .exec()
    return res.json({
        code:'success',
        candidates,
        status:200
    })
}
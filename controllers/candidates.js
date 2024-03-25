const Candidate = require('../models/candidate.js')
const { upload } = require('./files');

exports.addCandidate = async (req, res) => {
    const { candidate_name } = req.body
    let candidate_image_url = ''
    if (req?.files) {
        let { candidate_image } = req?.files
        let { name } = candidate_image
        name = moment().unix() + '-' + name
        candidate_image_url = await upload(name, candidate_image, 'candidates')
    }
    let newCandidate = new Candidate({ candidate_image: candidate_image_url, candidate_name })

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
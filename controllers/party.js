const Party = require('../models/party.js')
const { upload } = require('./files');
const moment= require("moment")

exports.addParty = async (req, res) => {
    const { party_name } = req.body
    let party_logo_url = ''
    if (req?.files) {
        let { party_logo } = req?.files
        let { name } = party_logo
        name = moment().unix() + '-' + name
        party_logo_url = await upload(name, party_logo, 'party')
    }
    let newParty = new Party({ party_logo: party_logo_url, party_name })

    newParty.save(async (err, party) => {
        if (!err || party) {
            return res.json({
                code: 'success',
                status: 200,
                message: 'Party added successfully'
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
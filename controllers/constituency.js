const { constituencyList } = require('../utils/constituencyList')
const Constituency = require('../models/constituency')

exports.getConstituency = (req, res) => {
    Constituency.find().exec((err, data) => {
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
            message: 'internal server error',
            constituency: data
        })
    })
}

exports.addConstituency = async (req, res) => {
    Constituency.insertMany(constituencyList).then((data) => {
        return res.json({
            code: 'success',
            message: 'generate success',
            status: 200,
            data
        })
    })
        .catch((err) => {
            return res.json({
                error: err,
                code: 'server_error',
                message: 'Server error',
                status: 500
            })
        })

}
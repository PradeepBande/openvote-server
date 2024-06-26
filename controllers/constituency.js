const { constituencyList } = require('../utils/constituencyList')
const Constituency = require('../models/constituency')

async function getCounts(ModelName) {
    new Promise((resolve, reject) => {
        ModelName.countDocuments({}, (err, count) => {
            if (err) {
                console.log(err)
                resolve(false)
            } else {
                resolve(count)
            }
        })
    })
}

exports.getConstituency = async(req, res) => {
    let count = await getCounts(Constituency)

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
            constituency: data,
            count
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
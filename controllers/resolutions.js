const Resulotion = require('../models/resolutions.js')

exports.addResulotion = async (req, res) => {
    const { resolution_name, resolution_info, resolution_image,
        candidates, city, district, constituency,
        state } = req.body

    let newResulotion = new Resulotion({
        resolution_name, resolution_info,
        resolution_image, state,
        candidates, city, district,
        constituency
    })

    newResulotion.save(async (err, resulotion) => {
        if (!err || resulotion) {
            return res.json({
                code: 'success',
                status: 200,
                message: 'Resulotion added successfully'
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

exports.getResulotions = async (req, res) => {
    let resulotions = await Resulotion.find({}).exec()
    return res.json({
        code: 'success',
        resulotions,
        status: 200
    })
}
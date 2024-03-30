const Resulotion = require('../models/resolutions.js')
const VoteCount = require('../models/voteCount.js')

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
            let inserData = []
            for (let candidate of candidates) {
                inserData.push({
                    constituency,
                    resolution: resulotion?._id,
                    candidate
                })
            }

            VoteCount.insertMany(inserData)
                .then((data) => {
                    return res.json({
                        code: 'success',
                        status: 200,
                        message: 'Resulotion added successfully'
                    })
                }).catch(async (err) => {
                    await Resulotion.findByIdAndDelete(resulotion._id)
                    return res.json({
                        code: 'failed',
                        status: 500,
                        message: 'internal server error'
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

exports.getResulotions = async (req, res) => {
    let resolutions = await Resulotion.find()
        .populate('constituency')
        .populate({
            path: 'candidates',
            populate: {
                path: 'party',
                model: 'Party'
            }
        })
        .sort([['created_at', -1]])
        .exec()
    return res.json({
        code: 'success',
        resolutions,
        status: 200
    })
}

exports.getResulotionById = async (req, res) => {
    const { id } = req.params
    let resolution = await Resulotion.findById(id)
        .populate('constituency')
        .populate({
            path: 'candidates',
            populate: {
                path: 'party',
                model: 'Party'
            }
        })
        .exec()
    return res.json({
        code: 'success',
        resolution,
        status: 200
    })
}
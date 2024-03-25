const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    // next()
    try {

        const token = req.headers.authorization.replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userData = decoded
        next()

    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed',
            code: 'auth_failed',
            status: 404
        })
    }
}
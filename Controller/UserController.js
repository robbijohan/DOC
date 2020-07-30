const { User } = require('../models')
const { hashPassword, compare } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class userController {
    static register(req, res, next) {
        const { name, password, email } = req.body
        const hash = hashPassword(password)
        User.create({ name, password: hash, email, lokasi })
            .then(result => {
                res.status(data).json(201)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static login(req, res, next) {
        const { name, password } = req.body
        User.findOne({ where: { name } })
            .then(data => {
                const user = data.dataValues
                if (user && compare(password, user.password)) {
                    let payload = { id: user.id, name: user.name }
                    let token = generateToken(payload)
                    res.cookie('token', token)
                    res.redirect('/list')
                } else {
                    res.status(400).json('msg: data tidak ada')
                }
            })
            .catch(er => {
                res.status(400).json(err)
            })
    }
}


module.exports = userController
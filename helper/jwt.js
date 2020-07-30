const jwt = require('jsonwebtoken')

function generateToken(payload) {
    return jwt.sign(payload, 'OkEsIaPbOs')
}
function verifyToken(token) {
    return jwt.veryify(token, 'OkEsIaPbOs')
}
module.exports = { generateToken, verifyToken }
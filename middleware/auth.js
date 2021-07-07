const jwt = require('jsonwebtoken')
const config = require('config');

//middleware functions you always call next after reqres
//moves on to next piece of middleware
module.exports = function(req, res, next){
    //Get token from header, x-auth-token is key to token
    const token = req.header('x-auth-token')

    //check if doesnt exist
    if(!token){
        return res.status(401).json({ msg: 'No token, authorization denied'});
    }
    //pull out payload, set user to req.user so our route has it
    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded.user;
        next();
    } catch(err){
        res.status(401).json({ msg: 'Token is not valid'})
    }
}
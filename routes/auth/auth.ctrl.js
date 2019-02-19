// Import
const UserModel = require('../../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');



// Méthode AUTH


const register = () => {
    // TODO : add user.ctrl function
    
}
const login = (body, res) => {

    return new Promise( (resolve,reject ) =>{

        // search user by email
        UserModel.findOne( { email: body.email }, (error, user) => {
            if(error) reject(error)
            else if (!user) reject('Unknown user')
            else{
                
                // Check password
                const validPassword = bcrypt.compareSync(body.password, user.password)
                if(!validPassword) reject('Password not valid')
                else {
                    // Création d'un cookie pour envoyer le token user dans le header de la response
                    const userToken = user.generateJwt(user)
                    res.cookie('berners', userToken, {httpOnly: false});
                    console.log(userToken)
                    // console.log(jwt.verify(userToken))
                    return resolve(user);
                }
            }
        })
    })
}

const authJwt = (cookie) => {

    return new Promise( (resolve,reject ) =>{

        const opts = {
            jwtFromRequest: cookie,
            secretOrKey: process.env.JWT_SECRET
        }

        if(jwt.decode(opts.jwtFromRequest,opts.secretOrKey) == null || jwt.decode(opts.jwtFromRequest,opts.secretOrKey) == undefined ){
            return reject(error)
        } else {
            UserModel.findOne({ _id: jwt.decode(opts.jwtFromRequest,opts.secretOrKey)._id }, (error, user) => {
                if(error) reject(error)
                else if (!user) reject('Unknown user')
                else{
                        console.log('found!!!')
                        return resolve(user);
                    }
                })
            }  
    })
   
}


// Export

module.exports = {
    register,
    login,
    authJwt
}
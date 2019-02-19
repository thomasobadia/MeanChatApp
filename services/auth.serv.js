// Imports

const JwtStrategy = require('passport-jwt').Strategy;
const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken');



// Service definition

// Extract token from cookie
// const cookieExtractor = (req) => {
//     let token = null
//     if (req && req.cookies) token = req.cookies['berners']
//     return token
// }
// JWT auth
// const authJwt = () => {

//     // Jwt options for passport
//     const opts = {
//         jwtFromRequest: cookieExtractor,
//         secretOrKey: process.env.JWT_SECRET
//     }
//     passport.use(new JwtStrategy(opts, ( jwtPayload, done ) => {
//         // tester les donées du token
//         UserModel.findOne( { _id: jwtPayload._id }, ( error, user ) => {
//             if (error) done(error, false)
//             if ( user ){
//                 return done(null, user)
//             } else {
//                 return done(null, false)
//             }
//         })
//     }) )
// }
// *****************************************************************************************
// const authJwt = (cookie) => {
   
//     const opts = {
//         jwtFromRequest: cookie,
//         secretOrKey: process.env.JWT_SECRET
//     }

//     if(jwt.decode(opts.jwtFromRequest,opts.secretOrKey) == null || jwt.decode(opts.jwtFromRequest,opts.secretOrKey) == undefined ){
//         return false
//     } else {
//          UserModel.findOne( { _id: jwt.decode(opts.jwtFromRequest,opts.secretOrKey)._id }, ( error, user ) => {
//             if (error) console.log("hello")
//             if ( user ){  
//                 console.log('founduser')    
//             } else {
//                 console.log('notfounduser')    

//             }
//         })
//         .then( console.log('then'))
        
//     }
    

//     // console.log(jwt.decode(opts.jwtFromRequest,opts.secretOrKey))
//     // console.log('hello-2')
//     // console.log(cookie)
//     // console.log(jwt.decode(opts.jwtFromRequest,opts.secretOrKey)._id)
//         // tester les donées du token
       
// }

// **********************************************************************






// Export 

// module.exports = {
//     uthentication: (passport) => {
//         authJwt(passport);
//     }
// }

// module.exports = { authJwt }
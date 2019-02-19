// Import
const UserModel = require('../../models/user.model');
const bcrypt = require('bcrypt')



// CRUD

const createItem = (req) => {
    return new Promise((resolve, reject) => {
        // Verification de l'email
        UserModel.findOne( { email: req.body.email }, (error, data) => {
            if (error){
                // renvoyer le code error
                return reject(error);
            } else if (data){
                // Email deja inscrit
                return reject('User already exists')
            } else {
                // Inscrire un new user
                // Crypter le mot de passe 
                bcrypt.hash( req.body.password, 10)
                .then( hashedPassword => {
                    // modif le mdp
                    req.body.password = hashedPassword

                    // Inscrire l'utilisateur en BDD
                    UserModel.create(req.body)
                    .then (mongoResponse => resolve(mongoResponse))
                    .catch(mongoError => reject(mongoError))

                })
                .catch ( hashError => {
                    return reject(hashError)
                })

            }
        })
    })
  
}
const readItem = () => {

    // return new Promise( (resolve,reject ) =>{

          
    // UserModel.find({}, function(err, users) {
    //     var userMap = {};
    
    //     users.forEach(function(user) {
    //       userMap[user._id] = user;
    //     });
    
    //     res.send(userMap);  
    //   });

    // UserModel.findOne({ _id: jwt.decode(opts.jwtFromRequest,opts.secretOrKey)._id }, (error, user) => {
    //     if(error) reject(error)
    //     else if (!user) reject('Unknown user')
    //     else{
    //             console.log('found!!!')
    //             return resolve(user);
    //         }
    //     })
    // })

}
const updateItem = () => {

}
const deleteItem = () => {
    
}

// Export

module.exports = {
    createItem,
    readItem,
    updateItem,
    deleteItem,
}
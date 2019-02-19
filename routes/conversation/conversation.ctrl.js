// Import
const ConversationModel = require('../../models/conversation.model');


// CRUD

const createConv = (req) => {
    return new Promise((resolve, reject) => {
        
        // Verification de l'email
        ConversationModel.find( { user1: req.body.user1, user2: req.body.user2}, (error, data) => {
            if (error){
                // renvoyer le code error
                return reject(error);

            } else if(data.length > 0){
                return reject('Conversation already exist 1 ');
            } 
            
            else {
                ConversationModel.find( { user2: req.body.user1, user1: req.body.user2 }, (error, data) => {
                    if (error){
                        // renvoyer le code error
                        return reject(error);
        
                    } else if(data.length > 0){
                        return reject('Conversation already exist 2');
                    } 
                    
                    else {
                            
                            ConversationModel.create(req.body)
                            .then (mongoResponse => resolve(mongoResponse))
                            .catch(mongoError => reject(mongoError))
        
        
                    }
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
    createConv,
    readItem,
    updateItem,
    deleteItem,
}
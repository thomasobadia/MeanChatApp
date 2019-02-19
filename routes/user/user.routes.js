// Imports

// Node
const express = require('express');
const userRouter = express.Router();
//  Inner
const { createItem, readItem, updateItem, deleteItem} = require('./user.ctrl');
const checkFields = require('../../services/request.checker');
const UserModel = require('../../models/user.model');




// Config

class UserRouterClass 
{
    routes(){
        // Create item 
        userRouter.post('/', (req,res)=>{

        // Error : no body present
        if ( typeof req.body === 'undefined' || req.body === null ){
            return res.json({msg :'No body data provided', data : null })
        }

        // Check fields in the body
        const {ok,miss,extra} = checkFields(['name','email','password'], req.body);
        
        // Error bad field provided
        if (!ok ){
            return res.json({msg :'bad fields provided', data : {miss: miss, extra: extra} })
        }
        else{
            // register new user
            createItem(req)
            .then( apiResponse => res.json({msg :'User created', data : apiResponse }))
            .catch( apiResponse => res.json({msg :'User not created', data : apiResponse }))
        }

        })

        userRouter.post('/fromId', (req,res)=>{
            UserModel.findOne({ _id: req.body.id }, (error, user) => {
                if(error){
                    res.json({msg:'error', data: error})
                }else if (!user) res.json({msg:'no user', data: error})
                else{
                        console.log('found user!!!')
                        res.json({msg:'found', data: user})
                    }
                })
        })

        // Read item 
        userRouter.get('/', (req,res)=>{
            UserModel.find({}, function(err, users) {
                res.json({users: users});
             });
        })
        
        // Update item 
        
        
        // Delete item 
        userRouter.delete('/', (req,res)=>{
            res.json({msg : "Delete post"})
        })
    }

    init(){
        this.routes();
        return userRouter;
    }
}

// Export

module.exports =  UserRouterClass ;
// Imports

// Node
const express = require('express');
const messageRouter = express.Router();
//  Inner
const { createMessage } = require('./message.ctrl');
const MessageModel = require('../../models/message.model');




// Config

class MessageRouterClass 
{
    routes(){
        // Create item 


        messageRouter.post('/', (req,res)=>{
            if ( typeof req.body === 'undefined' || req.body === null ){
                return res.json({msg :'No body data provided', data : null })
            }
            else{
                createMessage(req)
                .then( apiResponse => res.json({msg :'Message created: ok', data : apiResponse }))
                .catch( apiResponse => res.json({msg :'Message not created 1', data : apiResponse }))
            }
            
        })

        // Read item 
        messageRouter.post('/getFromId', (req,res)=>{
            console.log(req.body.id)
            MessageModel.find({ idconversation: req.body.id }, function(err, messages) {
                console.log(messages)
                res.json({messages: messages});
             });
        })
        
        // Update item 
        
        
        // Delete item 
        messageRouter.delete('/', (req,res)=>{
            res.json({msg : "Delete post"})
        })
    }

    init(){
        this.routes();
        return messageRouter;
    }
}

// Export

module.exports =  MessageRouterClass ;
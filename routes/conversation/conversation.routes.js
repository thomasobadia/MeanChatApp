// Imports

const express = require('express');
const conversationRouter = express.Router();
const { createConv } = require('./conversation.ctrl');
const ConversationModel = require('../../models/conversation.model');





// Config

class ConversationRouterClass 
{
    routes(){
        // Create item 
        conversationRouter.post('/', (req,res)=>{
            if ( typeof req.body === 'undefined' || req.body === null ){
                return res.json({msg :'No body data provided', data : null })
            }
            else{
                createConv(req)
                .then( apiResponse => res.json({msg :'Conv created: ok', data : apiResponse }))
                .catch( apiResponse => res.json({msg :'Conv not created', data : apiResponse }))
            }
            
        })
        conversationRouter.post('/getall', (req,res)=>{

            ConversationModel.find({$or:[{user1 : req.body.id },{user2 : req.body.id }] }, function(err, conversations) {
                res.json({conversations: conversations});
             });
        })
        conversationRouter.post('/fromId', (req,res)=>{
            ConversationModel.findOne({ _id: req.body.id }, (error, conv) => {
                if(error){
                    res.json({msg:'error', data: error})
                }else if (!conv) res.json({msg:'no conv', data: error})
                else{
                        console.log('found conv!!!')
                        res.json({msg:'found', data: conv})
                    }
                })
        })

      
        
    }

    init(){
        this.routes();
        return conversationRouter;
    }
}

// Export

module.exports =  ConversationRouterClass ;
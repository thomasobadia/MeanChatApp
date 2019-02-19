// Imports

const express = require('express');
const authRouter = express.Router();
const checkFields = require('../../services/request.checker');
const { register, login, authJwt } = require('./auth.ctrl')



// Config

class AuthRouterClass 
{
    routes(){
        // Create item 
        authRouter.post('/register', (req,res)=>{
            res.json({msg : "Create auth", req : req.body})
        })

        // Read item 
        authRouter.post('/login', (req,res)=>{
             // Error : no body present
            if ( typeof req.body === 'undefined' || req.body === null ){
                return res.json({msg :'No body data provided', data : null })
            }

            // Check fields in the body
            const {ok,miss,extra} = checkFields(['email','password'], req.body);
            
            // Error bad field provided
            if (!ok ){
                return res.json({msg :'bad fields provided', data : {miss: miss, extra: extra} })
            }
            else{
                // try log user
               
                login(req.body, res)
                .then( apiResponse => res.json({msg : 'User logged', data : apiResponse }))
                .catch( apiResponse => res.json({msg :'User not logged', data : apiResponse }))

               
               
            }
        })

        authRouter.post('/auth', (req,res)=>{
            // Error : no body present
           if ( typeof req.body === 'undefined' || req.body === null ){
               return res.json({msg :'No body data provided', data : null })
           }

           authJwt(req.cookies['berners'])
           .then( apiResponse => res.json({msg : 'user auth', data : apiResponse }))
           .catch( apiResponse => res.json({msg :'User not auth', data : apiResponse }))

          
       })
       authRouter.post('/disconnect', (req,res)=>{
        // Error : no body present
        res.clearCookie('berners');
      
   })
        
    }

    init(){
        this.routes();
        return authRouter;
    }
}

// Export

module.exports =  AuthRouterClass ;
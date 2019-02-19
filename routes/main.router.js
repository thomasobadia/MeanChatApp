// Imports 

    // NodeJS
    const { Router } = require('express');
    const passport = require('passport')

    // Inner 
    const { setAuthentication } = require('../services/auth.serv')
    const AuthRouterClass = require ('./auth/auth.routes')
    const FrontRouterClass = require ('./front/front.routes')
    const UserRouterClass = require ('./user/user.routes')
    const ConversationRouterClass = require ('./conversation/conversation.routes')
    const MessageRouterClass = require ('./message/message.routes')


    // Config passport
        // setAuthentication(passport)


    // Définition des routeurs parent
    const mainRouter = Router();
    const apiRouter = Router();
    // Définition des routeurs enfants
    
    const authRouter = new AuthRouterClass();
    const frontRouter = new FrontRouterClass();
    const userRouter = new UserRouterClass();
    const conversationRouter = new ConversationRouterClass();
    const messageRouter = new MessageRouterClass();
    
    // Définir les routes 

    mainRouter.use('/api', apiRouter );
    apiRouter.use('/auth', authRouter.init())
    apiRouter.use('/user', userRouter.init())
    apiRouter.use('/conversation', conversationRouter.init())
    apiRouter.use('/message', messageRouter.init())
    mainRouter.use('/', frontRouter.init() );
    
    // Export

    module.exports =  mainRouter ;
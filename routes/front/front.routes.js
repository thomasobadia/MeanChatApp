// Imports

const express = require('express');
const frontRouter = express.Router();

// Config

class FrontRouterClass 
{
    routes(){
        // Config la page d'accueil
        frontRouter.get('/*', (req, res) => {
            // Rendre le fichier index
            res.render('index')
        });
    }

    init(){
        this.routes();
        return frontRouter;
    }
}

// Export

module.exports =  FrontRouterClass ;
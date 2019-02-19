// Imports
    //  Intégrer les variables d'environnement
    require('dotenv').config();
    // Gestion serveur
    const express = require('express');
    // Gestion du dosier client www
    const path = require('path')
    // Gestion du moteur de rendu
    const ejs = require('ejs');
    // Gestion du corps des requetes
    const bodyParser = require('body-parser');
    // Gestion des cookies
    const cookieParser = require('cookie-parser');
    // Mongo
    const connectMongoDB = require ('./services/db.connect')

    const  http = require('http').Server(express);
    var io = require('socket.io')(http);

    // Importer le routeur
    const mainRouter = require ('./routes/main.router')

    io.on('connection', function(socket){
        socket.on('refreshMessages', (data) => {
          io.emit('refresh', {
              msg: data
            });
        });

      });
      http.listen(8080, () => {
        console.log("Listening on port " + port);
      });

      

// Configuration

    // Création du serveur
    const server = express();
    const port = process.env.PORT;
    // Création d'une classe pour la config server
  
    
    class ServerClass{
        init(){
            // Config du moteur de rendu
            server.engine('html', ejs.renderFile);
            server.set( 'view engine', 'html');

            // Config du dossier client
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            // Body Parser
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({ extended: true }));
            // Cookie parser
            server.use(cookieParser(process.env.COOKIE_SECRET))

            // Router 
            server.use('/', mainRouter);
            
            // Lancer le serveur
            this.launch();
        }
        launch(){
            
              
              
            // Connexion MongoDB
            connectMongoDB()
            .then( mongooseResponse=> {
                server.listen(port, () => console.log({
                    mongo : `MongoDB is started on ${mongooseResponse}`,
                    server: `Server listening on port ${port}`
                }));
            })
            .catch( mongoooseError =>{
                console.error('MongoDb not connected', error)
            })
            // Lancer le serveur
        }
    }

// Launch

new ServerClass().init()
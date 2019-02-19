// Import 

const mongoose = require('mongoose');

// Config 
const connectMongoDB = () => {
        return new Promise((resolve, reject) =>{
            // Connection en BDD
            mongoose.connect(
                process.env.MONGO_URL,
                {useNewUrlParser: true}
            )
            .then( db => resolve(process.env.MONGO_URL))
            .catch( error => reject(error))
            
        });
}

// Export 

module.exports = connectMongoDB;
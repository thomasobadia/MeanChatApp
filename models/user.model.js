// Import

const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');


// Config
// Créer un schema mongoose
const userSchema = new Schema({
    name : String,
    email : String,
    password : String
});

// Création d'une méthode pour définir un token utilisateur
 userSchema.methods.generateJwt = (user) => {
     console.log(user)
        // set expiration
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 59);

        // JWT creation
        return jwt.sign({
            _id: user._id,
            name: user.name,
            password: user.password,
            email: user.email,
            expireIn: '10s',
            exp: parseInt(expiry.getTime() / 100, 10)
        }, process.env.JWT_SECRET);
    };
//



// Export

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
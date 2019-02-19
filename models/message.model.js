// Import

const mongoose = require('mongoose');
const { Schema } = mongoose;


// Config
// Créer un schema mongoose
const messageSchema = new Schema({
    idconversation: String,
    from : String,
    to : String,
    date: String,
    content: String
});



// Export

const MessageModel = mongoose.model('message', messageSchema);
module.exports = MessageModel;
// Import

const mongoose = require('mongoose');
const { Schema } = mongoose;


// Config
// Créer un schema mongoose
const conversationSchema = new Schema({
    user1 : String,
    user2 : String,
});



// Export

const ConversationModel = mongoose.model('conversation', conversationSchema);
module.exports = ConversationModel;
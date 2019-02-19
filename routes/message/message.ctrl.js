const MessageModel = require('../../models/message.model');


const createMessage = (req) => {
    return new Promise((resolve, reject) => {
        console.log(req.body)
    MessageModel.create(req.body)
    .then (mongoResponse =>   resolve(mongoResponse))
    .catch(mongoError =>  reject(mongoError))
    })
}
  


module.exports = {
    createMessage
}
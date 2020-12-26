var mongoose = require('mongoose')
var Schema = mongoose.Schema
var messageSchema = new Schema({
  messageSender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  date : Date,
        
  message: String,
  huddleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Huddle'
  },
    
}, {
  timestamps: true
})


module.exports = mongoose.model('Message',messageSchema)
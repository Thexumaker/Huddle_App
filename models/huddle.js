const mongoose = require('mongoose')
const Schema = mongoose.Schema
const huddleSchema = new Schema({
  memberCount: Number,
  interests: [{type:String}],
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'

    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    
    }

  ],
  event : {
    eventCount: Number,
    eventName: String,
    eventAddress: {
      street: String,
      city:String,
      zip:Number
  
    },
    interests: [{type:String}],
    
      
  }
    
}, {
  timestamps: true
})


module.exports = mongoose.model('Huddle',huddleSchema)
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var eventSchema = new Schema({
  eventCount: Number,
  eventName: String,
  eventAddress: {
    street: String,
    city:String,
    zip:Number

  },
  interests: [{type:String}],
  huddles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Huddle'

    }
  ]
    
}, {
  timestamps: true
})


module.exports = mongoose.model('Event',eventSchema)

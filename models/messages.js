var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messageSchema = new Schema({
    messageSender: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },

    timeSent : { type : Date, default: Date.now },
        
    message: {
        type:String
    },
    huddleId: {
        type: String
    }
    
}, {
    timestamps: true
});


module.exports = messageSchema;
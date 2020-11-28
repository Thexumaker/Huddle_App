var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var huddleSchema = new Schema({
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

    ]
    
}, {
    timestamps: true
});


module.exports = mongoose.model('Huddle',huddleSchema);
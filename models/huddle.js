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
    ]
    
}, {
    timestamps: true
});


module.exports = mongoose.model('Huddle',huddleSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    userEmail :{
        type: String,
        unique : true,
        required : false
    },
    password : {
        type: String,
        unique : false,
        required : true
    },
    Huddles: [{
        name:String,
        huddleId: Number

    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messages"
    }]
    
}, {
    timestamps: true
});


module.exports = usersSchema;
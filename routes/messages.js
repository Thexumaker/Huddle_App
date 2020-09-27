var Messages = require('./../controllers/messages');



module.exports = function(router) {
    router.post('/create', Messages.createMessage);
}

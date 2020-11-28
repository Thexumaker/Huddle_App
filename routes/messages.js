var Messages = require('./../controllers/messages');
const messageRouter = require('express').Router()
const checkAuth = require('./../controllers/middleware/check-auth');


messageRouter.get('/:id/', Messages.viewMessage);
messageRouter.post('/create', Messages.createMessage);


module.exports = messageRouter
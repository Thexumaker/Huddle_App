const User = require('./../controllers/users')
const userRouter = require('express').Router()
const checkAuth = require('./../controllers/middleware/check-auth');



userRouter.post('/create', User.createUser);
userRouter.get('/', User.getUsers);
userRouter.get('/:id', User.getUser);
userRouter.post('/', User.logIn);
userRouter.put('/update/:id',checkAuth, User.updateUser);
userRouter.delete('/remove/:id', User.removeUser);
//userRouter.get('/getMessages', User.getMessages);
module.exports = userRouter

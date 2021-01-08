// app.js
const config = require('./utils/config')
const express = require('express')
const app = express()
const usersRoutes = require('./routes/users')
const messageRoutes = require('./routes/messages')
const mongoose = require('mongoose')
const cors = require('cors')

const huddleRoutes = require('./routes/huddles')


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected')
  })
  .catch((error) => {
    console.log(error)
      
  })
app.use(cors({credentials: true, origin: 'https://huddle-frontend-flax.vercel.app/'}))
app.use(express.json())
app.use('/user',usersRoutes)
app.use('/messages',messageRoutes)
app.use('/huddle',huddleRoutes)


const port = config.PORT  || 8082


app.listen(port, () => console.log(`Server running on port ${port}`))

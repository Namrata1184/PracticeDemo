const express = require('express')
const bodyParser = require('body-parser')

// routes
const routerUser = require('./routes/user')
const routerNote = require('./routes/note')

const app = express()

// get input from user using request.body
app.use(bodyParser.json())

// add routes to the application
app.use('/user', routerUser)
app.use('/note', routerNote)

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
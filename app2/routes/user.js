const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
  response.send()
})

router.post('/signin', (request, response) => {
  const email = request.body.email
  const password = request.body.password
  
  const statement = `select * from user where email = '${email}' and password = '${password}';`
  db.query(statement, (error, users) => {
    const result = { status: '' }
    if (users.length == 0) {
      // user does not exist
      result['status'] = 'error'
      result['error'] = 'user does not exist'
    } else {
      // user exists
      const user = users[0]
      result['status'] = 'success'
      result['data'] = {
        id: user['id'],
        email: user['email'],
        firstName: user['firstName'],
        lastName: user['lastName']
      }
    }

    response.send(result)
  })
})

router.post('/signup', (request, response) => {
  const firstName = request.body.firstName
  const lastName = request.body.lastName
  const email = request.body.email
  const password = request.body.password
  const phone = request.body.phone

  const statement = `insert into user (firstName, lastName, email, password, phone) values(
    '${firstName}', '${lastName}', '${email}', '${password}', '${phone}')`
  
  db.query(statement, (error, dbResult) => {
    response.send(utils.createResult(error, dbResult))
  })
  
})

router.put('/', (request, response) => {
  response.send()
})

router.delete('/', (request, response) => {
  response.send()
})

module.exports = router
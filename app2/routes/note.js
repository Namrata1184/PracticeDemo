const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
  const userId = request.body.userId
  const statement = `select * from note where userId = ${userId}`
  db.query(statement, (error, dbResult) => {
    response.send(utils.createResult(error, dbResult))
  })
})

router.post('/', (request, response) => {
  const userId = request.body.userId
  const contents = request.body.contents

  const statement = `insert into note (userId, contents) values ('${userId}', '${contents}')`
  db.query(statement, (error, dbResult) => {
    // const result = utils.createResult(error, dbResult)
    // response.send(result)
    response.send(utils.createResult(error, dbResult))
  })

})

router.put('/', (request, response) => {
  const noteId = request.body.noteId
  const contents = request.body.contents

  const statement = `update note set contents = '${contents}' where id = ${noteId}`
  db.query(statement, (error, dbResult) => {
    // const result = utils.createResult(error, dbResult)
    // response.send(result)
    response.send(utils.createResult(error, dbResult))
  })
})

router.delete('/', (request, response) => {
  const noteId = request.body.noteId
  const statement = `delete from note where id = ${noteId}`
  db.query(statement, (error, dbResult) => {
    response.send(utils.createResult(error, dbResult))
  })
})

module.exports = router
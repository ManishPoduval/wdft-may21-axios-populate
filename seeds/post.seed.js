require('../db')
let PostModel = require('../models/Post.model')
const mongoose = require('mongoose')

// we're mimicking a scenario where a user will create a post
PostModel.create([
  {msgBody: 'Hello Pablo and Yanis', userId: '60d9cc916205ee3388ff99ca'},
  {msgBody: 'By Julie', userId: '60d9cc916205ee3388ff99cb'}
])
  .then(() => {
    console.log('Posts seeded')
    mongoose.connection.close()
  })
  .catch((err) => {
    console.log('ERROR: ', err)
    mongoose.connection.close()
  })
require('../db')
let UserModel = require('../models/User.model')
const mongoose = require('mongoose')

UserModel.create([
  {name: 'Manish', email: 'manish@ironhack.com', phone:'97234123'},
  {name: 'Julie', email: 'julie@ironhack.com', phone:'4567567234'},
  {name: 'Yanis', email: 'yanis@ironhack.com', phone:'9535123'},
  {name: 'Pablo', email: 'pablo@ironhack.com', phone:'7234132414'}
])
  .then(() => {
    console.log('Data seeded')
    mongoose.connection.close()
  })
  .catch(() => {
    mongoose.connection.close()
  })
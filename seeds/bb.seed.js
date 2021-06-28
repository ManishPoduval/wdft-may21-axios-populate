
// 1. MAKE THE CONNECTION
require('../db')

// 2. REQUIRE THE MODEL AND INSERT DATA

const BBModel = require('../models/BB.model')
const axios = require('axios')
const mongoose = require('mongoose')

axios.get('https://www.breakingbadapi.com/api/characters')
  .then((response) => {
     // Add the data to your database 
     // .insertMany has been used here  
      return BBModel.insertMany(response.data)
  })
  .then(() => {
      console.log('BB data added')
      mongoose.connection.close()
  })
  .catch(() => {
      console.log('Axios BB fetch failed')
      mongoose.connection.close()
  })


// 3. CLOSE THE CONNECTION






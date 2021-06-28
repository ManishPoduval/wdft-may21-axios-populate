const mongoose = require('mongoose')

const BBSchema = new mongoose.Schema({
    name: String, 
    img: String, 
    nickname: String
})

const BBModel = mongoose.model('character', BBSchema)

module.exports = BBModel

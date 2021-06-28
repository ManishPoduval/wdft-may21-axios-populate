const mongoose = require('mongoose')

// Always require the model your are referrencing so that mongoose knows where are you referring from
require('./User.model')

const PostSchema = new mongoose.Schema({
    msgBody: String,
    userId : {
      ref: 'user', // name of your collection that you're referring to
      type: mongoose.Schema.Types.ObjectId // the type of info that will be stored in this field
    }
})

const PostModel = mongoose.model('post', PostSchema)

module.exports = PostModel

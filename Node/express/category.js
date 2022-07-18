var mongoose = require('mongoose')

var mongoSchema = mongoose.Schema

var categorySchema = new mongoSchema({
    "name": String,
    "count": Number
}, {collection: "Category"})

module.exports = mongoose.model('Category',categorySchema)
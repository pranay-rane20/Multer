const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/nulter')


//For DiskStorage
// const userSchema = new mongoose.Schema({
//     name:String,
//     image:String,
// })


//For MemoryStorage
const userSchema = new mongoose.Schema({
    name:String,
    image:Buffer,
})

module.exports = mongoose.model('user',userSchema);
const mongoose = require('mongoose')
const validator = require('validator')


// mongodb://127.0.0.1:27017/task-manager-api

console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

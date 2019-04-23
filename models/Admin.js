const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const AdminSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    super: {
        type: String, 
        required: true
    },
    registered: {
        type: String, 
        default:'no',
        required: false
    },


    
   
})

module.exports = Admin = mongoose.model('admins', AdminSchema)
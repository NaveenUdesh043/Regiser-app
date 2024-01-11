const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    mobNo: String,
    email: String,
    password: String,
    image: String,
   
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel
const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect("mongodb://localhost:27017/Ticket", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    console.log("Database Connected");
} 

module.exports = connectDB
const express = require('express')
const app = express()
const db = require('./config/db')
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db() 
app.use(express.json());

app.use("/", require("./routes/auth"))

app.use(express.static(path.resolve(__dirname, 'public')));

const PORT = 5000

const server = app.listen(PORT, console.log(`Herbie is fully loaded on port: ${PORT}`))

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1))
})
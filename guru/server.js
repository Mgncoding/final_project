const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require ('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } 
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const accountRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// app.use('/exercises', accountRouter);
app.use('/', userRouter)


app.listen(PORT, () => {
    console.log(`Sever is running on port: ${PORT}`)
})

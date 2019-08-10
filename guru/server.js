const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const logger = require("morgan");

var User = require("./models/user.model")

app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Routes

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {
  // Create a new user using req.body
  User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

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

// const accountRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// app.use('/exercises', accountRouter);
app.use('/', userRouter)


app.listen(PORT, () => {
    console.log(`Sever is running on port: ${PORT}`)
})

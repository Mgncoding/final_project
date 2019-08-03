const express = require('express');
const mongoose = require('mongoose');
// const axios = require('axios');
const logger = require('morgan')


const PORT = 3000;


//Initialize Express
var app = express();

//Use morgan logger for logging requests

app.use(logger("dev"));
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/userLog", { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);

//when deployed to heroku
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/userLog";

// mongoose.connect(MONGODB_URI);


  
  // Start the server
  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const cors = require('cors');
const router = require('./router/router')
const todoController = require('./controllers/todoController');
require('dotenv').config();

// Environment Variables (getting ready for Heroku)
const PORT = process.env.PORT || 3000
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud'

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('MongoDB connection established:', mongoURI)
)
// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(cors());
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public'));

// Routes
app.use(router);

app.listen(PORT, () => {
  console.log('Let\'s get things done on port', PORT)
})

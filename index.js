const express = require('express');
const mongoose = require('mongoose');
const Keys = require('./config/key')
require('./services/passport');
// const authRoutes = require('./routes/authRoutes');
require('./models/User')

// This connects to the DB on mLab
mongoose.connect(Keys.mongoURI);

// This app object is set up to listen for incoming request
const app = express();

// Connects the routes to the app
// authRoutes(app);
require('./routes/authRoutes')(app)


const PORT = process.env.PORT || 5000;
app.listen(PORT);

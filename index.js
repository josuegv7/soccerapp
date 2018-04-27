const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const Keys = require('./config/key');

require('./models/User');
require('./models/Game');
require('./services/passport');

// This connects to the DB on mLab
mongoose.connect(Keys.mongoURI);
//

// This app object is set up to listen for incoming request
const app = express();
//

// Create a Cookie and Session for Logged in User
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [Keys.cookieKey]
  })
)
app.use(passport.initialize());
app.use(passport.session());
//


// Connects the routes to the app
require('./routes/authRoutes')(app);
require('./routes/gameRoutes')(app);
//


if (process.env.NODE_ENV === 'production') {
  //  Express serve production assets (main.js or main.css)
  app.use(express.static('soccerapp/build'));
  // Express will serve up index.html file if it does not recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'soccerapp', 'build', 'index.html'));
  });

}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

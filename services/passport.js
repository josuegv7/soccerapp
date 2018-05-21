const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/key');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log("profile",profile);
        const existingUser = await User.findOne({ googleID: profile.id })
            if (existingUser) {
              // Not New User
              done( null, existingUser );
            } else{
              // New User
            const user = await new User({ 
              googleID: profile.id, 
              Name: profile.displayName,
              gender: profile.gender }).save()
            done( null, user )
            }
       }
  )
);

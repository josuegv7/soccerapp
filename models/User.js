const mongoose = require('mongoose');
// const { Schema } = mongoose
const Schema = mongoose.Schema;


const User = new Schema({
  googleID: String
});

mongoose.model('users', User)

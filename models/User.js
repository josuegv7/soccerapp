const mongoose = require('mongoose');
const { Schema } = mongoose
// const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: String,
  Name: String, 
});

mongoose.model('users', userSchema);

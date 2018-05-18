const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const gameSchema = new Schema ({
  subject: String,
  date: Date,
  time: String,
  location: String,
  recipients: [RecipientSchema],
  number: String,
  message: String,
  yes: { type: Number, default:0 },
  no: { type: Number, default:0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('games', gameSchema);

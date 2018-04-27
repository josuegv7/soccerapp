const mongoose = require('mongoose');
const { Schema } = mongoose
const RecipientSchema = require('./Recipient');

const gameSchema = new Schema ({
  title: String,
  body: String,
  subject: String,
  date: Date,
  recipients: [RecipientSchema],
  yes: { type: Number, default:0 },
  no: { type: Number, default:0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('games', gameSchema);
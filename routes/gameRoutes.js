const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Game = mongoose.model('games')


module.exports = app => {
  app.post(
    '/soccerapp/game', requireLogin, (req, res) => {
      const { title, subject, body, date, recipients } = req.body;

      const game = new Game({
        title,
        subject,
        body,
        date,
        recipients: recipients.split(',').map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
      });
    });
};

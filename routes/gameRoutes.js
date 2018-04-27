const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Mailer = require('../services/Mailer');
const emailTemplate = require('../services/emailTemplates/gameEmailTemplate');


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

      // Here we send a new email:
      const mailer = new Mailer(game, emailTemplate(game));
      mailer.send()
    });
};

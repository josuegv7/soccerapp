const _ = require('lodash');

const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Mailer = require('../services/Mailer');
const emailTemplate = require('../services/emailTemplates/gameEmailTemplate');


const Game = mongoose.model('games')


module.exports = app => {
  app.get('/soccerapp/game/thanks',
(req, res) => {
  res.send("Thanks!! See you Then");
});

  app.post('/soccerapp/game/webhooks', (req, res) => {
    const p = new Path('soccerapp/game/:gameId/:choice');

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, gameId: match.gameId, choice: match.choice };
        }
        })
      .compact()
      .uniqBy( 'email', 'gameId' )
      .value();
      res.send({})
    });


  app.post(
    '/soccerapp/game', requireLogin, async (req, res) => {
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
      try {
      await mailer.send();
      await game.save();
    } catch (err) {
      res.status(422).send(err);
    }
    });
};

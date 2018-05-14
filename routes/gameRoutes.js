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
        // console.log(req.body)
        const p = new Path('/soccerapp/game/:gameId/:choice');
        // console.log(p)
        _.chain(req.body)
          .map(({ email, url }) => {
            const match = p.test(new URL(url).pathname);
            console.log(match);
            if (match) {
              return {
                email,
                gameId: match.gameId,
                choice: match.choice
              };
            }
          })
          .compact()
          .uniqBy('email', 'gameId')
          .each(({
            gameId,
            email,
            choice
          }) => {
            Game.updateOne({
              _id: gameId,
              recipients: {
                $elemMatch: {
                  email: email,
                  responded: false
                }
              }
            }, {
              $inc: {
                [choice]: 1
              },
              $set: {
                'recipients.$.responded': true
              },
              lastResponded: new Date()
            }).exec();
          })
          .value();

        res.send({});
    });


  app.post('/soccerapp/game', requireLogin, async (req, res) => {
      const { title, subject, body, time, date, recipients } = req.body;

      const game = new Game({
        title,
        subject,
        body,
        time,
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

const Keys = require('../../config/key');

module.exports = (game) => {
  return `
  <html>
    <body>
    <h5> You are invited to a game on: </h5>
      <p> ${game.time}</p>
      <p>${game.body}</p>
      <div>
        <a href="${Keys.redirectDomain}/soccerapp/game/${game.id}/yes">Yes</a>
      </div>
      <div>
        <a href="${Keys.redirectDomain}/soccerapp/game/${game.id}/no"> No </a>
      </div>
    </body>
  </html>
  `;
};

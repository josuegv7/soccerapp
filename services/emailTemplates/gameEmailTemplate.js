const Keys = require('../../config/key');

module.exports = (game) => {
  return `
  <html>
    <body>
    <h5> You are invited to a game on: </h5>
      <h6> ${game.subject}</h6>
      <h6> ${game.time}</h6>
      <h6> ${game.date}</h6>
      <p> ${game.location}</h6>
      <p> ${game.message}</p>
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

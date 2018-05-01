const Keys = require('../../config/key');

module.exports = (game) => {
  return `
  <html>
    <body>
      <p>${game.body}</p>
      <div>
        <a href="${Keys.redirectDomain}/soccerapp/game/thanks">Yes</a>
      </div>
      <div>
        <a href="${Keys.redirectDomain}/soccerapp/game/thanks">No</a>
      </div>
    </body>
  </html>
  `;
};

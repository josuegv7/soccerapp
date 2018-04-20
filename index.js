const express = require('express');
const app = express();
  // This app object is set up to listen for incoming request

app.get('/', (req, res) => {
  res.send({ hi: "there" })
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);

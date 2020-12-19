const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello there, user!');
});

app.get('teapot', (req, res) => {
  res.set('Z-full-stack', '4life');
  res.status(418);
  res.send('I prefer coffee');
});

app.listen(port, () => console.log(`example app listening on port ${port}`));

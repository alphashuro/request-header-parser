var app = require('express')();
var getInfo = require('./get-info');

app.get('/api/whoami/', (req, res) => {
  const info = getInfo(req);
  res.send(info);
});

app.listen(8080);

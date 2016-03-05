var app = require('express')();
var getInfo = require('./get-info');

app.get('/api/whoami/', (req, res) => {
  const info = getInfo(req);
  res.send(info);
});

app.listen(process.env.PORT || 8080);

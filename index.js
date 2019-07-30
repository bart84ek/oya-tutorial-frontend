const express = require('express');
const request = require('request');
const port = process.env.PORT || 3000;
const api = process.env.API || 'http://localhost:5000';
const app = express();

app.get('/', (req, res) => {
  request(api + "/", (err, response, body) => {
    if(response && response.statusCode == 200) {
      body = JSON.parse(body);
      res.send(`<h1>${body.msg}</h1>`);
    } else {
      res.send(`<h1>Error: Api offline :(</h1><code>${err}</code>`);
    }
  });
});


app.listen(port, () => console.log(`TutFrontend app listening on port ${port}!`))

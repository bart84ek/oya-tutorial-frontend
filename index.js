const express = require('express');
const request = require('request');
const app = express();
const port = 3000;
const api = "http://localhost:5000";

app.get('/', (req, res) => {
  request(api + "/", (err, response, body) => {
    console.log('responseCode:', response && response.statusCode);
    if(response && response.statusCode == 200) {
      body = JSON.parse(body);
      res.send('<h1>' + body.msg + '</h1>');
    } else {
      res.send('<h1>Error: Api offline :(</h1><code>' + err + '</code>');
    }
  });
});


app.listen(port, () => console.log(`TutFrontend app listening on port ${port}!`))

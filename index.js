const { application } = require('express');
const express = require('express');
const { readFile } = require('fs');

readFile('./Hello world.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

const app = express();

app.get('/', (req, res) => {
  readFile('./hello-world.html', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Sorry, we have an Internal Server Error');
    } else {
      res.send(data);
    }
  })
});

application.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});


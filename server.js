const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/rent'));

app.listen(process.env.PORT || 8000)

//pathLocationStrategy

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/rent/index.html'));
})

console.log('Console Listening!');
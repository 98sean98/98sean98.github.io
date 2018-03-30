const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

// ===== CONFIGURATION =====
// dotenv for environment variables
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
// for reading custom stylesheets
app.use(express.static(__dirname + '/public'));
app.locals.moment = require('moment');


// ===== ROUTES =====
app.get('/'), function(req, res) {
  res.render('index.html');
}


// ===== LISTENER =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Personal Website is running on Port 3000...");
});

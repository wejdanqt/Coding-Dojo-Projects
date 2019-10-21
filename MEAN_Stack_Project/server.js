const express = require("express");
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose');

app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.connect('mongodb://localhost/mean_stack', {useNewUrlParser: true});



require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, () => console.log("listening on port 8000"));
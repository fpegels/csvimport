var app = require('express')();
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');

var server = require('http').Server(app);

app.use(fileUpload());

server.listen(3000);

mongoose.connect('mongodb+srv://fpegels:KS25d_Md2qtiX2E@cluster0-jruwr.gcp.mongodb.net/deudosoft')
.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var template = require('./template.js');
app.get('/template', template.get);

var upload = require('./upload2.js');
app.post('/', upload.post);

var getJson = require('./getjson');
app.get('/deudores', getJson.get);
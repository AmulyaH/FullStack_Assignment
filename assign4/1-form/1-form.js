const port = 8080;

var express = require('express'),
    app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

app.get('/submit', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit',function(req,res){
    var name = req.body.fname;
    var email= req.body.email;
    var comment = req.body.message;

    res.write('Name:'+' '+name+'\n');
    res.write('Email:'+' '+email+'\n');
    res.write('Comment:'+' '+comment);
    
    res.send();
});

app.listen(port);
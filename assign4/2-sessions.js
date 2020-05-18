var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
var visitedRoutes = [];

app.use(cookieParser());
app.use(session({secret: "ghghf",
                 resave: false,
                 saveUninitialized: true}));

app.get('/*', function(req, res){
   res.write("Currently on route:" + req.originalUrl + "\n" +  "\n");
   if(req.session.page_views){
      res.write("Previously visited" + "\n" + "\n");
      visitedRoutes.forEach(route => res.write(route + "\n"));
   } else {
      req.session.page_views = 1;
      var fullUrl = req.protocol + '://' + req.get('host');
      res.write("Welcome to " + fullUrl);
   }
   res.send();
   if(visitedRoutes.indexOf(req.originalUrl) == -1)
   {
      visitedRoutes.push(req.originalUrl);
   }
});
app.listen(5000);